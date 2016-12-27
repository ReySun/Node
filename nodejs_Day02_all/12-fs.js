var fs=require('fs');
//同步读取目录
var stats=fs.statSync('./log');
console.log(stats);
//同步读取文件
var stats2=fs.statSync('./log/err.log');
console.log(stats2);
//异步读取目录或文件
fs.stat('./01.js',(err,stats)=>{
  if(err){
    console.log("读取失败");
  }else{
    console.log(stats);
  }
});
console.log(stats.isFile());
console.log(stats2.isFile());
console.log(stats.isDirectory());
console.log(stats2.isDirectory());

