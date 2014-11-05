//module.exports -- 暴露module的默认方法

module.exports = function(args)
{
  var fs = require('fs');
  var path = require('path');

  var dir = process.argv[2];
  var filter = process.argv[3];

  fs.readdir(dir, function(err, list) {
    if (err) 
    {
      console.log(err);
      return;
    }
    var i = 0;
    for(i = 0; i < list.length; i++)
    {
      if (list[i].indexOf(filter) > 0)
      {
        console.log(list[i]);
      }
    }
  });  
}