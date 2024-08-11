---
outline: deep
---

# 地图生命周期

开发者可以根据地图对象的生命周期，更好地管理地图对象的创建、使用和销毁，从而提高更好的用户体验和性能优化。本文介绍地图对象的生命周期，分为四个阶段：

1.创建地图对象

2.地图加载完成

3.地图运行阶段

4.销毁地图对象

## 1、创建地图对象

在创建地图对象阶段，可通过传入地图初始化参数来设置地图的初始状态。例如：中心点、地图视图模式、地图样式等。

```
var map = new AMap.Map("container", {
  zoom: 10, //地图级别
  center: [116.397428, 39.90923], //地图中心点
  layers: [new AMap.TileLayer.Satellite()], //设置图层,可设置成包含一个或多个图层的数组
  mapStyle: "amap://styles/whitesmoke", //设置地图的显示样式
  viewMode: "2D", //设置地图模式
});
```

## 2、地图加载完成

地图加载完成后会触发 complete 事件，可以在这个事件中执行一些地图的其他操作，例如：添加覆盖物、绑定交互事件。根据需求，自动定位到某个城市或显示某些标记点等。

```
map.on('complete', function(){
  //地图图块加载完成后触发
});
```

## 3、地图运行阶段

运行阶段指地图对象加载完成后，地图对象销毁前。在这个阶段，可以对地图进行各种交互操作，例如：缩放、平移、搜索地点等。此外，还可以在地图上添加各种图层和标记，以提供更丰富的地理信息和交互体验。

```
var map = new AMap.Map("container"); //初始化地图
//在运行阶段添加点标记
const marker = new AMap.Marker({
  position: new AMap.LngLat(116.39, 39.9),
});
//将创建的点标记添加到已有的地图实例：
map.add(marker);
//在运行阶段监听地图的点击事件
const clickHandler = function (e) {
  console.log('您在[ '+e.lnglat.getLng()+','+e.lnglat.getLat()+' ]的位置点击了地图！');
};
map.on("click", clickHandler);
```

## 4、销毁地图对象

不再需要地图或在页面切换时，应销毁地图对象以释放资源。调用 map.destroy()方法可销毁地图。在调用 map.destroy()方法之前，需要解绑地图上的事件。调用 map.destroy()方法后，将地图对象赋值为 null，再清除地图容器的 DOM 元素，避免内存泄漏和性能问题。

```
//解绑地图的点击事件
map.off("click", clickHandler);
//销毁地图，并清空地图容器
map.destroy();
//地图对象赋值为null
map = null
//清除地图容器的 DOM 元素
document.getElementById("container").remove(); //"container" 为指定 DOM 元素的id
```
