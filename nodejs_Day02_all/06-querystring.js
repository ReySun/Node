var qs=require('querystring');
var str="ie=utf-8&f=3&rsv_bp=0&rsv_idx=1&tn=baidu&wd=web前端开发&rsv_pq=ef3aafd30000b0af&rsv_t=47d5W67%2FxpjHcqp4Wh%2BW7%2Flx9MI%2FmCTrHtGQFEYHM9w2qC1E4S4P3Im3cS0&rqlang=cn&rsv_enter=1&rsv_sug3=4";
console.log(qs.parse(str));
var data={
  name:"tom",
  age:20,
  dalary:8000
}
console.log(qs.stringify(data));
console.log(qs.stringify(data,";"));
console.log(qs.stringify(data,";","."));




