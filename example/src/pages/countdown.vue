<template>
  <div class="page page-toast">
    <Header>CountDown</Header>
    <div class="page-wrapper">
      <lemon-countdown class="lemon-countdown-btn" formate="ss秒" :seconds="10" :begin="countdown_begin" initText="发送验证码" @click="handleClick" @over="onCountDownOver"></lemon-countdown>
      <lemon-countdown class="lemon-countdown-btn" formate="ss" :seconds="10" :begin="countdown_begin" @click="handleClick" @over="onCountDownOver">
        <span class="timer">剩余时间</span>
      </lemon-countdown>
      <lemon-button size="small" type="primary" icon="alert" @click="handleClick">开始倒计时</lemon-button>
    </div>
  </div>
</template>

<style lang="less">
    .page-wrapper {
      .lemon-countdown-btn{
        display: block;
        width: 200px;
        height: 60px;
        background: #26a2ff;
        color: white;
        margin: 0 auto;
        font-size: 30px;
      }
    }
    .timer{
      background: red;
      display: inline-block;
    }
</style>

<script type="text/babel">
  import Header from '@/components/header'
  export default {
    data: () => {
      return {
        countdown_begin: false
      };
    },
    components: {
      Header
    },
    methods: {
      handleClick() {
        this.countdown_begin = true;
      },
      onCountDownOver() {
        this.countdown_begin = false;
      },
    }
  };
</script>
