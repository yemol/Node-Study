//module.exports -- 暴露module的默认方法
//list.filter －－ 通过数组的filter方法对数组进行过滤，可以使用一个返回布尔值的方法作为参数
//path.extname -- 取得某一个文件或者路径＋文件的后缀名

module.exports ＝ function(dir, filter, callback)
{
  var fs = require('fs');
  var path = require('path');

  fs.readdir(dir, function(err, list) {
    if (err) return callback(err);

    list = list.filter(function(file){
      return path.extname(file) == "." + filter;
    });
    callback(null,list);
  });

}
