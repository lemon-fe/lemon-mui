<template>
  <div>
    <router-link class="page-back" v-if="visible" :to="'/'">
      <i class="icon-back"></i>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  computed: {
    visible() {
      return ['/', '/header', '/search'].indexOf(this.$route.path) < 0;
    }
  }
}
</script>
