var fs=require("fs");
var file="./log/writeFile.txt";
var data="hello world!";
fs.writeFile(file,data,(err)=>{
	if(err){
		console.log("文件写入失败");//必须有对应的文件目录
		console.log(err);
	}else{
		console.log("文件写入成功")
	}
});
var file="./log/appendFile.txt";
var data="我是后面追加的内容";
fs.appendFile(file,data,(err)=>{
	"use strict";
	if(err){
		console.log("文件新增失败")
	}else{
		console.log("文件新增成功")
	}
});