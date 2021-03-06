const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
var arrFiles = ['classNokta.js', 'classSinif.js'],
    arrObj = [];

/* Commandline parametreler geliyorsa */
function setGlobals(args) {
    switch (args[0]) {
        case '-f':
            arrFiles = [args[1]];
            break;
        case '-d':
            const extension = (args[2] == '-e') ? args[3] : '*.*';
            arrFiles = scanFolder(args[1], extension);
            break;
        default:
            console.log("Parametreler noksan olabilir mi?");
            arrFiles = ['C:\\temp\\jsdoc-yuml\\test_OptionsBolge.js'];
            break;
    }
}
process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});
var args = process.argv.slice(2);
if (args) setGlobals(args);

/*---- parametre bilgileri işlendir */



function scanFolder(startPath, filter) {
    var result = [];
    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    var files = fs.readdirSync(startPath);
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]);

        try {
            var stat = fs.lstatSync(filename);
            if (stat.isDirectory()) {
                scanFolder(filename, filter); //recurse
            }
            else if (filename.indexOf(filter) >= 0) {
                result.push(filename);
            };
        } catch (e) {
            console.log(e);
        }
    };
    return result;
}

async function fileScanner(filePath) {
    let sonuc = [];
    if (filePath) {
        var obj = await convertFileToJsdoc(filePath);
        sonuc.push(...obj);
    } else {
        for (var fn of arrFiles) {
            var filePath = `${fn}`;
            var obj = await convertFileToJsdoc(filePath);
            sonuc.push(...obj);
        }
    }
    return sonuc;
}

async function convertFileToJsdoc(fp) {
    //console.log(fp);

    return new Promise((r, j) => {
        exec(`jsdoc2md --json ${fp}`, { maxBuffer: 1024 * 500 }, (err, stdout, stderr) => {
            if (err) return j(err);

            try {
                let obj = JSON.parse(stdout);
                r(obj);
            } catch (er) {
                j(er);
            }
        });
    });
}



/**
 * 
 * @param {Array} arrCls 
 */
function createPlantuml(arrCls) {
    var classes = arrCls.reduce((accumulator, cls, idx, arr) => {
        return `${accumulator}${cls}${idx < arr.length - 1 ? '\n' : ''}`;
    }, '');

    var inheritances = arrCls.reduce((accumulator, cls, idx, arr) => {
        if (cls.Inherit) {
            return `${accumulator}${cls.Inherit}^-${cls.Name}${idx < arr.length - 1 ? '\n' : ''}`;
        }
        return accumulator;
    }, '');

    // var uses = arrCls.reduce((accumulator, cls, idx, arr) => {
    //     console.log(cls.Name);
    //     // [HttpContext]uses -.->[Response]        
    //     var arrExcludedTypes = [
    //         'Array', 'Object', 'object', 'string', 'number', 'any', 'boolean', 'integer', 'String', '*',
    //         'Array.<string>', 'Array.<number>', 'Array.<Object>', 'Array.<object>', 'Array.<integer>'
    //     ]

    //     if (cls.Uses.size > 0) {
    //         for (var tip of cls.Uses) {
    //             if (arrExcludedTypes.indexOf(tip) > -1) continue;

    //             accumulator = `${accumulator}[${cls.Name}]uses -.->[${tip}]${idx < arr.length - 1 ? '\n' : ''}`;
    //         }
    //     }
    //     return accumulator;
    // }, '');

    var plantuml = `
@startuml
sprite $wo [9x9/16z] usA002uu0yG28GG3I08vK44mHZ0O81Z1
sprite $ro [9x9/16] {
000000000
0AAAA0000
0A000AA00
0A0000A00
0A0000A00
0AAAA0000
0A00A0000
0A000A000
0A0000A00
}

${classes}

@enduml`;

    return plantuml;
}

