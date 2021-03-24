<template>
  <div class="demo">
    <span @click="loginClick">登录</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: '首页欢迎你'
    }
  },
  mounted() {
    
  },
  methods: {
    loginClick() {
      let params = {
        username: 'pulihe',
        password: '123456'
      }
      this.$post('login',params).then(res => {
        console.log(res)
        this.$router.push({name: 'home'})
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .demo {
    font-size: 14px;
  }
</style>