var util=require('util');
//使用带%占位符的方式格式化字符串
var data={
    name:"phone",
    price:2999,
    inOnsala:false
};
var s=util.format('product:%s,price:%d,inOnsala:%s,JSON:%j',data.name,data.price,data.inOnsala,data);
console.log(s);
//返回一个对象的字符串形式
var s2=util.inspect(data);
console.log(typeof(data));
console.log(typeof(s2));

//实现构造方法间的继承
function Base(){
    this.name="Base";
}
Base.prototype.age=20;
function Sub(){
    this.name="Sub";
}
util.inherits(Sub,Base);
var s3=new Sub();
console.log(s3.name);
console.log(s3.age);