//require('fs')     [调用文件访问核心库]
//fs.readFileSync   [读取文件]
var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var lines = buffer.toString().split('\n');
console.log(lines.length-1);