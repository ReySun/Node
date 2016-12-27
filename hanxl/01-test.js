for(var i=0;i<10;i++) {
	console.log(i)
}
//引用类型
var name=new String("han");
var obj=new Object();
var err=new Error();
//var bur=new Buffer();
function myObj(name,age){
	this.name=name;
	this.age=age;
}
var han=new myObj("han",18)
console.log(han.name,han.age);
var ss=name;
console.log(han.name===name)