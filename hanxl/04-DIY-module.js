"use strict";
const PI=3.14;
var size=(r)=>{
  return PI*r*r;
};
var perimeter=(r)=>{
  return 2*PI*r
};
exports.size=size;//到处属性或方法
exports.per=perimeter;
console.log(module===process.mainModule)//当前模块是主模块吗？true
console.log(module);
console.log(module.exports);//导出的模块属性及方法，指向上面的exports
console.log(exports===module.exports);//导入导出的均为同一个对象