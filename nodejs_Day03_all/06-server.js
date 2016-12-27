/*可以给客户端响应的web服务器_固定的响应*/
var http=require("http");
var server=http.createServer();
server.on('request',function(req,res){
  console.log('接收到客户端的请求...');
  res.statusCode=200;//设置响应状态码
  res.setHeader('Content-Type','text/html;charset=utf-8');//设置响应消息头
  res.write('<html>');//向客户端输出响应主体
  res.write('<body>');
  res.write('<h1>欢迎来到我的站点</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();//输出完毕
});

server.listen(8000,'127.0.0.1',function(err){
  if(err){
    console.log('服务器启动失败');
  }else{
    console.log('服务器启动成功，正在监听8000端口。。。');
  }
});









