/**
 * Created by bjwsl-001 on 2016/11/17.
 */
//promise: 对回调函数的一种顺序写法
//为什么: 避免深度的回调函数嵌套
//何时: 多件事，必须按顺序执行时
//如何:
 //1. 如果一个函数希望在自己执行后，才执行另一件事,就要返回一个新建的Promise对象
  //promise对象接收一个函数参数:
    //函数参数有两个形参:
      //callback: 如果函数正常执行后，承诺一定会执行的代码
      //onError: 如果函数执行出错，在之后的错误处理中执行的代码
 //2. 如果一个函数返回promise对象，就可用then传入callback
      then传入的callback默认传给promise对象中函数的callback参数
 //3. 如果中途出错，只要在所有then之后用.catch传入错误处理代码给promise中的onError
function connect(){
  //connect的正常逻辑
  console.log("正在连接...");
  var err=Math.random()<0.5;
  //向后抛出承诺
  return new Promise(
    function(callback,onError){
      if(err)
        onError(new Error("连接出错"));
      else
        setTimeout(callback,5000);
    }
  );
}
function query(){
  //query自己的逻辑
  console.log("正在查询...");
  var err=Math.random()<0.5;
  //向后抛出的承诺
  return new Promise(
    function(callback,onError){
      if(err)
        onError(new Error("查询出错"));
      else
        setTimeout(callback,3000);
    }
  );
}
function update(){
  console.log("正在更新...");
  var err=Math.random()<0.5;
  return new Promise(
    function(callback,onError){
      if(err)
        onError(new Error("更新出错"));
      else
        setTimeout(callback,1000);
    }
  );
}

connect().then(function(){
  console.log("连接成功");
  return query();
}).then(function(){
  console.log("返回查询结果");
  return update();
}).then(function(){
  console.log("更新成功");
}).catch(function(err){
  console.log(String(err));
});
/*
connect(function(){
  console.log("连接成功");
  query(function(){
    console.log("返回查询结果");
    update(function(){
      console.log("更新成功")
    });
  });
});
*/
