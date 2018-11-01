<template>
  <div class="page-button">
    <Header>Button</Header>
    <div class="page-wrapper">
      <div class="page-button-group">
        <lemon-button size="large">large-default</lemon-button>
        <lemon-button size="large" type="primary">large-primary</lemon-button>
        <lemon-button size="large" type="danger">large-danger</lemon-button>
      </div>

      <div class="page-button-group">
        <lemon-button>default-default</lemon-button>
        <lemon-button type="primary">default-primary</lemon-button>
        <lemon-button type="danger">default-danger</lemon-button>
      </div>

      <div class="page-button-group">
        <lemon-button size="small">small-default</lemon-button>
        <lemon-button size="small" type="primary">small-primary</lemon-button>
        <lemon-button size="small" type="danger">small-danger</lemon-button>
      </div>

      <div class="page-button-group">
        <lemon-button disabled size="small">disabled-default</lemon-button>
        <lemon-button disabled size="small" type="primary">disabled-primary</lemon-button>
        <lemon-button disabled size="small" type="danger">disabled-danger</lemon-button>
      </div>

      <div class="page-button-group">
        <lemon-button plain size="small">plain-default</lemon-button>
        <lemon-button plain size="small" type="primary">plain-primary</lemon-button>
        <lemon-button plain size="small" type="danger">plain-danger</lemon-button>
      </div>
      <div class="page-button-group">
        <lemon-button size="small" type="primary" icon="search">icon-search</lemon-button>
        <lemon-button size="small" type="primary" icon="arrow-left" iconPosition="left">icon-arrow</lemon-button>
        <lemon-button size="small" type="primary" :loading="true">icon-loading</lemon-button>
      </div>
      <div class="page-button-group">
        <lemon-button size="small" type="primary">
          <img src="../assets/logo.png" class="button-icon" slot="icon">
          带自定义图标
        </lemon-button>
      </div>

      <div class="page-button-group">
        <lemon-button class="my-button" @click="handleClick">
          自定义按钮，点我
        </lemon-button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  name: 'button',
  components: {
    Header
  },
  methods: {
    handleClick() {
      alert("点击")
    }
  }
};
</script>

<style lang="less" scoped>
.page-button-group{
  margin-bottom: 80px;
  text-align: left;
}
.my-button{
  background-color: green;
  width: 600px;
  height: 100px;
  color: white;
}

.lemon-button{
  margin: 0 10px;
}
.button-icon{
  width: 30px;
  height: 36px;
  vertical-align: middle;
}
</style>
