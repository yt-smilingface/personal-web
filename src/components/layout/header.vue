<template>
  <div class="bbd-header">
    <span :class="switchSide ? 'el-icon-s-unfold' : 'el-icon-s-fold'" 
      class="bbd-brn-switch"
      @click="switchChange"></span>

    <el-color-picker
      style="display: inline-block;margin-right: 20px;vertical-align: -16px;"
      v-model="primaryColor"
      show-alpha
      :predefine="predefineColors"
      @change="colorChange">
    </el-color-picker>
    <el-dropdown>
      <span style="color: #fff;cursor: pointer;">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  components: {
    
  },
  data() {
    return {
      predefineColors: [
        '##409eff',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
      ]
    }
  },
  computed: {
    primaryColor() {
      return this.$store.state.primaryColor
    },
    switchSide() {
      return this.$store.state.isMenuCollapse
    }
  },
  mounted() {
    
  },
  methods: {
    // 开关打开关闭
    switchChange() {
      if(this.switchSide) {
        this.switchSide = false
        this.$store.commit('isMenuCollapse',false)
        this.$cookie.set('isMenuCollapse', false)  //缓存左侧菜单状态
      } else {
        this.switchSide = true
        this.$store.commit('isMenuCollapse', true)
        this.$cookie.set('isMenuCollapse', true)  //缓存左侧菜单状态
      }   
    },

    // 主题确认
    colorChange(data) {
      this.$cookie.set('primaryColor', data)  //缓存主题颜色
      this.$store.commit('primaryColor',data)
    }
  }
}
</script>

<style scoped lang="scss">
  .bbd-header {
    line-height: 60px;
    text-align: right;
  }
  .bbd-brn-switch {
    float: left;
    margin-top: 16px;
    display: inline-block;
    font-size: 30px;
    color: #fff;
    cursor: pointer
  }
</style>