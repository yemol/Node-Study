//使用require调用自己的模块。默认的模块的入口方法是export
//我们可以使用函数作为参数进行传递
//数组foreach遍历数组执行foreach中的方法

var myModule = require("./mymodule.js");
var dir = process.argv[2];
var filterstr = process.argv[3];

myModule(dir,filterstr,function (err, list)
{
  if (err != null) return console.error(err);
  list.forEach(
    function(file){
      console.log(file);
    });
});





