var fs=require('fs');
//fs.rename('./000.txt','./001.log',(err)=>{
//  if(err){
//    console.log(err);
//  }else{
//    console.log('重命名成功！');
//  }
//});
fs.unlink('./001.log',(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("文件删除成功！");
  }
});






