"use strict";
class Emp{
  constructor(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;
  }
  work(){
    return `${this.name} is working.`;
  }
  sal(){
    return `${this.name}'s salary is ${this.salary}`;
  }
}
var e1=new Emp('tom',24,8000);
var e2=new Emp('Mary',22,9000);
console.log(e1.name);
console.log(e1.work());
console.log(e1.sal());
console.log(e2.name);
console.log(e2.work());
console.log(e2.sal());
//在上面创建的对象上继承
class Programmer extends Emp{
  constructor(name,age,salary,time){
    super(name,age,salary);
    this.time=time;
  }
  work(){
    return super.work()+"She's age is "+this.age;
  }
}
var p1=new Programmer('Mia',20,8000);
console.log(p1.name);
console.log(p1.work());
