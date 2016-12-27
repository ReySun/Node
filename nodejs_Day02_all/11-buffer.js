//创建一个长度为10字节的缓冲区
var buf1=new Buffer(10);
console.log(buf1);
//创建一个长度为3字节的缓冲区,编码后的存入十进制
var buf2=new Buffer([65,66,67]);
console.log(buf2);//转换为16进制
console.log(buf2.toString());//字符串表示
//创建一个长度为8的缓冲区，存入字符串
var buf3=new Buffer('AB一二','utf8');
console.log(buf3);