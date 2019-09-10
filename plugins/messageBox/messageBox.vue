<template>
  <div class="message-outer" id="message-outer">
    <div class="message-inner">
      <transition name="fade">
        <div class="message-box" v-show="visible">
          <p class="message-icon"></p>
          <p class="message-title">{{ message }}</p>
          <div class="msg-btn border-top">
            <span
              class="msg-close border-right"
              @click="msgclose('cancel')"
              v-if="showClose"
              >取消</span
            >
            <span class="msg-ckeck" @click="msgclose('confirm')">确认</span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "messageBox",
  data() {
    return {
      message: "警告！",
      type: "",
      number: "L12345678",
      name: "张明明",
      showClose: true,
      visible: false,
      resulit: true
    };
  }
};
</script>

<style scoped>
.message-outer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}
.message-inner {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10000;
}
.message-box.fade-enter-active,
.message-box.fade-leave-active {
  transition: 0.2s;
  transform: 2s;
}
.message-box.fade-enter,
.message-box.fade-leave-active {
  transform: translate(-50%, -50%);
  transform: scale(0);
}
.message-box {
  width: 90%;
  background: #ffffff;
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  margin: auto;
  transform: translate(-50%, -50%);
  transform: scale(1);
  border-radius: 23px;
  overflow: hidden;
}
.message-title {
  width: 80%;
  padding: 30px 10%;
  /* text-align: center; */
  font-size: 32px;
  color: #333;
  font-weight: 700;
  word-break: break-all;
}
.msg-btn {
  width: 100%;
  display: flex;
  justify-content: center;
}
.msg-btn span {
  display: block;
  line-height: 60px;
  font-size: 20px;
  color: #fff;
  text-align: center;
  background: #12a4ff;
  margin: 40px 20px;
  /* width: 56px; */
  padding: 0 40px;
  height: 60px;
  border-radius: 10px;
}
</style>
