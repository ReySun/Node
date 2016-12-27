var c=require("console");
//console.log(c);
var fs=require("fs");
//创建文件
var out=fs.createWriteStream("./log/out.log");
var err=fs.createWriteStream("./log/err.log");
//使用console模块中的Console构造函数，向指定文件中输入内容
var logger=new c.Console(out,err);
logger.log("myOut");
logger.error("myError");
fs.readFile("./00.txt",(err,data)=>{
    "use strict";
    if(err){
        logger.error("文件读取失败")
    }else{
        console.log(data.toString())
    }
});