/*创建一个简单的web服务器*/
//引入http模块
var http=require('http');
//console.log(http);
//使用http模块创建一个web服务器
var server=http.createServer();
//为服务器的request事件绑定处理方法
server.on('request',function(req,res){
  console.log("web服务器端接收到一个请求...");
  console.log("请求方法："+req.method);
  console.log("请求URL："+req.url);
  console.log("请求版本："+req.httpVersion);
  console.log("请求头");
  console.log(req.headers);
});
//启动web服务器，让它监听一个特定的端口
server.listen(8000,'127.0.0.1',function(err){
  if(err){
    console.log('web服务器启动失败');
    console.log(err);
  }else{
    console.log('web服务器启动成功！正在监听8000端口...');
  }
});





