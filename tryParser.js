const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
var arrFiles = ['classNokta.js', 'classSinif.js'],
    arrObj = [];

arrFiles = scanFolder('C:\\Projeler\\FMC.Turkiye.Node\\Ihale\\Modules\\kuark-db\\src\\', '_es.js');

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

function createYuml(arrCls) {
    var classes = arrCls.reduce((accumulator, cls, idx, arr) => {
        return `${accumulator}${cls}${idx < arr.length - 1 ? '\n' : ''}`;
    }, '');

    var inheritances = arrCls.reduce((accumulator, cls, idx, arr) => {
        if (cls.Inherit) {
            return `${accumulator}[${cls.Inherit}]^-[${cls.Name}]${idx < arr.length - 1 ? '\n' : ''}`;
        }
        return accumulator;
    }, '');

    var uses = arrCls.reduce((accumulator, cls, idx, arr) => {
        console.log(cls.Name);
        // [HttpContext]uses -.->[Response]        
        var arrExcludedTypes = [
            'Array', 'Object', 'object', 'string', 'number', 'any', 'boolean', 'integer', 'String', '*',
            'Array.<string>', 'Array.<number>', 'Array.<Object>', 'Array.<object>', 'Array.<integer>'
        ]

        if (cls.Uses.size > 0) {
            for (var tip of cls.Uses) {
                if (arrExcludedTypes.indexOf(tip) > -1) continue;

                accumulator = `${accumulator}[${cls.Name}]uses -.->[${tip}]${idx < arr.length - 1 ? '\n' : ''}`;
            }
        }
        return accumulator;
    }, '');

    var yuml = `// {type:class}
// {direction:topDown}
[note: You can stick notes on diagrams too!{bg:cornsilk}]
${classes}
${inheritances}
${uses}`;

    return yuml;
}


