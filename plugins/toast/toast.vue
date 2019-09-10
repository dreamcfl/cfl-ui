<template>
  <transition name="fade">
    <div v-show="this.visible" :class="this.position" class="toast">
      <i>{{ this.message }}</i>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      message: "",
      position: ""
    };
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  left: 35%;
  transform: translate(-50%, -50%);
  transform: scale(1);
  word-wrap: break-word;
  padding: 20px;
  text-align: center;
  z-index: 9999;
  font-size: 20px;
  max-width: 80%;
  color: #fff;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}
.toast.middle {
  top: 50%;
}

.toast.top {
  top: 10%;
}
.toast.bottom {
  top: 90%;
}

.fade-enter-active,
.fade-leave-active {
  transition: transform(0.5s);
}

.fade-enter,
.fade-leave-active {
  transform: translate(-50%, -50%);
  transform: scale(0);
}
</style>
