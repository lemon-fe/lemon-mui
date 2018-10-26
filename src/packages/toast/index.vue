<template>
  <transition name="lemon-toast-pop">
    <div class="lemon-toast" v-show="visible" :class="customClass">
      <span class="lemon-toast-text">{{ message }}</span>
    </div>
  </transition>
</template>

<style lang="less" scoped>
    .lemon-toast {
      position: fixed;
      max-width: 80%;
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.7);
      color: #fff;  
      box-sizing: border-box;
      text-align: center;
      z-index: 1000;
      transition: opacity .3s linear;
      padding: 20px;
      .lemon-toast-text {
        font-size: 28px;
        display: block;
        text-align: left;
        display: inline-block;
      }
      
      &.is-placetop {
        top: 50px;
        left: 50%;
        transform: translate(-50%, 0);
      }
      
      &.is-placemiddle {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      
      &.is-placebottom {
        bottom: 100px;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }
    .lemon-toast-pop-enter, .lemon-toast-pop-leave-active {
        opacity: 0
    }
</style>

<script type="text/babel">
  export default {
    props: {
      message: String,
      className: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'middle'
      },
    },

    data() {
      return {
        visible: false
      };
    },

    computed: {
      customClass() {
        var classes = [];
        switch (this.position) {
          case 'top':
            classes.push('is-placetop');
            break;
          case 'bottom':
            classes.push('is-placebottom');
            break;
          default:
            classes.push('is-placemiddle');
        }
        classes.push(this.className);

        return classes.join(' ');
      }
    }
  };
</script>