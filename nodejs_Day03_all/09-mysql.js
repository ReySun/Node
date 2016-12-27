var mysql = require('mysql');
//创建连接,连接到mysql服务器
var conn=mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:"",
  database:'emp'
});
conn.connect();//此函数可以省略
//提交SQL语句给MYSQL服务器执行
var sql='INSERT INTO user VALUES(NULL,"Lee","产品经理","2016-05-12",11000,1)';
conn.query(sql,function(err,result){
  if(err){
    console.log('写入数据出错');
  }else{
    console.log('执行完成...');
    console.log("SQL语句影响的行数："+result.affectedRows);//影响的行数
    console.log("自增的id号："+result.insertId);//获得自增的id号
  }
});
//断开与mysql服务器的连接
conn.end();



