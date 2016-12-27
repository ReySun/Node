/*
//setInterval
var count=0;
var timer=setInterval(function(){
  count++;
  console.log('%d hello!',count);
  if(count>5){
    clearInterval(timer);
  }
},1000);
*/

//使用setTimeout实现周期性定时器效果
var count=0;
var timer2=setTimeout(function(){
  count++;
  if(count<=5) {
    console.log('%d hello!', count);
    setTimeout(arguments.callee,1000)
  }else{
    clearTimeout(timer2);
  }
},1000);


//setImmediate();
setImmediate(function(){
  console.log('Immediate 1...');
});
process.nextTick(function(){
  console.log('nextTick 1...');
});
setTimeout(function(){
  console.log('setTimeout...');
},2000);
process.nextTick(function(){
  console.log('nextTick 2...');
});
setImmediate(function(){
  console.log('Immediate 2...');
});
console.log('end...');



