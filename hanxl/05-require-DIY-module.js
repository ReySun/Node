//文件模块
var circle=require("./04-DIY-module.js");//04-DIY-module.json或者无后缀的04-DIY-module自动解析
console.log(circle.size(2));
console.log(circle.per(3));
//console.log(process.mainModule);
console.log(require.main);//当前主模块，其余均为子模块
//每个模块内部都可以使用一个变量：module，指向当前模块自己
console.log(module===process.mainModule);//当前模块是主模块吗？true
console.dir(module.children);

//目录模块==>文件关联目录：../hanxl下的默认package.json或者index.js文件中引入的09-hello.js
var m4=require("../hanxl");
console.log(m4)
//测试包管理==>目录指向../node_modules/unit
var unit=require("unit");
console.log(unit.size(3));