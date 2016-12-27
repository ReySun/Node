/*创建一个简单的web服务器*/
var http=require("http");
//console.log(http);
var webServer=http.createServer(/*(requset,response)=>{
    "use strict";
    //第一种创建的方法
}*/);
webServer.on("request",(request,response)=>{
    "use strict";
    //第二种创建方法
    console.log(request);
    console.log("成功接收到一个请求...");//请访问127.0.0.1:8090
    console.log("请求方法："+request.method);
    console.log("请求URL："+request.url);
    console.log("请求版本："+request.httpVersion);
    console.log("请求头：");
    console.log(request.headers);
});
webServer.listen(8090,"127.0.0.1",(err)=>{
    "use strict";
    if(err){
        console.log("服务器创建失败");
        console.log(err);
    }else{
        console.log("succ")
    }
});
//console.log(webServer);