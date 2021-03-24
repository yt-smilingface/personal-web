<template>
  <div class="bbd-layout">
    <el-container>
      <transition name="el-zoom-in-top">
        <el-aside :style="{'background-color': primaryColor, 'width': sideWidth}"
          style="transition:all 0.55s;">
          <bbd-aside></bbd-aside>
        </el-aside>
      </transition>
      <el-container>
        <el-header :style="{'background-color': primaryColor}">
          <bbd-header></bbd-header>
        </el-header>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import bbdAside from './aside.vue'
import bbdHeader from './header.vue'
export default {
  components: {
    bbdAside,
    bbdHeader
  },
  data() {
    return {
      // sideWidth: '250px',  //左侧菜单宽度
    }
  },
  computed: {
    primaryColor() {
      return this.$store.state.primaryColor
    },
    switchSide() {
      return this.$store.state.isMenuCollapse
    },
    sideWidth() {
      if(this.switchSide) {
        return '64px'
      } else {
        return '250px'
      }
    }
  },
  mounted() {
    // console.dir(this.switchSide)
  },
  methods: {
    
  }
}
</script>

<style scoped lang="scss">
  .bbd-layout {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .el-container {
    height: 100%;
  }

</style>