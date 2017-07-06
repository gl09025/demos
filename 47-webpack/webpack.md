[webpack get-started](https://webpack.js.org/guides/getting-started/)


####
添加了css要在src/index.js里引入
```
import './index.css'
```
在webpack.config.js里添加loader
```
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
  }
```
webpack autoprefixer 自动加兼容前缀

#### 压缩
图片压缩webpack image compress


#### watch

```
 webpack --watch
```

#### 安装node-sass可能遇到的问题
```
export SASS_BINARY_SITE="https://npm.taobao.org/mirrors/node-sass"
```


#### webpack-dev-server
```
devServer: {
  contentBase: path.join(__dirname, "dist"),
  compress: true,
  port: 9000
}
```


#### webpack plugins

HTML Webpack Plugin and Open Browser Webpack Plugin


#### 发布
```
webpack -p
```


####bundle.js hash
search: webpack bundle hash

