<template>
  <div class="demo">
    <span @click="login">登录</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: '首页欢迎你'
    }
  },
  methods: {
    login() {
      let params = {
        username: 'pulihe',
        password: '123456'
      }
      this.$post('login',params).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>