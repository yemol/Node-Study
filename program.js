//process.argv  [命令行参数];
//Number()      [转换成数字]
var total = 0;
for (i = 2; i< process.argv.length;i++){
    total += Number(process.argv[i]);
}
console.log(total);