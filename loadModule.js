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





