# 快速上手

本文介绍如何快速开发一个简单的地图应用。

## 1、HTML 页面准备

编写 HTML 页面的基本的结构代码，需要一个`<div>`节点作为地图容器，同时为此`<div>`指定 id 属性，本教程中使用 `<div id="container"></div>`，id 你可以自定义。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BS同源维护SDK</title>
    <style>
      html,
      body,
      #container {
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div id="container"></div>
  </body>
</html>
```

## 2、JS API 的加载和地图初始化

```js
<script src="https://hmsuite.map.zj.sjcc.com.cn/hmsuiteSdk.js"></script>
<script type="text/javascript">
  var map = new HmsuiteSdk({
    token: "",
    client_id: "",
    bizCode: "",
    verId: "",
    type: "",
    container: "container",
  });
</script>
```
