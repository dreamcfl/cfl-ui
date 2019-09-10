<template>
  <div class="loading-wrapper-phone">
    <div class="toast toast-loading">
      <div class="toast-loading-wrap">
        <div
          class="toast-loading-leaf"
          v-for="(v, i, index) in 12"
          :style="{
            transform: `rotate(${30 * i}deg) translate(7.92px)`,
            animationDelay: i * 0.1 + 's'
          }"
          :key="index"
        ></div>
      </div>
      <p class="toast-loading-text">{{ loadingTxt }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadingTxt: "加载中..."
    };
  }
};
</script>

<style scoped>
.loading-wrapper-phone {
  position: fixed;
  z-index: 10000;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.loading-wrapper-phone .toast-loading-leaf {
  top: -1px;
  opacity: 0.25;
  animation: toast-loading 1.2s linear infinite;
}

.loading-wrapper-phone .toast-loading-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  /* margin: 0 0 1em 0; */
}
.loading-wrapper-phone .toast-loading-leaf:before {
  content: " ";
  position: absolute;
  width: 8.14px;
  height: 3.08px;
  background: #d1d1d5;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.0980392);
  border-radius: 1px;
  -webkit-transform-origin: left 50% 0;
  transform-origin: left 50% 0;
}

.loading-wrapper-phone .toast {
  left: 43%;
  top: 35%;
  margin-left: -38px;
  transition-duration: 0.2s;
  transform: scale(0.9);
  z-index: 1000;
  position: fixed;
  width: 140px;
  min-height: 76px;
  margin-left: -38px;
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  border-radius: 5px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
@keyframes toast-loading {
  0%,
  16.6767% {
    opacity: 0.25;
  }
  16.6867% {
    opacity: 1;
  }
  76.6767%,
  100% {
    opacity: 0.25;
  }
}
</style>
