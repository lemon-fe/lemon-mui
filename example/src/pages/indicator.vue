<template>
  <div class="page page-toast">
    <Header>indicator</Header>
    <div class="page-wrapper">
      <button class="com-btn" @click="indicator" size="large">点击出现indicator</button>
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
      indicator () {
        this._thisIndi = this.$indicator({
          icon: 1,
          text: '加载中',
          duration: 1000
        });
        let that = this;
        // let t = setTimeout(function(){
        //   that._thisIndi.close();
        // },1000)
      }
    },
    created: function (){
    }
  };
</script>
