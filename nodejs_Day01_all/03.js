var price=99,count=3;
var info="价格："+price+"，数量："+count;
console.log(info);
var info2=`价格：${price}，数量：${count}`;

console.log(info2);
var info3=`
  价格：${price}
  数量：${count}
  小计：${price*count}
`;
console.log(info3);