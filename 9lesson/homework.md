# 预习:

1.点击` <a href="#xxx">Hello</a>`  标签会有什么结果？

A​: 1.url   2.no request

2.`<a href="//baidu.com" target="xxx">Hello</a>` 
`<iframe name="xxx"></iframe>` 
点击 a 标签会有什么结果？   

A: 1.url  2.请求  3.响应->iframe(url)

3.table 元素里面可以有哪些标签？

4.

```
<form action="xxx">
  <input name=aaa value=1>
  <input type=submit>
</form>
点击按钮，会发生什么？
```

A: 1.url 2.get请求 查询参数 3.页面刷新了

6.

```
<form action="xxx" method=POST>
  <input name=aaa value=1>
  <input type=submit>
</form>
点击按钮，会发生什么？
```

A: 1.url 2.post请求 查询参数 3.页面刷新了



7.你觉得HTML的难点是什么?

要记



# 作业

[前端开发面试题](https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions/Questions-and-Answers)

什么是HTML语义化

iframe有哪些缺点

`<label>` 标签的作用是什么

HTML5的form如何关闭自动完成功能

`<b>` 与` <strong>` 的区别是什么



form标签的默认动作是什么

A: name value 组成查询字符串,发送请求 action

用JS阻止form标签的默认动作

A: `<form onsubmit="return false">` 

或者

```
<form action="xxx" id=fff>
 <input type="text" name="yyy">
 <input type="submit">
</form>

<script>
 fff.onsubmit = function(){return false}
</script>
```



id和class的区别

class="fff"和class="FFF"是一个意思吗?(是否大小写敏感)

HTTP请求头中的referer是什么意思?有什么作用?

A: 从哪个页面发起的请求.防盗链

如何消除页面中发起的请求的referer头

A: 

```
<meta name="referrer" content="no-referrer">
```



