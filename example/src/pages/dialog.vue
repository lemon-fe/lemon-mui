<template>
  <div class="page page-toast">
    <Header>dialog</Header>
    <div class="page-wrapper">
      <button class="com-btn" @click="openDialog" size="large">点击弹出 dialog</button>
      <button class="com-btn" @click="openAlert" size="large"> 只显示内容 dialog</button>
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
      openDialog() {
        console.log(this);
        let option = {
          title: '标题',
          content: '内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容内容内容vwerasd内容内容',
          btn_left_text: 'no',
          btn_right_text: 'yes',
          cancel: function(){
            console.log('取消')
          },
          confirm: function(){
            console.log('确认')
          }
        }
        this.$dialog(option);
      },
      openAlert() {
        let option = {
          title: '',
          content: '内容内容vwerasd内容'
        }
        this.$dialog(option);
      }
    }
  };
</script>
