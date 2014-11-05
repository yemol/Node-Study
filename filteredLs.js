//require('fs') -- 调用文件操作模块
//require('path') --  调用路径模块
//fs.readdir -- 读取一个目录下的所有文件名

var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var filter = process.argv[3];

fs.readdir(dir, function(err, list) {
  var i = 0;
  for(i = 0; i < list.length; i++)
  {
    if (list[i].indexOf(filter) > 0)
    {
      console.log(list[i]);
    }
  }
});
