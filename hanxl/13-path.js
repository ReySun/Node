var path=require("path");
//解析路径字符串为对象
console.log(path.parse("C:/xampp/htdocs/server/llyresume"));
var obj={
    dir:"c:xampp",
    base:"htdocs"
};
//将路径对象解析为字符串
console.log(path.format(obj));
var u1 = 'htdocs/css';
var u2 = 'htdocs/img/01.jpg';
var u3 = '../img/01.jpg';
//根据基础路径解析出目标路径的绝对路径
console.log(path.resolve(u1,u3));
//根据基础路径获取目标路径与其的相对关系
console.log(path.relative(u1,u2));