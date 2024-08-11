<template>
  <div class="custom-content">
    <iframe
      ref="iframeRef"
      id="customIframe"
      src="about:blank#"
      unselectable="on"
      frameborder="0"
      scrolling="no"
      style="width: 60%; height: 100vh"
      allowfullscreen
    ></iframe>
    <custom-editor
      style="width: 50%; height: 100vh"
      @success="success"
    ></custom-editor>
  </div>
</template>

<script setup>
import CustomEditor from "../custom-editor/index.vue";

const success = async (code) => {
  try {
    console.log("接收子组件参数：" + code);
    const iframe = document.querySelector("#customIframe");
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(code);
    iframe.contentWindow.document.close();
  } catch (e) {
    console.error(e);
  }
};
</script>

<style scoped>
.custom-content {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
