const { exec } = require('child_process');
const fs = require('fs');
var arrFiles = ['testclass.js', 'testOkul.js'],
    arrObj = [];


var convertFileToJsdoc = async (fp) => {
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

async function fileScanner() {
    console.log("giriş");
    let sonuc = [];
    for (var fn of arrFiles) {
        var filePath = `${__dirname}/${fn}`;
        var obj = await convertFileToJsdoc(filePath);
        sonuc.push(...obj);
        console.log("gelişme 1: ", sonuc.length);
    }
    sonuc
    return sonuc;
}

/* Classes */

class ParamInfo {
    constructor(param) {
        this.Name = param.name;
        this.Description = param.description;
        this.Type = param.type.names;
    }
    toString() {
        return `${this.Name}:${this.Type.reduce(t => t)}`;
    }
}

class ReturnInfo {
    constructor(param) {
        this.Description = param.description;
        this.Type = param.type.names;
    }

    toString() {
        return `${this.Type.reduce(t => t)}`;
    }
}

class MethodInfo {
    constructor(mi) {
        mi
        this.Name = mi.name;
        this.Description = mi.description;

        this.Return = mi.returns ? mi.returns.map(r => new ParamInfo(r)) : null;
        this.Params = mi.params.map(p => new ParamInfo(p));
    }
    toString() {
        return `${this.Name}:${this.Return.reduce(t => t)}`;
    }
}

class ConstructorInfo {
    constructor(prop) {
        this.Name = prop.name;
        prop
        this.Params = (prop.params || []).map(p => new ParamInfo(p));
    }

    toString() {
        return `${this.Name}(${this.Params.reduce(p => p.toString())})`;
    }
}

class MemberInfo {
    // "name":"X","kind":"member","scope":"instance","memberof":"Sinif","properties":[{"type":{"names":["number"]}}],
    constructor(prop) {
        this.Name = prop.name;
        prop
        this.Type = prop.properties[0].type.names;
        this.Description = prop.description;
    }

    toString() {
        return `${this.Name}:${this.Type.reduce(t => t.toString())}`;
    }
}

class ClassInfo {
    constructor(ci) {
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
}

/* nesneler */
fileScanner()
    .then(data => {

        /* find classes */
        var classes = data.filter(s => s.kind === 'class');
        classes

        for (var cl of classes) {
            cl
            var cls = new ClassInfo(cl);
            var clsMembers = data.filter(d => d.memberof === cls.Name);

            cls.parse(clsMembers);
            cls
        }
    })


