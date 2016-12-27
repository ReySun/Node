var i=1;
setTimeout(()=>{
  console.log(i);
},1000);
//1秒之后，打印出0,1,2
for(var i=1;i<3;i++){
  setTimeout(()=>{
    console.log(i)
  },1000)
}
//闭包，1秒后打印出1,2,3
/*for(var j=1;j<4;j++){
  setTimeout(outer(j),1000);
}
function outer(num){
  return function(){
    console.log(num);
}
}*/
//使用箭头函数完成上面闭包的功能
for(var i=1;i<4;i++){
  setTimeout(((num)=>{
    return ()=>{console.log(num)}
  })(i),1000)
}





