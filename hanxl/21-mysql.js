const mysql=require("mysql");
//console.log(mysql);
var option={
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"node"
};
var link=mysql.createConnection(option);
link.connect();//此函数可以省略
//提交SQL语句给MYSQL服务器执行
var sql="SELECT * FROM user";
//var sql=`INSERT INTO user VALUES(NULL,"Faker","LOL","2010-12-20","8000",1)`;
link.query(sql,(err,data)=>{
    "use strict";
    if(err){
        console.log("SQL语句执行失败");
        console.log(err);
    }else{
        console.log("SQL语句执行成功");
        console.log(data);
        console.log("执行语句影响行数："+data.affectedRows);
        console.log("自增ID是："+data.insertId);
        link.end();
    }
});