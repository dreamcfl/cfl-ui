import messageBox from "./messageBox/messageBox.js";
import button from "./button/button";
import Toast from "./toast/toast.js";
import loading from "./loading/loading.js";

let plugin = {};
plugin.install = Vue => {
  Vue.component(button.name, button);
  Vue.prototype.$messageBox = messageBox;
  Vue.prototype.$toast = Toast;
  Vue.prototype.$loading = loading;
};

export default plugin;
