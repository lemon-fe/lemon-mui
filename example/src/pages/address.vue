<template>
  <div class="">
    <lemon-address :provinceParent = 'provinceParent' :cityParent='cityParent' :detailParent='detailParent' @update='update'></lemon-address>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        provinceParent: '北京市',
        cityParent: '市辖区',
        detailParent: '东城区'
      }
    },
    computed: {
      currentValue: {
          // 动态计算currentValue的值
          get: function() {
              return this.value;
          },
          set: function(val) {
              this.$emit('update', val);
          }
      }
    },
    methods:{
      update (option) {
        let that = this;
        console.log(option)
        that.provinceParent = option.province;
        that.cityParent = option.city;
        that.detailParent = option.detail;
      }
    }
  }
</script>
