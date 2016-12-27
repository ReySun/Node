console.log('CPU的架构类型：'+process.arch);
console.log('操作系统类型：'+process.platform);
//console.log(process.env);//环境变量
console.log('当前工作目录：'+process.cwd());
console.log('Node.js解释器所在目录：'+process.execPath)
//console.log(process.versions);//node版本
console.log('Node.js解释器的运行时间：'+process.uptime());
console.log(process.memoryUsage());
console.log('当前进程id号'+process.pid);
process.kill(5076);//向指定的进程id发送退出信号



