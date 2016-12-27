var fs=require('fs');
var path='./test';
fs.stat(path,(err,stats)=>{
  if(err){
    fs.mkdir(path);//创建目录
  }else{
    fs.rmdir(path);//删除目录
  }
});
var path2='./log';
fs.stat(path2,(err,stats)=>{
  if(err){
    console.log('此目录不存在');
  }else{
    fs.readdir('./log',(err,list)=>{
      if(err){
        cosole.log('读取目录失败');
      }else{
        console.log(list);
      }
    });
  }
});


