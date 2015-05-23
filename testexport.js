//在export中可以通过arguments取得所有参数
//然后使用arguments［i］取得每个参数的值

exports.add = function (){
  var sum =0,
      i=0,
      args = arguments,
      l = args.length;
  while(i<l){
    sum += args[i++];
  }
  return sum;
}
