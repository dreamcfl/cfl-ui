/*
 * 使用方法
 * @method this.messageBox(options)
 * @param {string} message 传入的提示文本
 * @param {string} type 提示的类型 confirm,alert
 * @param {function} callback 点击后返回的数据，确认返回confirm,取消返回cancel
 */

import Vue from "vue";
import MessageBox from "./messageBox.vue";
const MessageConstructor = Vue.extend(MessageBox);

let removeDom = event => {
  let child = document.querySelector("body");
  let childList = child.querySelectorAll(".message-outer");
  for (let i = 0; i < childList.length; i++) {
    event.target.parentNode.parentNode.parentNode.removeChild(childList[i]);
  }
};

MessageConstructor.prototype.msgclose = function(state) {
  this.visible = false;
  // removeDom()
  this.$el.children[0].children[0].addEventListener("transitionend", removeDom);
  setTimeout(() => {
    if (this.callback) {
      this.callback(state);
    }
  }, 300);
};

const messageBox = (options = {}) => {
  var instance = new MessageConstructor().$mount(document.createElement("div"));
  instance.message = options.message;
  instance.type = options.type;
  if (instance.type === "alert") {
    instance.showClose = false;
  } else if (instance.type === "confirm") {
    instance.showClose = true;
  }
  instance.callback = options.callback;
  document.body.appendChild(instance.$el);
  instance.visible = true;
  return instance;
};

export default messageBox;
