/*"use strict";*/
(function(){
	const PI=3.14;
	//age=3.14;
	console.log(PI)
})()
for(var i=0;i<3;i++){
	setTimeout(((num)=>{
		return ()=>{
			console.log(num)
		1}
	})(i),1000)
}
var count1=0;
var timer1=setInterval(
	()=>{
		count1++;
		console.log("数字是：%d",count1);
		if(count1>=5){clearInterval(timer1)};
	},1000
);
var count2=0;
var timer2=setTimeout(function(){
		count2++;
		if(count2<=5){
			console.log("结果是：%d",count2);
			setTimeout(arguments.callee,1000);//严格模式下禁用arguments.callee
		}
		clearTimeout(timer2)
	},1000
)
