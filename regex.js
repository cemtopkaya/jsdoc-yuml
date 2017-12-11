const { exec } = require('child_process');
const fs= require('fs');

class Yuml{
  constructor(){
    this.ClassInfo='';
    this.ConstructorInfo='';
    this.MethodInfo=[];
    this.StaticMethodInfo='';
  }
}
var y = new Yuml;

function convertFileToJsdoc() {
  return new Promise((r, j) => {
    exec('jsdoc2md --json testclass.js ', (err, stdout, stderr) => {
      if (err) {
        return j(err);
      }
      try {
        var obj = JSON.parse(stdout);
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
      y.ConstructorInfo = `${o.name}`;
    }
  });
  return obj;
}
function getInstanceMethods(obj) {
  var instanceMethods = [];
  obj.forEach(o => {
    if (o.kind === 'function' && o.scope === 'instance') {
      y.MethodInfo.push(`${o.name}():${o.returns[0].type.names[0]}`);
    }
  });
  return obj;
}
function getStaticMethods() { }
function createYuml() {
  var yuml = `// {type:class}
// {direction:topDown}
[note: You can stick notes on diagrams too!{bg:cornsilk}]`;
  var uml = `${yuml}\n[${y.ClassInfo}|${y.ConstructorInfo}()${';' + y.MethodInfo.reduce(a => a)}]`;
  return uml;
}


convertFileToJsdoc()
  .then(getClassInfo)
   .then(getContstructorInfo)
   .then(getInstanceMethods)
  // .then(getStaticMethods)
  .then(createYuml)
  .then(writeFile)
