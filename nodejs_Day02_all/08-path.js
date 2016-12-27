var path=require('path');
//console.log(path.parse('D:/hanxl/mynode/day02/01.js'));
var obj ={
  dir:'c:/nodejs',
  base:'node.exe'
}
//console.log(path.format(obj));
var u1 = 'htdocs/css';
var u2 = 'htdocs/img/01.jpg';
var u3 = '../img/01.jpg';
console.log(path.resolve(u1,u3));//绝对路径
console.log(path.relative(u1,u2));//相对路径




