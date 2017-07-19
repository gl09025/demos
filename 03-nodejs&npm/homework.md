安装Node.js

简单脚本

写一个脚本文件 view.sh，满足以下需求：
运行 /path/to/view.sh xxx，如果 xxx 文件存在，就输出 xxx 内容；如果 xxx 文件不存在，就输出「xxx 不存在」

```
if [ ! -f "$1" ]; then
  echo "$1 不存在"
  exit 1 # 失败
else
  cat $1
  exit 0 # 成功
fi
```





写一个脚本文件 show.js，满足以下需求：运行 node /path/to/show.js，输出当前目录下的所有文件。

```
#!/usr/bin/env node
var fs = require("fs");
console.log("查看当前目录");
fs.readdir(process.cwd(),function(error, files){
   if (error) {
       return console.error(error);
   }
   files.forEach( function (file){
       console.log( file );
   });
});
```





写一个脚本文件 view.js，满足以下需求：
运行 node /path/to/view.js xxx，如果 xxx 文件存在，就输出 xxx 内容；如果 xxx 文件不存在，就输出「xxx 不存在」

```
#!/usr/bin/env node
var file = process.argv[2]
var fs = require('fs');
fs.stat(file, function(err, stat){
  if(stat&&stat.isFile()) {
    console.log('文件存在');
    var data = fs.readFileSync(file,"utf-8");  
    console.log(data);  
  } else {
    console.log('文件不存在或不是标准文件');
  }
});
```

# NPM

- npm init 的到 package.json
- 修改 package.json，添加 bin，注意自己写的时候，不要写错任何一个字符



```
  {
    "name": "test-20170221",
    "version": "1.0.0",
    "description": "这是一个测试文件，不要下载",
    "main": "show.js",
    "dependencies": {
      "jquery": "^3.1.1"
    },
    "devDependencies": {},
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "bin":{
      "view":"view.js",
      "show":"show.js"
    },
    "author": "test",
    "license": "ISC"
  }
```



- npm adduser
- npm publish

## 配置

1. 运行 npm config set loglevel http，让你知道 npm 发的每一个请求
2. 运行 npm config set progress false，关闭那个进度条
3. 为了让你的安装速度变快，运行 npm config set registry https://registry.npm.taobao.org/想要恢复成原样，只需要 npm config delete registry 即可

