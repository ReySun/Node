/**
 * Created by bjwsl-001 on 2016/11/16.
 */
//1. 函数的参数可以提前绑定默认值
  //强调: 有默认值的参数应该放在结尾
function calc(bonus,base=10000){
  return console.log(base+bonus);
}
calc(3000);
//2. 使用rest，简化批量传参
  //如何: ...数组名 -> 得到的就是数组类型
    //代替arguments获得不确定个数个参数值
Function.prototype.bind=
  function(obj,...args1){
    var fun=this;
    return function(...args2){
      fun.apply(obj,args1.concat(args2));
    }
  }
function c(base1,base2,bonus1,bonus2){
  console.log(
    this.name+"的总工资是"
    +(base1+base2+bonus1+bonus2)
  );
}
var lilei={name:"Li Lei"};
var lilei_c=c.bind(lilei,10000,2000);
lilei_c(3000,4000);

function c2(...args){
  console.log(
    args.reduce(function(prev,v,i,arr){
      return prev+v;
    },0)
  );
}
//spread:
var moneys=[1000,2000,3000,4000,5000];
c2(...moneys);
