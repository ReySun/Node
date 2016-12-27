var fs=require('fs');
fs.readFile('./note.txt',function(err,data){
  if(err){
    console.log('读取文件失败');
    console.error(err);
  }else{
    console.log('读取文件成功，内容为：');
    console.log(data.toString());
  }
});

var file='./test/01.txt';//文件不存在会自动创建，存在会覆盖
var data="test string";
fs.writeFile(file,data,(err)=>{
  if(err){
    console.log('写入失败！');
    console.log(err);
  }else{
    console.log('数据写入成功！');
  }
});

var file='./note.txt';
var data2="test string";
fs.appendFile(file,data,(err)=>{
  if(err){
    console.log('写入失败！');
    console.log(err);
  }else{
    console.log('数据写入成功！');
  }
});












