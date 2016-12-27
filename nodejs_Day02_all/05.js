var fs=require('fs');
var c=require('console');
var out=fs.createWriteStream('./log/out.log');
var err=fs.createWriteStream('./log/err.log');
var logger=new c.Console(out,err);
fs.readFile('./001.txt',(err,data)=>{
  if(err){
    logger.error("文件读取失败");
  }else{
    logger.log(data.toString());
  }
});