# 四十二  Cache、Cookie、Session

[HTTP缓存控制小结](http://imweb.io/topic/5795dcb6fb312541492eda8c)


## Cache

没有变的内容不要重复下载
缓存是以URL为依据
客户端发的第一个请求不缓存
设置响应头：
  1.Cache-Control: public, max-age=86400
  Pragma: no-cache  (相对时间)
  2.Expires: Fri, 11 Jun 2021 11:33:01 GMT (不推荐，绝对时间，受本地时间影响)
  3.Last-Modified
  4.ETag 
Etag省下载时间，cache-control省请求时间

## Cookie、Session

