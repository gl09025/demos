## XSS & CSRF

### XSS
cross site scripting
拼接字符串放到页面，innerHTML=...
'你'.charCodeAt(0).toString(16)
字符实体&#x4f60

防止用户运行script脚本
转义<script></script>    replace(/</g,'&lt;'')

解决方法
1.用text API
2.自己写escape


### CSRF &XSRF

1.已登录
2.伪造请求（GET，POST）

img的src会去请求
伪造get和post（form）请求

伪造网站会带上cookie，但是读不到cookie
XSRF-token
