/*根据客户端的请求返回响应的内容*/
//引入http模块
var http=require('http');
var url=require('url');
var fs=require('fs');
//创建服务器
var server=http.createServer();
//绑定request方法
server.on('request',(req,res)=>{
  console.log('web服务器接收到一个客户端请求...');
  //获取客户端请求的url
  var u=req.url;
  //console.log(url);
  //解析url得到文件目录
  var urlInfo=url.parse(u);
  //console.log(urlInfo);
  var fileName='.'+urlInfo.pathname;
  //读取文件
  fs.readFile(fileName,(err,data)=>{
    if(err){//文件读取错误
      console.log(err);
    }else{//文件读取成功,给客户端响应
      res.statusCode=200;
      res.setHeader('Content-Type','text/html;charset=utf-8');
      res.write(data);
      res.end();
    }
  });

});

//启动web服务器，监听端口
server.listen(8000,'127.0.0.1',(err)=>{
  if(err){
    console.log('服务器启动失败');
  }else{
    console.log('服务器启动成功，正在监听8000端口。。。');
  }
});




