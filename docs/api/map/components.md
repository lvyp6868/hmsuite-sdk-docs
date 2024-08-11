---
outline: deep
---

# 业务组件

业务组件包含如下内容：

1.设备定位

2.坐标定位

3.地址定位

## 1、设备定位

```js
map.sendMessage({ type: "locateDevice", devId: "" }, (params) => {});
```

## 2、坐标定位

```js
map.sendMessage({ type: "locateCoord", x: "", y: "" }, (params) => {});
```

## 3、地址定位

```js
map.sendMessage({ type: "locateAddress", keywords: "" }, (params) => {});
```
