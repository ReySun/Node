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
var sql='select * from user';
conn.query(sql,function(err,rows){
  if(err){
    console.log('查询出错');
  }else{
    console.log('查询完成...');
    //console.log(rows);
    for(var i=0;i<rows.length;i++){
      console.log(rows[i].uid+';'+rows[i].uname+';'+rows[i].salary);
    }
  }
});
//断开与mysql服务器的连接
conn.end();



