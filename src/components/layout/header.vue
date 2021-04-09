<template>
  <div class="bbd-header">
    <span :class="switchSide ? 'el-icon-s-unfold' : 'el-icon-s-fold'" 
      class="bbd-brn-switch"
      @click="switchChange"></span>

    <el-badge :value="12" class="bbd-notice-item">
      <i class="el-icon-bell"></i>
    </el-badge>
    <el-color-picker
      style="display: inline-block;margin-right: 20px;vertical-align: -10px;"
      v-model="primaryColor"
      size="mini"
      :predefine="predefineColors"
      @change="colorChange">
    </el-color-picker>
    <!-- <el-dropdown trigger="hover" :hide-on-click="false">
      <span style="margin-right: 20px;color: #fff;cursor: pointer;">
        主题设置<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="0">背景颜色</el-dropdown-item>
        <el-dropdown-item command="1">文字颜色</el-dropdown-item>
        <el-dropdown-item command="2">菜单选中</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown> -->
    <el-dropdown trigger="hover" @command="commandChange">
      <span style="color: #fff;cursor: pointer;">
        admin<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="0">个人中心</el-dropdown-item>
        <el-dropdown-item command="1">修改密码</el-dropdown-item>
        <el-dropdown-item command="2">主题设置</el-dropdown-item>
        <el-dropdown-item command="3" divided>退出</el-dropdown-item>
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
        '#409eff',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
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
        localStorage.setItem('isMenuCollapse',false)  //缓存左侧菜单状态
        this.$store.commit('isMenuCollapse',false)
      } else {
        this.switchSide = true
        localStorage.setItem('isMenuCollapse',true)  //缓存左侧菜单状态
        this.$store.commit('isMenuCollapse', true)
      }   
    },

    // 主题确认
    colorChange(data) {
      localStorage.setItem('primaryColor',data)  //缓存主题颜色
      this.$store.commit('primaryColor',data)
    },

    // 下拉菜单点击
    commandChange(data) {
      if(data == '3') {
        this.$router.push('/')
      }
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

  // 消息通知
  .bbd-notice-item {
    margin-right: 40px;
    line-height: 30px;
    cursor: pointer;
    i {
      font-size: 20px;
      color: #fff;
    }
  }
</style>