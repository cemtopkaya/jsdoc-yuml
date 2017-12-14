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
    console.log(fp);
    
    return new Promise((r, j) => {
        exec(`jsdoc2md --json ${fp}`, (err, stdout, stderr) => {
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

    var yuml = `// {type:class}
// {direction:topDown}
[note: You can stick notes on diagrams too!{bg:cornsilk}]
${classes}
${inheritances}`;

    return yuml;
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

class TypeInfo {
    constructor(prop) {
        prop
        this.Names = prop.names;
    }
    toString() {
        let sonuc = this.Names.reduce((accumulator, name, idx, arr) => {
            return `${accumulator}${name}${idx < arr.length - 1 ? ',' : ''}`;
        }, '');
        sonuc
        return sonuc;
    }
}

class ParamInfo {
    constructor(prop) {
        prop
        this.Name = prop.name;
        this.Description = prop.description;
        this.Type = new TypeInfo(prop.type);
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
        let sonuc = `${this.Type.toString()}`;
        sonuc
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
}

class MethodInfo {
    constructor(prop) {
        this.Id = prop.id;
        this.Name = prop.name;
        this.Description = prop.description;
        console.log(prop.returns)
        this.Return = prop.returns ? prop.returns.map(r => new ReturnInfo(r)) : [];
        prop
        this.Params = prop.params.map(p => new ParamInfo(p));
        var a = this.Params
        a
    }
    toString() {
        var ret = this.Return.reduce((accumulator, ret, idx, arr) => {
            return `${accumulator}${ret}${idx < arr.length - 1 ? ' ' : ''}`;
        }, '');

        var paramList = this.Params.reduce((accumulator, param, idx, arr) => {
            return `${accumulator}${param}${idx < arr.length - 1 ? ',' : ''}`
        }, '');

        return `${this.Name}(${paramList})${ret ? ':' + ret : ''}`;
    }
}

class MemberInfo {
    // "name":"X","kind":"member","scope":"instance","memberof":"Sinif","properties":[{"type":{"names":["number"]}}],
    constructor(prop) {
        prop
        this.Id = prop.id;
        this.Name = prop.name;
        this.Type = (prop.properties || []).map(p => new TypeInfo(p.type));
        this.Description = prop.description;
        this.Return = prop.returns ? new ReturnInfo(prop.returns) : null;
        console.log(prop)

        this.Getter = Array.isArray(prop.params) && prop.params.length == 0;
        this.Setter = Array.isArray(prop.params) && prop.params.length == 1;
    }

    toString() {
        let donusTipi = this.Type.toString();
        console.log(donusTipi)
        return `${this.Name}${(this.Type ? ':' + this.Type : '')}`;
    }
}

class ClassInfo {
    constructor(ci) {
        this.Inherit = ci.augments ? ci.augments[0] : null;
        this.Id = ci.id;
        this.Name = ci.name;
        this.Description = ci.description;
        this.ConstructorInfo = null;
        this.Methods = [];
        this.StaticMethods = [];
        this.Members = [];
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
        var members = props.filter(s => s.kind == KIND.MEMBER);
        this.Members = members.map(m => new MemberInfo(m));

        /* find methods */
        var methods = props.filter(s => s.kind == KIND.METHOD && s.scope == 'instance');
        methods
        this.Methods = methods.map(m => new MethodInfo(m));

        /* find static methods */
        methods = props.filter(s => s.kind == KIND.METHOD && s.scope == 'static');
        this.StaticMethods = methods.map(m => new MethodInfo(m));
    }

    toString() {
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
        members

        let methods = this.Methods.reduce((accumulator, method, idx, arr) => {
            return `${accumulator}${method.toString()}${idx < arr.length - 1 ? ';' : ''}`;
        }, '');

        return `[${className}|${members}|${methods}]`;
    }
}

/* nesneler */
fileScanner('C:\\temp\\jsdoc-yuml\\jsdocTestClass.js')
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
            console.log(JSON.stringify(cls));
        }
        classes
        var yuml = createYuml(arrCls);
        //writeFile(yuml, 'uml.yuml');
    })


