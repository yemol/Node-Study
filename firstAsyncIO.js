var fs = require('fs');
var file = process.argv[2];

/*
fs.readFile(file, {"encoding":"utf8"}, function(err,data){
    if(!err)
    {
        var lines = data.split('\n');
        console.log(lines.length-1);
    }
});
*/

fs.readFile(file, "utf8", function(err,data){
    if(!err)
    {
        var lines = data.split('\n').length-1;
        console.log(lines);
    }
});
