var bl = require("bl");
var http = require("http");
var result = [];
var count = 0;

function printResult()
{
  for (i=0;i<3;i++){
    console.log(result[i]);
  }
}

function getHttp(index)
{
  http.get(process.argv[2+index],function(response){
    response.pipe(bl(function(error,data){
      if(error) return console.error(error);
      result[index] = data.toString();

      count++;
      if (count == 3) printResult();
    }));
  });
}

for (i=0;i<3;i++){
    getHttp(i);
}
