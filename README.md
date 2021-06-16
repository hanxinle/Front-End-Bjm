# 1、html 写法

说明：以前学习过《head first》系列中 html 部分，及网站建设技术类书籍源码，因此本文写得很简略、个人化。

html 以下列方式组织，其中 head 的内容不渲染，而 body 的内容浏览器会渲染。head 的信息可以是标题、关键字或者给浏览器引擎等使用的信息。

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
```

# 2、css 组织

html 文本分块往往用两个标记，如 <p></p>。将样式表加入到第一个尖括号中 <>，如以下例子。还有一种单独的 .css 文件，就是将标签的样式单独定义在 .css 文件中，在 html 文件 head 部分中指定 .css 文件。

```html
  <p style="margin-left: 40px; margin-top: 80px;">
    We'll create more content later...
  </p>
```

# 3、JavaScript 组织

## 3.1 最简单的 <script></script> 中组织。
## 3.2 script 标签中指定

```html
<!DOCTYPE html>
<html>
<head>
  <title>Parsing JSON</title>

<!--第一种插入JS脚本的方法
<script src="src/main.js"></script>
-->

<!--第二种插入JS脚本的方法-->
<script type="text/javascript" src="src/main.js"></script>


</head>
<body>

</body>
</html>
```
