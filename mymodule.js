//module.exports -- 暴露module的默认方法

module.exports = function(dir, filter, callback)
{
  var fs = require('fs');

  fs.readdir(dir, function(err, list) {
    if (err) return callback(err);

    var fileList = Array();
    for(i = 0; i < list.length; i++)
    {
      if (list[i].indexOf(filter) > 0)
      {
        fileList.push(list[i]);
      }
    }
    callback(null,fileList);
  });

}
