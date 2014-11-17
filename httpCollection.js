var bl = require("bl");
var http = require("http");

http.get(process.argv[2],function(response){
  response.pipe(bl(function(error, data){
    if (error)
      return console.Error(error);

    console.log(data.length);
    console.log(data.toString());
  }));
});
