var url=require('url');
var u="http://tom:123@tedu.cn:8080/news/index.html?pno=20&vno=4#section3";
console.log(url.parse(u));
//第二个参数true，将查询字符串部分解析为对象
console.log(url.parse(u,true));


var u2={
    protocol:"https",
    hostname:"tedu.cn",
    port:"80",
    pathname:"login.html",
    query:{name:"han",pwd:"123"}//字符串或者对象
};
console.log(url.format(u2));//格式化url
//根据基地址解析出相对url
var u3="project/static/base.html";
console.log(url.resolve(u3,'../img/1.jpg'));