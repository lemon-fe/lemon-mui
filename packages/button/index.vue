<template>
  <button
    :type="nativeType"
    class="lemon-button"
    :class="['lemon-button-' + type, 'lemon-button-' + size, {
      'is-disabled': disabled,
      'is-plain': plain,
      'is-loading': loading
    }]"
    @click="handleClick"
    :disabled="disabled">
    <label class="lemon-button-text" v-if="iconPosition=='right'"><slot></slot></label>
    <span class="lemon-button-icon" :class="`lemon-button-icon-${iconPosition}`" v-if="icon || $slots.icon || loading">
      <slot name="icon">
        <i v-if="loading" class="lemon-icon lemon-icon-loading"></i>
        <i v-else-if="icon" class="lemon-icon" :class="'lemon-icon-' + icon"></i>
      </slot>
    </span>
    <label class="lemon-button-text" v-if="iconPosition=='left'"><slot></slot></label>
  </button>
</template>

<script>
/**
 * @module components/button
 * @desc 按钮
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [plain=false] - 幽灵按钮
 * @param {boolean} [loading=false] - loading
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param {string} [native-type] - 原生 type 属性
 * @param {string} [icon] - 图标，提供 search, arrow-right, download, trash或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .lemon-icon-xxx）
 * @param {slot} - 显示文本
 * @param {slot} [icon] 显示图标
 *
 * @example
 * <lemon-button size="large" icon="back" type="primary">按钮</lemon-button>
 */
export default {
  name: 'lemon-button',
  methods: {
    handleClick(evt) {
      if(this.loading){
        return;
      }
      this.$emit('click', evt);
    }
  },
  props: {
    icon: String,
    iconPosition: {
      type: String,
      default: 'right'
    },
    disabled: Boolean,
    nativeType: String,
    plain: Boolean,
    loading: Boolean,
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return [
          'default',
          'danger',
          'primary'
        ].indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'small',
          'normal',
          'large'
        ].indexOf(value) > -1;
      }
    }
  }
};
</script>

<style lang="less">
   @import "../../src/style/var.less";

   .lemon-button {
      appearance: none;
      border-radius: 8px;
      border: 0;
      box-sizing: border-box;
      color: inherit;
      display: block;
      font-size: 36px;
      height: 80px;
      outline: 0;
      overflow: hidden;
      position: relative;
      text-align: center;

      &::after {
        background-color: #000;
        content: " ";
        opacity: 0;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
      &:not(.is-disabled):active::after {
        opacity: .4;
      }
      
      &.is-disabled {
        opacity: .6;
      }

      &.is-loading .lemon-icon{
        animation: loading-animate .8s;
        animation-iteration-count: infinite;
        animation-timing-function: ease;
        transform:translateZ(0);
      }

      .lemon-icon{
        vertical-align: middle;
        display: inline-block;
      }
      .lemon-button-icon-right .lemon-icon{
        margin-left: 10px
      }
      .lemon-button-icon-left .lemon-icon{
        margin-right: 10px
      }
  }

  .lemon-button-default {
    color: @button-default-color;
    background-color: @button-default-background-color;
    box-shadow: @button-default-box-shadow;

    &.is-plain {
      border: 1px solid @button-default-plain-color;
      background-color: transparent;
      box-shadow: none;
      color: @button-default-plain-color;
    }
  }

  .lemon-button-primary {
    color: @button-primary-color;
    background-color: @button-primary-background-color;

    &.is-plain {
      border: 1px solid @button-primary-background-color;
      background-color: transparent;
      color: @button-primary-background-color;
    }
  }

  .lemon-button-danger {
    color: @button-danger-color;
    background-color: @button-danger-background-color;

    &.is-plain {
      border: 1px solid @button-danger-background-color;
      background-color: transparent;
      color: @button-danger-background-color;
    }
  }

  .lemon-button-large {
    display: block;
    width: 100%;
  }

  .lemon-button-normal {
    display: inline-block;
    padding: 0 24px;
  }

  .lemon-button-small {
    display: inline-block;
    font-size: 28px;
    padding: 0 24px;
    height: 66px;
  }

  @keyframes loading-animate{
      0% {transform:rotate(0deg);}
      100% {transform:rotate(360deg);}
  }
</style>
