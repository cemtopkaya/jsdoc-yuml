var plantuml = require('node-plantuml');
var fs = require('fs');
 
var gen = plantuml.generate("./test_OptionsBolge.js");
gen.out.pipe(fs.createWriteStream("output-file.png"));