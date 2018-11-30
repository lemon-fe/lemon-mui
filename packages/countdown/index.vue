<template>
    <button class='lemon-countdown' @click="onClick">
       <slot></slot>
       <span>{{text}}</span>
    </button>
</template>
<script>
/**
 * @module components/countdown
 * @desc 倒计时
 * @param {number} [seconds=60] - 倒计时秒数，接受
 * @param {string} [formate='dd天hh时mm分ss秒'] - 时间格式
 * @param {boolean} [begin=false] - 是否开始
 * @param {string} [initText=''] - 按钮初始文案
 * @param {function} [onOver] - 结束事件
 * @example
 * <lemon-countdown class="getCode weui-btn" formate="ss秒" :seconds="60" :begin="countdown_begin" initText="发送验证码" @click="getCode" @over="onCountDownOver"></lemon-countdown>
 */
export default {
  name: "lemon-countdown",
  data: function() {
    return {
      status: 0, // 1 倒计时中
      interval: null,
      text: ''
    };
  },
  props: {
    seconds: {
        type: Number,
        required: false,
        default: 60
    },
    formate: {
        type: String,
        required: false,
        default: 'dd天hh时mm分ss秒'
    },
    begin: {
        type: Boolean,
        required: false,
        default: false
    },
    initText: {
        type: String,
        required: false,
        default: ''
    }
  },
  watch: {
    begin: function(newValue, oldValue) {
      if(newValue){
        this.countDown();
      }else{
        this.stop();
      }
    }
  },
  methods: {
    onClick() {
      this.$emit("click")
    },
    formatOp(time, pattern) {
      //if( pattern.indexOf("dd")<0 && pattern.indexOf("hh")<0 && pattern.indexOf("mm")<0 ){
      //    return pattern.replace(/^ss/, time);
      //}

      var second = time % 60;
      time = Math.floor(time / 60);
      var min = time % 60;
      time = Math.floor(time / 60);
      //var hour = time;
      var hour = time % 24;
      time = Math.floor(time / 24);
      var day = time;

      if (pattern.indexOf("dd") < 0) {
        //无 “天”
        hour = day * 24 + hour;
        if (pattern.indexOf("hh") < 0) {
          //无 “时”
          min = hour * 60 + min;
          if (pattern.indexOf("mm") < 0) {
            //无 “分”
            second = min * 60 + second;
          }
        }
      }

      var o = {
        d: day, //day
        h: hour, //hour
        m: min, //minute
        s: second //second
      };
      for (var i in o) {
        pattern = pattern.replace(new RegExp("(" + i + "+)", "g"), function(
          a,
          b
        ) {
          return o[i] < 10 && b.length > 1 ? "0" + o[i] : o[i];
        });
      }
      return pattern;
    },
    countDown(opt) {
      var localtime = Math.floor(+new Date() / 1000);
      var localtarget = localtime + parseInt(this.seconds);
      var that = this;
      that.stop();
      function _change() {
        var _remain_second = localtarget - Math.floor(+new Date() / 1000);
        that.text = that.formatOp(
          _remain_second,
          that.formate
        );
        // that.$nextTick()
        if (_remain_second <= 0) {
          that.stop();
          that.$emit("over")
        }
      }

      _change();
      that.interval = setInterval(_change, 1000);
      that.status = 1;
      that.$emit("start")
    },
    stop() {
      let that = this;
      clearInterval(that.interval);
      that.interval = null;
      that.status = 0;
      if(that.initText){
        that.text = that.initText;
      }
    }
  },
  created() {
    if(this.initText){
      this.text = this.initText;
    }else{
      this.text = this.formatOp(this.seconds, this.formate)
    }
  }
};
</script>
<style scoped>
.lemon-countdown{
    border-width: 0;
    outline: 0;
    -webkit-appearance: none;
}
.lemon-countdown:active{
    opacity: 0.8;
}
</style>
