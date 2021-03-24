<template>
  <div id="app">
    <bbd-layout></bbd-layout>
  </div>
</template>

<script>
import bbdLayout from '@/components/layout/index.vue'
export default {
  name: 'App',
  components: {
    bbdLayout
  }
}
</script>

<style lang="scss">
@import './style/base.scss';
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
}
</style>
