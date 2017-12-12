const { exec } = require('child_process');
const fs = require('fs');

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
    this.Name = mi.name;
    this.Description = mi.description;
    
    this.Return = mi.returns ? mi.returns.map(r=>new ParamInfo(r)) : null;
    this.Params = mi.params.map(p => new ParamInfo(p));
  }
  toString() {
    return `${this.Name}:${this.Return.reduce(t => t)}`;
  }
}


class ConstructorInfo {
  constructor(name, params) {
    this.Name = name;
    this.Params = params.map(p => new ParamInfo(p));
  }

  toString() {
    return `${this.Name}(${this.Params.reduce(p => p.toString())})`;
  }
}

class MemberInfo {
  // "name":"X","kind":"member","scope":"instance","memberof":"Sinif","properties":[{"type":{"names":["number"]}}],
  constructor(prop) {
    this.Name = prop.name;
    this.Type = prop.properties[0].type.names;
    this.Description = prop.description;
  }

  toString() {
    return `${this.Name}:${this.Type.reduce(t => t.toString())}`;
  }
}

class YumlClass {
  constructor() {
    this.ClassInfo = '';
    this.ConstructorInfo = null;
    this.Methods = [];
    this.StaticMethods = [];
    this.Members = [];
  }
}
var y = new YumlClass;

function convertFileToJsdoc() {
  return new Promise((r, j) => {
    exec('jsdoc2md --json testclass.js', (err, stdout, stderr) => {
      if (err) {
        return j(err);
      }
      try {
        var obj = JSON.parse(stdout);
        console.log(JSON.stringify(obj))
        obj
        r(obj);
      } catch (er) {
        j(er);
      }
    });
  });
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

function getClassInfo(obj) {
  obj.forEach(o => {
    if (o.kind === 'class') {
      y.ClassInfo = `${o.name}`
    }
  });
  return obj;
}

function getContstructorInfo(obj) {
  var constructor = '';
  obj.forEach(o => {
    if (o.kind === 'constructor') {
      y.ConstructorInfo = new ConstructorInfo(o.name, o.params);
    }
  });
  return obj;
}

function getInstanceMethods(obj) {
  obj.forEach(o => {
    o
    if (o.kind === 'function' && o.scope === 'instance') {

      y.Methods.push(new MethodInfo(o));
    }
  });
  return obj;
}

function getInstanceMembers(obj) {
  obj.forEach(o => {
    if (o.kind === 'member' && o.scope === 'instance') {
      y.Members.push(new MemberInfo(o));
    }
  });
  return obj;
}
function getStaticMethods(obj) {
  obj.forEach(o => {
    if (o.kind === 'function' && o.scope === 'static') {
      y.Members.push(`${o.name}():${o.returns[0].type.names[0]}`);
    }
  });
  return obj;
}
function createYuml() {
  var classInfo = y.ClassInfo.toString();
  var constructorInfo = y.ConstructorInfo.toString();
  var methods = y.Methods.reduce(a => a.toString());
  var members = y.Members.reduce(a => a.toString());

  var yuml = `// {type:class}
// {direction:topDown}
[note: You can stick notes on diagrams too!{bg:cornsilk}]`;
  var uml = `${yuml}\n[${classInfo}|${members}|${constructorInfo};${methods}]`;
  return uml;
}


convertFileToJsdoc()
  .then(getClassInfo)
  .then(getContstructorInfo)
  .then(getInstanceMethods)
  .then(getInstanceMembers)
  .then(getStaticMethods)
  .then(createYuml)
  .then(writeFile)
