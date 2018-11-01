<template>
  <div class="lemon-dialog" v-show=options.show>
    <div class="lemon-dialog-mask" ></div>
    <div class="lemon-dialog-content">
      <strong class="lemon-dialog-title" v-show = 'options.title'>{{options.title}}</strong>
      <div class="lemon-dialog-content-bd"><span>{{options.content}}</span></div>
      <div :class= 'options.btn_left_text ? "tool-two-wrap tool-wrap" : "tool-wrap"'>
        <a href="javascript:;" class="lemon-dialog-btn btn-cancel" v-show='options.btn_left_text'>{{options.btn_left_text}}</a>
        <a href="javascript:;" class="lemon-dialog-btn btn-confirm" >{{options.btn_right_text}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'lemon-dialog',
    data: function(){
        return {
            options: {
              title: '标题',
              content: '这里是内容',
              type: 'confirm', //alert
              show: true,
              btn_left_text: '取消',
              btn_right_text: '确认',
              cancel: function(){},
              confirm: function(){}
            }
        }
    },
    methods: {
      cancel(){
        console.log(1);
        this.options.show = 'false;'
      }
    }
}
</script>
<style lang="less" scoped>
.lemon-dialog{
  // animation: mymove 5s infinite;
  .lemon-dialog-mask{
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .6);
  }
  .lemon-dialog-content {
    position: fixed;
    z-index: 5000;
    width: 90%;
    max-width: 600px; /*px*/
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    text-align: center;
    border-radius: 6px;/*px*/
    overflow: hidden;
    .lemon-dialog-title{
      display: block;
      font-weight: 400;
      font-size: 38px;/*px*/
      padding: 30px 30px 0;/*px*/
      color: #222;
    }
    .lemon-dialog-content-bd{
      padding: 40px 30px 40px;/*px*/
      line-height: 1.8;
      font-size: 30px;/*px*/
      color: #777;
      text-align: justify;
      max-height: 700px;/*px*/
      overflow: auto;
      text-align: center;
      span{
        text-align: left;
      }
    }
    .tool-two-wrap:before{
        content: '';
        display: inline-block;
        width: 1px;/*no*/
        height: 100%;
        background: #dcdcdc;
        position: absolute;
        top: 0;
        left: 50%;
      }
    .tool-wrap{
      display: flex;
      height: 90px;/*px*/
      line-height: 90px;/*px*/
      text-align: center;
      position: relative;
      border-top: 1px solid #dcdcdc;/*no*/
      font-size: 36px;/*px*/
      a{
        flex:1;
        color: #8087ff;
        &:active{
          background: #ececec;
        }
      }
      a.btn-cancel{
        color: #8c8c8c;
      }
    }
  }
}
</style>