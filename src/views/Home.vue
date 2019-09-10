<template>
  <div class="home">
    <h4>组件封装</h4>
    <cfl-button type="default" @click="onClick"> 默认 </cfl-button>
    <cfl-button type="warning" @click="onClick1"> 弹框 </cfl-button>
    <cfl-button type="info" @click="onClick2"> loading </cfl-button>
    <cfl-button type="danger" @click="onClick3"> 提示框 </cfl-button>
    <cfl-button type="primary" @click="onClick4"> 弹框 </cfl-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  methods: {
    onClick() {
      window.console.log("弹框");
    },
    onClick1() {
      this.$messageBox({
        type: "confirm",
        message: "错误?",
        callback: action => {
          window.console.log(action);
        }
      });
    },
    onClick2() {
      this.$loading.show({
        txt: "加载中"
      });
      setTimeout(() => {
        this.$loading.hide();
      }, 2000);
    },
    onClick3() {
      this.$toast({
        message: "恭喜恭喜"
      });
    },
    onClick4() {
      this.$messageBox({
        type: "alert",
        message: "提示?",
        callback: action => {
          window.console.log(action);
        }
      });
    }
  }
};
</script>