function writeFile(content, destPath) {
    destPath = destPath || (__dirname + '/plantuml.wsd');
    fs.writeFileSync(destPath, content, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
}

/* Classes */
/**
 * @class TypeInfo
 */
class TypeInfo {

    constructor(prop) {
        /** @prop {(string[])} */
        this.Names = prop ? prop.names : [];
    }

    toString() {
        let sonuc = this.Names.reduce((accumulator, name, idx, arr) => {
            return `${accumulator}${name}${idx < arr.length - 1 ? ',' : ''}`;
        }, '');
        return sonuc;
    }
}

class ParamInfo {
    constructor(prop) {
        try {
            prop
            /**
             * @prop {string} Name
             */
            this.Name = prop.name;
            /**
             * @prop {string} Description
             */
            this.Description = prop.description;
            /**
             * @prop {TypeInfo} Type
             */
            this.Type = new TypeInfo(prop.type);
        } catch (e) {
            console.log(prop);
            throw e;
        }
    }

    toString() {
        return `${this.Name}:${this.Type}`;
    }

}

class ReturnInfo {
    constructor(prop) {
        this.Description = prop.type.description;
        this.Type = new TypeInfo(prop.type);
    }

    toString() {
        let sonuc = `${this.Type}`;
        return sonuc;
    }
}

class ConstructorInfo {
    /*
    {
        "id": "OptionsBolge()",
        "longname": "OptionsBolge",
        "name": "OptionsBolge",
        "kind": "constructor",
        "memberof": "OptionsBolge",
        "params": [
          {
            "type": {
              "names": [
                "ContructorInjection"
              ]
            },
            "name": "enjeksiyon"
          },
          {
            "type": {
              "names": [
                "UsesOlsunTipi"
              ]
            },
            "name": "usesParam"
          }
        ],
        "order": 2
      }
    */
    /**
     * @param {{id:string, longName:string, name:string, kind:'constructor', memberof:string, params:{name:string, type:{names:string[]}}[]}} prop
     */
    constructor(prop) {
        prop

        this.Id = '';
        this.Name = '';
        this.Params = [];

        if (prop) {
            this.Id = prop.id;
            this.Name = prop.name;
            this.Params = prop.params.map(p => {
                p
                return new ParamInfo(p)
            });
            console.log(this.Params);

        }
    }

    toString() {
        return `${this.Name}(${this.Params.reduce(p => p.toString())})`;
    }

}

class MethodInfo {
    constructor(prop) {
        /** @prop {number} Id */
        this.Id = prop.id;
        this.Name = prop.name;
        this.Description = prop.description;
        this.Return = prop.returns ? prop.returns.map(r => new ReturnInfo(r)) : [];
        this.Params = prop.params.map(p => new ParamInfo(p));

        /**
         *  @prop {AccessInfo} Access
         */
        this.Access = new AccessInfo(prop.access);
    }

    toString(config) {
        config = Object.assign({
            showParams: false,
            showReturnTypes: true
        }, config);

        var paramList = this.Params.reduce((accumulator, param, idx, arr) => {
            return `${accumulator}${param}${idx < arr.length - 1 ? ',' : ''}`
        }, '');

        var returnInfo = this.Return.reduce((accumulator, ret, idx, arr) => {
            return `${accumulator}${ret}${idx < arr.length - 1 ? ' ' : ''}`;
        }, '');

        // +getUserList(departmentName) > Array.<User>
        let result = `${this.Access}${this.Name}`;

        if (config.showParams) result += `(${paramList})`;
        else result += '()';

        if (config.showReturnTypes) result += `:${returnInfo}`;

        return result;
    }
}

class AccessInfo {
    constructor(access = 'public') {

        this.Access = access;
    }

    toString() {
        switch (this.Access) {
            case 'public':
                return '+';

            case 'protected':
                return '#';

            case 'private':
                return '-';

            case 'package private':
                return '~';
            default:
                return '+';
        }
    }
}

/**
 * prop, property, member, type, public, private ile dekore edilmiş this.XXX diye işaretlenmiş tüm değişkenler
 * buraya gelebilir. Yani member olmak için sadece this.XXX olması yeterlidir. 
 * Bu membera ait tip bilgisi eğer prop ya da property ile işartliyse
 * properties içinde tip bilgisine şöyle erişilebilir:
 * "properties": [
      {
        "type": {
          "names": [
            "string"
          ]
        }
      }
    ]
 * type, member ile işaretliyse tip bilgisine şöyle erişilir:
 * "type": {
      "names": [
        "string"
      ]
    }
 * Yapılması gereken properties ya da type bilgisi içindeki tip namelerini almak
 */
class MemberInfo {
    // "name":"X","kind":"member","scope":"instance","memberof":"Sinif","properties":[{"type":{"names":["number"]}}],
    /**
     * Yapıcı metot içinde hede hödö
     * @constructor
     * @param {{name:string,id:string}} prop 
     */
    constructor(prop) {
        /* 
        - id ve name bilgisini doğrudan kökten alabiliriz!

        - Tip bilgisi için biraz daha bakmak gerekli
        2 Tip property var
        @prop | @property ile tanımlanan
          Örn:
            @prop {number} X aciklama
            this.X
        
        get|set ile tanımlanan
          Örn:
            get Y(){ return this.x_; }
            set Y(value){ return this.x_=value; }
        
        sadece get varsa @readonly ile işaretlenebilir
        sadece set varsa vardır :)
        her ikisi de olursa onlarda olurlar :))
        
        
        1.a) Tip propertylerin tip bilgisi           .properties[0].type          bilgisinden
        1.b) Tip propertylerin description bilgisi   .properties[0].description   bilgisinden
        2) Tip propertylerin tip bilgileri
           a) get için 
                @type {number} aciklama 
            yorumunyla yazılmış olmalı ki "kökten",  .type   diye alınabilsin
        
            b) set propertylerin sadece 1 parametre alması mecburidir bu yüzden,
                @param {number} value aciklama
                set Y(value) {...}
            diye yazılmış olmalıki   params[0].type   içinden alınsın
        */



        /**
        * @property {string} Id AY madiiii
        */
        this.Id = prop.id;

        /**
         * @prop {string} Name
         */
        this.Name = prop.name;

        /**
         * @prop {boolean} Getter
         */
        this.Getter = false; // şimdilik false aşağıda kontrollerini yapacağız

        /**
         * @prop {boolean} Setter
         */
        this.Setter = false; // şimdilik false aşağıda kontrollerini yapacağız

        /**
         * @prop {TypeInfo} Type propertynin tip bilgis
         */
        this.Type = prop.type
            ? new TypeInfo(prop.type)
            : new TypeInfo(); // şimdilik null aşağıda propertynin durumuna göre değişecek

        /**
         * @prop {string} Description
         */
        this.Description = ''; // şimdilik boş ama aşağıda propertynin durumuna göre değişecek.

        /**
         *  @prop {(MemberInfo[])} StaticMembers
         */
        this.StaticMembers = [];

        /**
         *  @prop {(MemberInfo[])} Members
         */
        this.Members = [];

        /**
         *  @prop {AccessInfo} Access
         */
        this.Access = new AccessInfo(prop.access);

        /* ************************************
          @property | @prop ile süslenmişse
        *************************************/
        if (prop.properties) {
            this.Type = new TypeInfo(prop.properties[0].type);
            this.Description = prop.properties[0].description;
        }

        /* ************************************
          GETTER metot ise parametre alamaz
          @return ile süslenmiş olabilir
          @type ile süslenmiş olabilir
          hiç bir bilgi yoksa new TypeInfo()
         *************************************/
        if (Array.isArray(prop.params) && prop.params.length == 0) {

            this.Getter = true;
            this.Description = prop.description;

            if (prop.returns) {
                this.Type = new TypeInfo(prop.returns[0].type);
            } else if (prop.type) {
                this.Type = new TypeInfo(prop.type);
            } else {
                this.Type = new TypeInfo();
            }
        }

        /* ************************************
           SETTER metot ise 1 parametre almak zorunda
           @param ile süslenmiş olmalı!
           @type ile süslenmiş olabilir
         *************************************/
        if (Array.isArray(prop.params) && prop.params.length == 1) {

            this.Setter = true;
            this.Description = prop.description;

            if (prop.params) {
                this.Type = new TypeInfo(prop.params[0].type);
            } else if (prop.type) {
                this.Type = new TypeInfo(prop.type);
            } else {
                this.Type = new TypeInfo();
            }
        }
    }

    toString() {
        let donusTipi = this.Type.toString();
        //console.log(donusTipi)
        return `${this.Access}${this.Name}${(this.Type ? ':' + this.Type : '')}`;
    }
}

class TipiTip {
    constructor(prop) {

        /**
         * @prop {bool} Class Concrete sınıf ise true
         */
        this.Class = prop.kind == 'class';

        /**
         * @prop {bool} Virtual Abstract sınıf ise true
         */
        this.Virtual = prop.virtual;

        /**
         * @prop {bool} Interface Interface sınıf ise true
         */
        this.Interface = prop.kind == 'interface';

    }
}

class InheritanceInfo {
    constructor(prop) {

        /**@prop {boolean} Implements If it inheirts from interface */
        this.Implmenets = prop.augments ? true : false;

        /**@prop {boolean} Implements If it inheirts from class */
        this.Extends = prop.implements ? true : false;

        /** @prop {string} BaseType Base type name*/
        this.BaseType = prop.augments
            ? prop.augments[0]
            : (prop.implements ? prop.implements[0] : null);

    }
}

class ClassInfo extends TipiTip {
    constructor(ci) {
        super(ci);
        this.Id = ci.id;
        this.Name = ci.name;
        this.Description = ci.description;
        this.ConstructorInfo = null;
        this.Methods = [];
        this.StaticMethods = [];
        this.Members = [];

        /* ilişkiler */
        // inheritance
        this.Inheritance = new InheritanceInfo(ci);

        // Dependency
        this.Dependency = new Set();

        // Aggregation
        this.Aggregation = new Set();

        // Composition
        this.Composition = new Set();

    }

    parse(props) {
        var KIND = {
            CLASS: 'class',
            CONSTRUCTOR: 'constructor',
            METHOD: 'function',
            MEMBER: 'member'
        }

        /* find contructor. 1 tane constructor olabilir */
        var contructorMethod = props.find(prop => prop.kind == KIND.CONSTRUCTOR);
        contructorMethod
        this.ConstructorInfo = new ConstructorInfo(contructorMethod);

        console.log(this.ConstructorInfo);
        console.log(this.Name, ':', this.ConstructorInfo);


        /* find members */
        var members = props.filter(s => s.kind == KIND.MEMBER && s.scope == 'instance');
        this.Members = members.map(m => new MemberInfo(m));

        /* find methods */
        var methods = props.filter(s => s.kind == KIND.METHOD && s.scope == 'instance');
        this.Methods = methods.map(m => new MethodInfo(m));

        /* find static members */
        var staticMembers = props.filter(s => s.kind == KIND.MEMBER && s.scope == 'static');
        this.StaticMembers = staticMembers.map(m => new MemberInfo(m));

        /* find static methods */
        methods = props.filter(s => s.kind == KIND.METHOD && s.scope == 'static');
        this.StaticMethods = methods.map(m => new MethodInfo(m));

        this.findAssociations();
    }

    findAssociations() {

        /* 
        Dependency Aggregation Composition
          1. Member tipleri doğrudan Composition olsun
          2. this.Member diye tanımlıysa, 
            a) get,set metotları yoktur yani dışarıdan atama yapılabilir -> Aggregation'a at
            b) değilse Get|Set metotları var
               ı) Member readyOnly ise ataması ya diğer metotların içinden yapılıyor -> Composition'a at
                  çünkü metotlara dışarıdan mı değer geldi içlerinde mi new ile mi yaratıldı bilmiyoruz
              ıı) değilse, set dışarıya açık ve dışarıdan atanabilir -> Aggregation'a at
          3. Constructor'a parametre olarak geliyorsa o zaman Aggregation'a at
          4. Metotlara parametre olarak geliyorsa o zaman Aggregation'a at
          5. Metotlara parametre gelen tipler dışarıdan gelen nesne tipleridir -> Dependency e at (uses)
        */

        this.Members.forEach((/** @type {MemberInfo} */member) => {
            console.log(member);
            console.log(member.Type);

            for (let name of member.Type.Names) {
                name = name.replace('Array.<', '').replace('>', '');

                if (!(member.Getter || member.Setter))// getter ve setter false ise this.property diye tanımlı, get|set yok demektir
                    this.Aggregation.add(name);

                else if (member.Setter) // writable -> dışarıdan atanıyor Aggregationa at
                    this.Aggregation.add(name);

                else if (member.Getter) {// belki sadece readonly -> writable ? Aggregationa : Compositiona at

                    let setter = this.Members.find(m => m.Name == member.Name && m.Setter);
                    if (setter)//Setter'ı var -> Aggregationa at
                        this.Aggregation.add(name);
                    else
                        this.Composition.add(name);
                }

            }
        });


        this.Methods.forEach((/** @type {MethodInfo} */method) => {
            /**@type {ParamInfo} */
            let param;
            for (param of method.Params) {
                for (let name of param.Type.Names) {
                    name = name.replace('Array.<', '').replace('>', '');
                    this.Dependency.add(name);
                }
            }
        });

        this.ConstructorInfo.Params.forEach((/**@type {ParamInfo} */param) => {
            param
            for (let name of param.Type.Names) {
                name = name.replace('Array.<', '').replace('>', '');
                name
                this.Dependency.add(name);
            }
        });

        console.log(this.Aggregation);
        console.log(this.Composition);
        console.log(this.Dependency);

    }


    toString() {
        // class|interface TypeName
        let sonuc = '[]';
        let className = `${(
            this.Interface
                ? 'interface'
                : this.Virtual
                    ? 'abstract class'
                    : 'class')} ${this.Name}`;

        // extends|implements TypeName
        let extends_implements = '';
        if (this.Inheritance.BaseType)
            extends_implements = this.Inheritance.Extends
                ? `extends ${this.Inheritance.BaseType}`
                : `implements ${this.Inheritance.BaseType}`;


        let members = this.Members.reduce((accumulator, member, idx, arr) => {
            let r_w_only = '';

            // if the member's Getter=true and there is no member which has Setter=true >> readOnly
            if (member.Getter && arr.filter(a => a.Id == member.Id).length == 1)
                r_w_only = '<$ro>';

            // if the member's Getter=true and there is no member which has Setter=true >> readOnly
            if (member.Setter && arr.filter(a => a.Id == member.Id).length == 1)
                r_w_only = '<$wo>';

            return `${accumulator}${r_w_only} ${member}${idx < arr.length - 1 ? '\n' : ''}`;
        }, '');

        let staticMembers = this.StaticMembers.reduce((accumulator, member, idx, arr) => {
            let r_w_only = '';

            // if the member's Getter=true and there is no member which has Setter=true >> readOnly
            var getSetliMember = arr.filter(a => a.Id == member.Id).length == 2;
            if (member.Getter && !getSetliMember)
                r_w_only = '<$ro>';

            // if the member's Getter=true and there is no member which has Setter=true >> readOnly
            if (member.Setter && !getSetliMember)
                r_w_only = '<$wo>';

            return `${accumulator}{static} ${member.Access}${r_w_only}${member.Getter ? 'get' : 'set'}${member.Name}${(member.Type ? ':' + member.Type : '')}${idx < arr.length - 1 ? '\n' : ''}`;
        }, '');


        let methods = this.Methods.reduce((accumulator, method, idx, arr) => {
            return `${accumulator}${method.toString()}${idx < arr.length - 1 ? '\n' : ''}`;
        }, '');

        let staticMethods = this.StaticMethods.reduce((accumulator, method, idx, arr) => {
            return `${accumulator}{static} ${method.toString()}${idx < arr.length - 1 ? '\n' : ''}`;
        }, '');

        /* *****************************************
         * Associations - Aggregations - Compositions 
         * ******************************************/
        let excludedTypes = [
            'Array', 'Object', 'object', 'string', 'number', 'any', 'boolean', 'integer', 'String', '*',
            'Array.<string>', 'Array.<number>', 'Array.<Object>', 'Array.<object>', 'Array.<integer>'
        ];

        // Dependencies
        let dependencies = '';
        for (let d of this.Dependency) {
            if (excludedTypes.indexOf(d) == -1
                && !this.Aggregation.has(d)
                && !this.Composition.has(d))
                dependencies += `${this.Name} -> ${d}\n`
        }

        // Aggregations
        let aggregations = '';
        for (let a of this.Aggregation) {
            let isDependent = this.Dependency.has(a);
            if (excludedTypes.indexOf(a) == -1
                && !this.Composition.has(a))
                aggregations += `${this.Name} o-${(isDependent ? '>' : '-')} ${a}\n`
        }
        // Compositions
        let compositions = '';
        for (let c of this.Composition) {
            let isDependent = this.Dependency.has(c);
            if (excludedTypes.indexOf(c) == -1)
                compositions += `${this.Name} *-${(isDependent ? '>' : '-')} ${c}\n`
        }

var uml_staticMembers = `${(staticMembers ? '.. Static Members ..\n' + staticMembers : '' )}`;
var uml_members = `${(members ? '.. Members ..\n' + members : '' )}`;
var uml_staticMethods = `${(staticMethods ? '.. Static Methods ..\n' + staticMethods : '' )}`;
var uml_methods = `${(methods ? '.. Methods ..\n' + methods : '' )}`;

        return `
${className} ${extends_implements} {
    ${uml_staticMembers} ${uml_members} ${uml_staticMethods} ${uml_methods}
}

${dependencies}
${aggregations}
${compositions}
`;
    }
}

/* nesneler */
fileScanner(arrFiles[0])
    .then(data => {
        console.log(JSON.stringify(data));


        /* find classes */
        var tipler = data.filter(s => (s.kind === 'class' || s.kind === 'interface'));
        var arrCls = [];
        for (var cl of tipler) {
            var cls = new ClassInfo(cl);
            var clsMembers = data.filter(d => d.memberof === cls.Name);

            cls.parse(clsMembers);
            arrCls.push(cls);
            //console.log(JSON.stringify(cls));
        }

        var plantuml = createPlantuml(arrCls);
        console.log(plantuml);

        writeFile(plantuml, 'c:\\temp\\plantuml.txt');
    })


