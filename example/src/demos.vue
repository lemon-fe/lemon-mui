<template>
  <section class="page-demo">
    <div class="group-list" v-for="(group, key) in navs" :key="key">
      <div class="group-title" v-text="group.title"></div>
      <div class="group-item"
        v-for="(item, index) in group.list"
        :key="index"
        @click="jump(item.path)"
        >
        <div slot="title">
          <i class="arrow">&gt;</i>
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
  .page-demo {
    padding-bottom: 50px;
  }
  .group-list{
    margin-bottom: 100px;
  }
  .group-title {
      font-size: 40px;
      display: block;
      line-height: 1;
      background: #f9f8f7;
      padding: 0.266667rem 0;
      color: #737373;
      border-left: 7px solid #FF9800;
      text-indent: 30px;
  }
  .group-item{
      margin: 20px auto;
      text-align: left;
      font-size: 40px;
      color: #FF9800;
      position: relative;
      text-indent: 34px;
  }
  .arrow{
    font-style: inherit;
    position: absolute;
    right: 30px;
    color: #cecece;
  }
</style>

<script type="text/babel">
  import { navs } from './route';

  export default {
    data() {
      return {
        navs: []
      };
    },
    created() {
      this.navs = navs;
      console.log(this.navs)
    },
    methods: {
      jump(path){
        this.$router.push({
          path
        });
      }
    }
  };
</script>
