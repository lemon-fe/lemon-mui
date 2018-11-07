<template>
  <div class="page page-icon">
    <Header>icon</Header>
    <div class="page-wrapper">
      <ul class="list">
        <li v-for="(item, index) in icons" :key="index">
          <i class="lemon-icon" :class="item.c_name"></i>
          <p>lemon-icon</p>
          <p>{{item.c_name}}</p>
          <p>{{item.unicode}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/babel">
  import Header from '@/components/header'
  export default {
    data: () => {
      return {
        icons: [
          { c_name: 'lemon-icon-search', unicode: '&#xe668' },
          { c_name: 'lemon-icon-arrow-right', unicode: '&#xe61c' },
          { c_name: 'lemon-icon-arrow-left', unicode: '&#xe6c8' },
          { c_name: 'lemon-icon-arrow-down', unicode: '&#xe72f' },
          { c_name: 'lemon-icon-edit', unicode: '&#xe600' },
          { c_name: 'lemon-icon-cancel', unicode: '&#xe643' },
          { c_name: 'lemon-icon-setting', unicode: '&#xe615' },
          { c_name: 'lemon-icon-right', unicode: '&#xe606' },
          { c_name: 'lemon-icon-download', unicode: '&#xe601' },
          { c_name: 'lemon-icon-plus', unicode: '&#xef1d' },
          { c_name: 'lemon-icon-minus', unicode: '&#xe633' },
          { c_name: 'lemon-icon-alert', unicode: '&#xe60b' },
          { c_name: 'lemon-icon-down', unicode: '&#xe60c' },
          { c_name: 'lemon-icon-loading', unicode: '&#xe63e' },
          { c_name: 'lemon-icon-share', unicode: '&#xe663' },
          { c_name: 'lemon-icon-user', unicode: '&#xe911' },
          { c_name: 'lemon-icon-trash', unicode: '&#xe602' },
          { c_name: 'lemon-icon-warning', unicode: '&#xe836' },
          { c_name: 'lemon-icon-success', unicode: '&#xe603' },
          { c_name: 'lemon-icon-address', unicode: '&#xe627' },
          { c_name: 'lemon-icon-check-empty', unicode: '&#xe76a' },
          { c_name: 'lemon-icon-check-fill', unicode: '&#xe654' },
          { c_name: 'lemon-icon-star-empty', unicode: '&#xe61f' },
          { c_name: 'lemon-icon-start-fill', unicode: '&#xe623' },
          { c_name: 'lemon-icon-more-empty', unicode: '&#xe604' },
          { c_name: 'lemon-icon-more-fill', unicode: '&#xe731' },
        ]
      }
    },
    components: {
      Header
    },
    methods: {
    }
  };
</script>
<style lang="less">
    .page-wrapper {
      text-align: center;
      button:not(:last-child) {
        margin-bottom: 20px;
      }
      .list{
        li{
          width: 50%;
          display: inline-block;
          font-size: 28px;
          padding: 30px 0;
          border: 1px solid #ececec;
          box-sizing: border-box;
        }
        .lemon-icon{
          font-size: 80px;
          margin: 40px auto;
          display: block;
        }
      }
    }
</style>