function createPlantuml(arrCls) {
    var classes = arrCls.reduce((accumulator, cls, idx, arr) => {
        return `${accumulator}${cls}${idx < arr.length - 1 ? '\n' : ''}`;
    }, '');

    var inheritances = arrCls.reduce((accumulator, cls, idx, arr) => {
        if (cls.Inherit) {
            return `${accumulator}[${cls.Inherit}]^-[${cls.Name}]${idx < arr.length - 1 ? '\n' : ''}`;
        }
        return accumulator;
    }, '');

    var uses = arrCls.reduce((accumulator, cls, idx, arr) => {
        console.log(cls.Name);
        // [HttpContext]uses -.->[Response]        
        var arrExcludedTypes = [
            'Array', 'Object', 'object', 'string', 'number', 'any', 'boolean', 'integer', 'String', '*',
            'Array.<string>', 'Array.<number>', 'Array.<Object>', 'Array.<object>', 'Array.<integer>'
        ]

        if (cls.Uses.size > 0) {
            for (var tip of cls.Uses) {
                if (arrExcludedTypes.indexOf(tip) > -1) continue;

                accumulator = `${accumulator}[${cls.Name}]uses -.->[${tip}]${idx < arr.length - 1 ? '\n' : ''}`;
            }
        }
        return accumulator;
    }, '');

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
${inheritances}
${uses}
@enduml`;

    return plantuml;
}

function writeFile(content, destPath) {
    destPath = destPath || (__dirname + '/uml.yuml');
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
        prop
        if (!prop) {
            throw new Error('prop bilgisi undefined > prop: ', prop);
        }

        /**
         * @prop {(string[])} Names 
         */
        this.Names = prop.names;
    }

    toString() {
        let sonuc = this.Names.reduce((accumulator, name, idx, arr) => {
            return `${accumulator}${name}${idx < arr.length - 1 ? ',' : ''}`;
        }, '');
        return sonuc;
    }

    toYumlString() {
        let sonuc = this.Names.reduce((accumulator, name, idx, arr) => {
            return `${accumulator}${name}${idx < arr.length - 1 ? ',' : ''}`;
        }, '');
        return sonuc;
    }
}

class ParamInfo {
    constructor(prop) {
        try {
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

    toYumlString() {
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

    toYumlString() {
        let sonuc = `${this.Type}`;
        return sonuc;
    }
}

class ConstructorInfo {
    constructor(prop) {
        this.Id = prop.id;
        this.Name = prop.name;
        this.Params = (prop.params || []).map(p => new ParamInfo(p));
    }

    toString() {
        return `${this.Name}(${this.Params.reduce(p => p.toString())})`;
    }

    toYumlString() {
        return `${this.Name}(${this.Params.reduce(p => p.toString())})`;
    }
}

class MethodInfo {
    constructor(prop) {
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
            showParams: true,
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

    toYumlString(config) {
        config = Object.assign({
            showParams: false,
            showReturnTypes: true
        }, config);

        var ret = this.Return.reduce((accumulator, ret, idx, arr) => {
            return `${accumulator}${ret}${idx < arr.length - 1 ? ' ' : ''}`;
        }, '');

        var paramList = this.Params.reduce((accumulator, param, idx, arr) => {
            return `${accumulator}${param}${idx < arr.length - 1 ? ',' : ''}`
        }, '');

        let result = this.Name;

        if (config.showParams) result += `(${paramList})`;
        else result += '()';

        if (config.showReturnTypes) result += `:${ret}`;

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

class MemberInfo {
    // "name":"X","kind":"member","scope":"instance","memberof":"Sinif","properties":[{"type":{"names":["number"]}}],
    constructor(prop) {
        prop

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
         * @prop {string} Id
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
        this.Type = null; // şimdilik null aşağıda propertynin durumuna göre değişecek

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

    toYumlString() {
        let donusTipi = this.Type.toString();
        //console.log(donusTipi)
        return `${this.Name}${(this.Type ? ':' + this.Type : '')}`;
    }
}

class ClassInfo {
    constructor(ci) {
        this.Id = ci.id;
        this.Name = ci.name;
        this.Description = ci.description;
        this.ConstructorInfo = null;
        this.Methods = [];
        this.StaticMethods = [];
        this.Members = [];

        /* ilişkiler */
        // inheritance
        this.Inherit = ci.augments ? ci.augments[0] : null;
        // uses
        this.Uses = new Set();

    }

    parse(props) {
        var KIND = {
            CLASS: 'class',
            CONTRUCTOR: 'constructor',
            METHOD: 'function',
            MEMBER: 'member'
        }

        /* find contructors */
        var constructors = props.filter(s => s.kind == KIND.CONTRUCTOR);
        this.ConstructorInfo = new ConstructorInfo(constructors);

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

        // find uses relation
        this.findUses();
    }

    findUses() {
        // Find in methods
        this.Methods.forEach(
            /**
             * @param {MethodInfo} m
             */
            (m, idx, arr) => {
                /** 
                 * @type {ParamInfo[]} 
                 */
                var params = m.Params;

                params.forEach(p => {
                    p.Type.Names.forEach(
                        n => {
                            this.Uses.add(n.replace('Array.<', '').replace('>', ''));
                        }
                    )
                });
            });

        // Find in constructor
        this.ConstructorInfo.Params.forEach(p => {
            p.Type.Names.forEach(
                n => {
                    this.Uses.add(n.replace('Array.<', '').replace('>', ''));
                }
            )
        });

        // Find in members
        this.Members.forEach(member => {
            try {
                member.Type.Names.forEach(name => {
                    this.Uses.add(name.replace('Array.<', '').replace('>', ''));
                });
            } catch (e) {
                console.error("Error has occured looping inside member types");
                console.log(e.stack);
            }
        });
    }

    toString() {
        // [User|+Forename+;Surname;+HashedPassword;-Salt|+Login();+Logout()]
        let sonuc = '[]';
        let className = this.Name;
function GetSetTeklestir(arr, member){
//arr.filter(m=>m.Id 
}

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

            return `${accumulator}{static} ${member.Access}${r_w_only}${member.Getter?'get':'set'}${member.Name}${(member.Type ? ':' + member.Type : '')}${idx < arr.length - 1 ? '\n' : ''}`;
        }, '');


        let methods = this.Methods.reduce((accumulator, method, idx, arr) => {
            return `${accumulator}${method.toString()}${idx < arr.length - 1 ? '\n' : ''}`;
        }, '');


        let staticMethods = this.StaticMethods.reduce((accumulator, method, idx, arr) => {
            return `${accumulator}{static} ${method.toString()}${idx < arr.length - 1 ? '\n' : ''}`;
        }, '');

        return `
class ${className} {
.. Static Members ..
    ${staticMembers}
.. Members ..
    ${members}
.. Static Methods ..
    ${staticMethods}
.. Methods ..
    ${methods}
}
`;
    }

    toYumlString() {
        // [User|+Forename+;Surname;+HashedPassword;-Salt|+Login();+Logout()]
        let sonuc = '[]';
        let className = this.Name;
        let members = this.Members.reduce((accumulator, member, idx, arr) => {
            let r_w_only = '';

            // if the member's Getter=true and there is no member which has Setter=true >> readOnly
            if (member.Getter && arr.filter(a => a.Id == member.Id).length == 1)
                r_w_only = '<<r/o>>';

            // if the member's Getter=true and there is no member which has Setter=true >> readOnly
            if (member.Setter && arr.filter(a => a.Id == member.Id).length == 1)
                r_w_only = '<<w/o>>';

            return `${accumulator}${r_w_only}${member.Name}${idx < arr.length - 1 ? ';' : ''}`;
        }, '');


        let methods = this.Methods.reduce((accumulator, method, idx, arr) => {
            return `${accumulator}${method.toString()}${idx < arr.length - 1 ? ';' : ''}`;
        }, '');

        return `[${className}|${members}|${methods}]`;
    }
}

/* nesneler */
fileScanner('C:\\temp\\jsdoc-yuml\\test_OptionsBolge.js')
    .then(data => {
        console.log(JSON.stringify(data));


        /* find classes */
        var classes = data.filter(s => s.kind === 'class');
        var arrCls = [];
        for (var cl of classes) {
            var cls = new ClassInfo(cl);
            var clsMembers = data.filter(d => d.memberof === cls.Name);

            cls.parse(clsMembers);
            arrCls.push(cls);
            //console.log(JSON.stringify(cls));
        }

        //var yuml = createYuml(arrCls);
        var plantuml = createPlantuml(arrCls);
        console.log(plantuml);

        //writeFile(yuml, 'c:\\temp\\uml.yuml');
    })


