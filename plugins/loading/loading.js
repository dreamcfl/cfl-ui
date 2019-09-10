import Vue from "vue";
import LoadingComponent from "./loading.vue";

// extend 是构造一个组件的语法器.传入参数，返回一个组件
let LoadingConstructor = Vue.extend(LoadingComponent);

let initComponent;
let loading = {};
let loadingCount = 0;
loading.show = (option = {}) => {
  if (loadingCount === 0) {
    initComponent = new LoadingConstructor();
    if (option.txt) {
      initComponent.loadingTxt = option.txt;
    }
    initComponent.$mount();
    document
      .querySelector(option.container || "body")
      .appendChild(initComponent.$el);
  }
  loadingCount++;
};

loading.hide = () => {
  if (loadingCount <= 0) return;
  loadingCount--;
  if (loadingCount === 0) {
    initComponent.$el.parentNode.removeChild(initComponent.$el);
  }
};
export default loading;
