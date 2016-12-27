var util=require('util');
//????%?λ????????????????
var data={
  name:"phone",
  price:2999,
  inOnsala:false
};
var s=util.format('product:%s,price:%d,inOnsala:%s,JSON:%j',data.name,data.price,data.inOnsala,data);
console.log(s);
//????????????????????
var s2=util.inspect(data);
console.log(typeof(data));
console.log(typeof(s2));

//?????????????
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






