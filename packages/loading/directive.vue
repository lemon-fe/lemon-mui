<template>
  <div
    v-show="visible"
    class="lemon-v-loading-mask"
    :style="{ backgroundColor: background || '' }">
    <div class="lemon-indicator">
      <div style='display: inline-block;'>
        <span class='lemon-spin'></span>
      </div>
      <span class="lemon-indicator-text" v-if='text'>{{ text }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: null,
        spinner: null,
        background: null,
        fullscreen: true,
        visible: false,
        customClass: ''
      };
    },

    methods: {
      handleAfterLeave() {
        this.$emit('after-leave');
      },
      setText(text) {
        this.text = text;
      }
    }
  };
</script>
<style lang="less">
@-webkit-keyframes mint-spinner-rotate {
  0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
  }
  100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
  }
}
@keyframes mint-spinner-rotate {
  0% {
      -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
  }
  100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
  }
}
.lemon-v-loading-mask{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.lemon-indicator{
  display: inline-block;
  padding: 30px;
  background: rgba(247, 247, 247, 0.6);
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  .lemon-spin{
    display: inline-block;
    height: 50px;
    width: 50px;
    animation: mint-spinner-rotate .8s infinite linear;
    -webkit-animation: mint-spinner-rotate .8s infinite linear;
    border: 4px solid rgb(204, 204, 204);
    border-right: 4px solid transparent;
    border-radius: 50%;
  }
  .lemon-indicator-text{
    display: block;
    font-size: 28px;
    padding-top: 10px;
    color: #ccc;
  }
}
.lemon-v-loading-parent--relative{
  position: relative;
}
</style>