<template>
  <div class="page page-toast">
    <Header>loading</Header>
    <div class="page-wrapper">
      <button class="com-btn" @click="showLoading" size="large">点击出现loading</button>
      <button class="com-btn" @click="showLoadingMask" size="large">点击出现loading</button>
    </div>
    <div class="page-wrapper" v-loading="true" lemon-loading-text="正在加载" lemon-loading-mask>
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
import { setTimeout } from 'timers';
  export default {
    components: {
      Header
    },
    data: () => {
      return {
        _thisIndi: ''
      };
    },
    methods: {
      showLoading () {
        this._thisIndi = this.$loading({
          icon: 1,
          text: '加载中'
        });
        let that = this;
        that._thisIndit = this.$loading({
          icon: 1,
          text: '加载中234'
        });

        setTimeout(function(){
        // that._thisIndit.closeAll();
        that.$loadingCloseAll();
        },2000)




      },
      showLoadingMask(){
        this._thisIndi = this.$loading({
          icon: 1,
          text: '加载中',
          duration: 3000,
          mask: true
        });
      }
    },
    created: function (){
    }
  };
</script>
