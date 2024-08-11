import DefaultTheme from "vitepress/theme";
// import VueCodemirror from "vue-codemirror";
// import CustomContent from "../components/custom-content/index.vue";

export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
    // app.use(VueCodemirror);
    // const plugin = await import("vue-codemirror");
    // app.use(plugin.default);
    // app.component("CustomContent", CustomContent);
  },
};
