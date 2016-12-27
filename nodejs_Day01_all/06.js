var emp={
  name:"tom",
  salary:8000,
  age:20
};
for(var i in emp){
  console.log(i+"="+emp[i])
}

var arr=[20,30,40];
for(var i in arr){
  console.log(i);//об╠Й
}
for(var i of arr){
  console.log(i);//
}




