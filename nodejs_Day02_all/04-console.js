var c=require('console');
//console.log(c);
var fs=require('fs');
//创建文件
var out=fs.createWriteStream('./log/out.log');
var err=fs.createWriteStream('./log/err.log');
//使用console模块中的Console构造函数，向指定文件中输入内容
var logger=new c.Console(out,err);
logger.log('my out');
logger.error('my error');

//练习：读取一个文件，如果读取成功，则向日志文件中输出"读取文件成功"，如果读取失败，则向错误日志文件中输出"文件读取错误"







