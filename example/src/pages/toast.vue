<template>
  <div class="page page-toast">
    <Header>Toast</Header>
    <div class="page-wrapper">
      <button class="com-btn" @click="openToast" size="large">点击弹出 Toast</button>
      <button class="com-btn" @click="openBottomToast" size="large">自定义 Toast 位置</button>
    </div>
  </div>
</template>

<style lang="less">
    .page-wrapper {
      text-align: center;
      button:not(:last-child) {
        margin-bottom: 20px;
      }
    }
</style>

<script type="text/babel">
  import Header from '@/components/header'
  export default {
    components: {
      Header
    },
    methods: {
      openToast() {
        this.$toast('提示信息');
      },

      openBottomToast() {
        this.$toast({
          message: '提示信息',
          position: 'bottom'
        });
      }
    }
  };
</script>
