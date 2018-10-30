<template>
    <h1 class="page-title">
      <lemon-button class="back-link" icon="arrow-left" plain size="small" type="primary" @click="handleBack">返回</lemon-button>
      <slot></slot>
    </h1>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    handleBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="less" scoped>
.page-title{
  font-size: 40px;
  text-align: center;
  display: block;
  line-height: 1;
  padding: 20px 0;
  background: #f9f8f7;
  color: #737373;
  position: relative;
  .back-link{
    position: absolute;
    left: 0;
    top: 8px;
    border: none;
    padding-left: 8px;
  }
}
</style>
