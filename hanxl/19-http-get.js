var http=require("http");
var option={
    hostname:"www.baidu.com",
    port:80,
    path:"/"
};
var request=http.get("http://www.baidu.com",(response)=>{
    "use strict";
    //console.log(response);
    console.log("响应状态码："+response.statusCode);
    console.log("响应头："+JSON.stringify(response.headers));
    response.setEncoding("utf8");
    response.on("data",(chunk)=>{
        console.log(chunk)//爬虫？
    })
});
request.setTimeout(3000,()=>{
    "use strict";
    request.abort();//终止请求
    console.log("请求超时")
});
request.on("error",(err)=>{
    "use strict";
    console.log(err);
})
