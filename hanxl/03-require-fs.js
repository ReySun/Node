var fs=require("fs");
fs.readFile("./00.txt",(err,data)=>{//异步，node里面所有的异步都有回调函数
	if(err){
		console.log("文件读取失败，失败信息是："+err);
	}else{
		console.log(data);//Buffer可以用data.toString()转换为字符串
		console.log("文件读取成功，成功信息是："+data);//隐式转换为string
	}
})
