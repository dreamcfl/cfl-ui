<template>
  <div
    @click="_click"
    :class="
      type == 'Default'
        ? 'btn default'
        : type == 'primary'
        ? 'btn primary'
        : type == 'danger'
        ? 'btn danger'
        : type == 'info'
        ? 'btn info'
        : type == 'warning'
        ? 'btn warning'
        : 'btn default'
    "
  >
    <slot></slot>
  </div>
</template>

<script>
import { _throttle } from "./debounce.js";
export default {
  name: "cfl-button",
  props: {
    type: {
      type: String,
      default: "Default"
    }
  },
  methods: {
    _click: _throttle(function() {
      // 节流限制
      this.$emit("click");
    })
  }
};
</script>

<style>
.btn {
  display: inline-block;
  width: 90px;
  height: 40px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 40px;
  border-radius: 3px;
  margin: 2px;
  border: 1px solid #fff;
}
.default {
  background: #fff;
  color: #323233;
  border: 1px solid #323233;
}
.default:active {
  background: #f1f1f1;
  opacity: 0.8;
}
.primary {
  background: #07c160;
  color: #fff;
  border: 1px solid #07c160;
}
.primary:active {
  opacity: 0.8;
}
.danger {
  background: #ff4444;
  color: #fff;
  border: 1px solid #ff4444;
}
.danger:active {
  opacity: 0.8;
}
.warning {
  background: #ff976a;
  color: #fff;
  border: 1px solid #ff976a;
}
.warning:active {
  opacity: 0.8;
}
.info {
  background: #1989fa;
  color: #fff;
  border: 1px solid #1989fa;
}
.info:active {
  opacity: 0.8;
}
</style>
