<template>
  <div class="custom-editor">
    <div class="custom-editor-header">
      <div class="custom-editor-header-left">源代码编辑器</div>
      <div class="custom-editor-header-right">
        <div class="custom-editor-header-right-box" @click="handleCopy">
          复制
        </div>
        <div class="custom-editor-header-right-box" @click="handleRun">
          运行
        </div>
        <div class="custom-editor-header-right-box" @click="handleRefresh">
          还原
        </div>
        <div
          class="custom-editor-header-right-box"
          @click="handleDownload('index.html', code)"
        >
          下载
        </div>
      </div>
    </div>
    <codemirror
      ref="codemirrorRef"
      v-model="code"
      placeholder=""
      :style="{ height: '100%' }"
      :autofocus="true"
      :indent-with-tab="true"
      :tab-size="2"
      :extensions="extensions"
      @change="handleChange"
    />
  </div>
</template>

<script setup>
import { reactive, ref, shallowRef, onMounted } from "vue";
import { Codemirror } from "vue-codemirror";
import { html } from "@codemirror/lang-html";
import { oneDark } from "@codemirror/theme-one-dark";
// import useClipboard from "vue-clipboard3";

// const { toClipboard } = useClipboard();

const extensions = [html(), [oneDark]];
const codemirrorRef = ref();
const baseCode = ref("");
const code = ref(`
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width">
    <link rel="stylesheet" href="https://a.amap.com/jsapi_demos/static/demo-center/css/demo-center.css" />
    <title>地图显示</title>
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
  <div id="container">
    <iframe src="https://www.amap.com" style="width: 100%; height: 100%; border: none;"></iframe>
  </div>
</body>
</html>
`);

const cmOption = reactive({
  mode: "text/javascript",
  lineNumbers: true,
  lineWrappping: true,
  line: 0,
  ch: 0,
});

const handleChange = async () => {
  code.value = codemirrorRef.value?.modelValue;
};

const handleCopy = async () => {
  try {
    // await toClipboard(code.value);
    console.log("复制成功");
  } catch (e) {
    console.error(e);
    console.error("复制失败");
  }
};

const emits = defineEmits(["success"]);
const handleRun = async () => {
  try {
    emits("success", code.value);
    console.log("运行成功");
  } catch (e) {
    console.error(e);
    console.error("运行失败");
  }
};

const handleRefresh = async () => {
  try {
    code.value = baseCode.value;
    console.log("还原成功");
  } catch (e) {
    console.error(e);
    console.error("还原失败");
  }
};

const handleDownload = async (filename, text) => {
  try {
    let element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    console.log("下载成功");
  } catch (e) {
    console.error(e);
    console.error("下载失败");
  }
};
</script>

<style scoped>
.custom-editor {
  margin: 0;
  padding: 0;
}
.custom-editor-header {
  display: flex;
  justify-content: space-between;
  height: 45px;
  line-height: 45px;
  padding-left: 10px;
  background-color: #f3f4f8;
}
.custom-editor-header-left {
  display: flex;
}
.custom-editor-header-right {
  display: flex;
  padding: 0 10px;
}
.custom-editor-header-right-box {
  cursor: pointer;
  margin-right: 10px;
}
</style>
