var dns=require('dns');
//把一个域名解析为IP地址,从操作系统中查询（缓存），参数1，错误对象，参数2，IP地址，参数3，IPv4&IPv6
dns.lookup('www.baidu.com',(err,address,family)=>{
  if(err){
    console.log("解析失败");
    console.log(err);
  }else{
    console.log(address);
    console.log(family);
  }
});
//把一个于明天解析为一个DNS记录解析数组，从DNS服务器中查询
dns.resolve('www.baidu.com',(err,address)=>{
  if(err){
    console.log('解析失败');
  }else{
    console.log(address);
  }
});
//把一个IP地址反向解析为一组域名
dns.reverse('60.221.254.230',(err,hostnames)=>{
  if(err){
    console.log('解析失败');
  }else{
    console.log(hostnames);
  }
});




