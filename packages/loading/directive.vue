<template>
  <div class='lemon-loading-wrap' v-show="visible" :style="{ backgroundColor: background || '' }">
    <div :class = 'maskVisible ? "mask mask-show" : "mask"'>
      <div class="lemon-loading">
        <div style='display: inline-block;'>
          <span class='lemon-spin'></span>
        </div>
        <span class="lemon-loading-text" v-show='text'>{{ text }}</span>
      </div>
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
        customClass: '',
        maskVisible: false
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
.mask{
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.mask-show{
  background: #fff;
}
.lemon-loading{
display: inline-block;
padding: 40px;
background: rgba(0,0,0,.6);
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
    border: 8px solid rgb(204, 204, 204);/*px*/
    border-right: 8px solid transparent;/*px*/
    border-radius: 50%;
  }
  .lemon-loading-text{
    display: block;
    font-size: 28px;
    padding-top: 10px;
  }
}
</style>