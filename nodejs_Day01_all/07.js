(function(){
  console.log(111);
})();
(function(num){
  if(num>0){
    arguments.callee(num-1)
    console.log(num);
  }
})(10);
+function(){
  console.log(222);
}();


//¼ýÍ·º¯Êý
(()=>{
  console.log(111);
})();
((n1,n2)=>{
  console.log(n1+n2);
})(3,5);


var emp=(n1,n2)=>{
  console.log(n1*n2);
}
emp(3,4);



