/*//var age=20;
//console.log(age);
//console.log(global.age);

//console.log
console.log("msg1");
console.log("msg1","msg2",123,true,new Date());
var user={uname:"tom",age:20};
console.log(`uname:${user.uname},age:${user.age}`);
//%百分号占位符，每一个占位符都一一对应后面的具体值
//%s表示string类型，%d表示是number类型
console.log('uname:%s,age:%d',user.uname,user.age);
//console.info()
console.info('uname:%s,age:%d',user.uname,user.age);
//console.error()
console.error('uname:%s,age:%d',user.uname,user.age);
//console.warn()
console.warn('uname:%s,age:%d',user.uname,user.age);
//console.trace()
function outer(){
  function inner(){
    console.trace('stack trace');
  }
  inner()
}
outer();
*/

var obj={name:"Mia",age:20};
var arr=["Mia","Tom"];
console.dir(obj);
console.dir(arr);
console.log(obj);
console.log(arr);
console.log(Buffer);
console.dir(Buffer,{colors:true});

//console.assert()
function add(n1,n2){
  return n1+n2;
}
console.assert(add(1,2)==3,"输出结果不是我想要的。");

//console.time()&console.timeEnd()
console.time("mycode");//开始计时
var sum=0;
for(var i=0;i<1000000;i++){
  sum+=sum;
}
console.timeEnd("mycode");//结束计时

