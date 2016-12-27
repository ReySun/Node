/**
 * Created by bjwsl-001 on 2016/11/16.
 */
//启用ES6语法: File->settings->languages->javascript->ECMAScript 6
//运行: 任意.js文件上->右键->Run xx.js
//增强的Object直接量:
//1. 在直接量中可定义__proto__指向父对象***
//2. foo:foo, 可简写为foo,
//3. 调用super(父对象的...)***
//4. 表达式动态生成属性名
var father={bal:10000000,car:"infiniti"};
function intr() {
  console.log("intr myself:");
  for (var key in this) {
    if(typeof this[key] != "function")
      console.log(key + ":" + this[key]);
  }
}
var i=1;
var child={
  __proto__:father,
  intr,
  toString(){
    console.log(`my bal:${this.bal}`);
  },
  ['child_'+i]:i
};
child.intr();
child.toString();