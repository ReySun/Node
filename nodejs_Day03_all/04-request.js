var http=require('http');
var option={
  hostname:'www.tmooc.cn',
  port:80,
  path:'/'
};
//发送一个get请求
var req=http.request(option,(response)=>{
  //console.log(response);
  //接收到的响应消息
  console.log("响应状态码："+response.statusCode)
  console.log("响应头："+JSON.stringify(response.headers));
  response.setEncoding('utf8');
  //响应主体
  response.on('data',function(chunk){
    console.log(chunk);
  });
});
req.setTimeout(3000,()=>{
  req.abort();
});
req.on('abort',function(){
  console.log('请求超时');
});
req.on('error',function(err){
  console.log('请求出错');
});
req.end();





