# JS2

打开浏览器控制台，输入 alert(xxx)，控制台会报什么错？*

在控制台输入 alert(xxx) 然后按 shift+enter，输入 var xxx，再按回车，控制台会报错吗？报什么错？*



关于变量名（标识符），正确的有哪些*

-[  ]JS 中最常见的标识符就是变量名

-[  ]变量名的第一个字符不能含有字母之外的字符

-[  ]变量名从第二个字符开始，就可以含有数字了

-[  ]JS 的关键字和保留字不能作为变量名



var a = 2
if (a = 3){
  console.log('a是3')
}else{
  console.log('a不是3')
}
请问打印出来的结果是什么？

新人常见错误，请反向思考

- a是3
- 不是3





var a = 2
switch(a){
  case 2:
​     console.log('数字')
  case '2':
​     console.log('字符串')
   default:
​     console.log('其他')
}
请问打印出来的结果是什么？*

break!

- 数字
- 字符串
- 数字\n字符串
- 数字\n字符串\n其他



var a = 3
var b = (a < 3 ? 'yes' : 'no')
请问 b 的值是多少？*

类型！！！

- yes
- 'yes'
- no
- 'no'

var n = 0
for(var i=0; i< 11; i++){
  if(i<5){
​    continue
  }
  n++
}
console.log(n)
请问打印出来的是几？*

请用大脑思考，不要放到控制台运行代码

- 5
- 6
- 7
- 4



0.1 + 0.2 === 0.3 *

- true
- false



1.1e2 === 110*

- true
- false



011 === 9*

- true
- false





0x11 === 17*

- true
- false





0b11 === 3*

- true
- false





NaN === NaN*

- true
- false





typeof NaN*

- 'undefined'
- undefined
- 'number'
- number
- NaN
- 'NaN'





什么是 JS 关键字？*





什么是 JS 保留字？*





请写出 JS 的 7 种数据类型*

大小写不要写错！







typeof null 的值是多少？*







function f(){}
typeof f 的值是多少？*





var a = []
a instanceof Object 的值是多少？*





var a = []
a instanceof Array 的值是多少？*





'123\''.length*

不要在控制台运行，自己想







'\u2345\u2345'.length*

不要在控制台运行，自己想





'1\
2'.length*

不要在控制台运行，自己想





'1\n2'.length*

不要在控制台运行，自己想





为什么第一题报错，第二题不报错？*







