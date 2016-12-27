var  qs=require("querystring");
var str="?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=是吗&rsv_pq=8f2732780000d38c&rsv_t=a65bFq%2F5s3kHAuscXPjRBhI%2BXi2mFhTPiD5yYYA6dKSlhzmIrVctz4xNyLA&rqlang=cn&rsv_enter=1&rsv_sug3=7&rsv_sug1=3&rsv_sug7=100&rsv_sug2=0&inputT=1391&rsv_sug4=3905"
console.log(qs.parse(str));
var data={
    "name":"lly",
    "age":22
};
console.log(qs.stringify(data));
console.log(qs.stringify(data,";"));
console.log(qs.stringify(data,";","="));
