//动态web服务器
var http = require('http');
var url = require('url');
var fs = require('fs');
var mysql = require('mysql');

var server=http.createServer(); //创建web服务器
server.on('request',doRequest); //监听客户端请求事件，doRequest-回调函数
server.listen(8000,function(err){//启动web服务器，省略了回调函数
  console.log('服务器启动成功，正在监听8000端口');

});

//处理客户端的HTTP请求
function doRequest(request,response){
  console.log('web服务器接收到一个客户端请求...');
  var urlInfo=url.parse(request.url,true); //解析请求的url地址
  //console.log(urlInfo);
  var urlSuffix=urlInfo.pathname.substring(urlInfo.pathname.lastIndexOf('.')+1); //请求的url的文件名后缀，如.html、.do等
  //console.log(urlSuffix);
  if(urlSuffix==='do'){ //以.do结尾的动态请求
    doDynamicRequest(request,response);
  }else{  //非.do结尾的静态请求
    doStaticRequest(request,response);
  }
  
  //处理静态请求，如.html、.css，直接读取指定的文件内容，发送给客户端即可
  function doStaticRequest(){
    //console.log('请求动态资源成功');
    var fileName='.'+urlInfo.pathname;
    //console.log(fileName);
    fs.readFile(fileName,function(err,data){
      console.log(data);
      response.write(data);
      response.end();
    });
  }

  //处理动态请求，如.do
  function doDynamicRequest(){
    //console.log(urlInfo.pathname);
    if(urlInfo.pathname==='/html/register.do'){  //注册新用户
      //读取客户端提交的数据
      var uname = urlInfo.query.uname;
      var upwd = urlInfo.query.upwd;
      //链接数据库
      var conn=mysql.createConnection({
        host    : '127.0.0.1',
        user    : 'root',
        passwort: '',
        database: 'myusers'
      });
      //提交SQL语句
      var sql=`INSERT INTO user VALUES(NULL,'${uname}','${upwd}')`;  //ES6新特性
      conn.query(sql,function(err,data){
        if(data.affectedRows===1){  //执行成功
          response.write('<h3>注册成功!</h3>');
        }
        response.end(); //响应结束
        conn.end(); //关闭连接
      });

    }else if(urlInfo.pathname==='/html/login.do'){ //登录
      var uname = urlInfo.query.uname;
      var upwd = urlInfo.query.upwd;
      //console.log(uname);
      var conn = mysql.createConnection({
        host    : '127.0.0.1',
        user    : 'root',
        password: '',
        database: 'myusers'
      });
      var sql = `SELECT uname,upwd FROM user WHERE uname='${uname}' AND upwd='${upwd}'`;
      conn.query(sql,function(err,data){
        //console.log(data);
        if(data.length===1){
          response.setHeader('Content-Type','text/html;charset=UTF-8');
          response.write('<h3>登录成功!</h3>');
        }else{
          response.setHeader('Content-Type','text/html;charset=UTF-8');
          response.write('<h3>登录失败!</h3>');
        }
        response.end();
        conn.end();
      });
    }
  }

}






