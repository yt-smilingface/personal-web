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
        <el-container style="height: calc(100% - 20px);overflow:auto;">
          <el-main>
            <el-breadcrumb style="margin-bottom: 20px;" separator="/">
              <el-breadcrumb-item :to="{ path: '/home' }"><i class="el-icon-s-home"></i> 首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{breadcrumbItem == '' ? '首页' : breadcrumbItem}}</el-breadcrumb-item>
            </el-breadcrumb>
            <router-view></router-view>
          </el-main>
          <el-footer class="bbd-footer">
            运营单位：云南数联铭信科技有限公司 滇ICP备00000000 客服热线：400-803-0095
          </el-footer>
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
      breadcrumbItem: '',
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
  watch: {
    $route: function(data) {
      this.breadcrumbItem = data.meta.name
    }
  },
  mounted() {
    
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

  .bbd-footer {
    height: auto !important;
    padding: 10px 20px;
    text-align: center;
    font-size: 12px;
    color: #aaa;
  }

</style>