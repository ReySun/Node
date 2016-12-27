/*响应客户端的请求消息*/
var http=require("http");
var url=require("url");
var fs=require("fs");
var server=http.createServer();
server.on("request",(request,response)=>{
    "use strict";
    console.log("接收到客户端请求.....");
    response.statusCode=200;//设置状态码
    response.setHeader("Content-Type","text/html;charset=utf-8");//设置响应消息头
    /*response.write("<html>")//向客户端输出响应主体
    response.write("<body>")
    response.write("<h1>欢迎来到我的站点</h1>")
    response.write("</body>")
    response.write("</html>")*/
    var u=request.url;//得到请求url
    var uInfo=url.parse(u);//运用url模块解析为Url对象
    var fileName=`.${uInfo.pathname}`;//拼接为完整目录
    console.log(fileName);//最后有个判断文件和目录的方法
    fs.readFile(fileName,(err,data)=>{
       if(err){
           console.log("文件读取失败")
           console.log(err)
       }else{
           console.log("文件读取成功");
           response.setHeader("Content-Type","text/html;charset=utf-8")
           response.write(data)
           response.end();//表示输出完毕
       }
    });
});
server.listen("8091","127.0.0.1",(err)=>{
    "use strict";
    if(err){
        console.log("服务器启动失败")
    }else{
        console.log("服务器启动成功，正在监听8091端口")
    }
});