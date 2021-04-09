<template>
  <div class="bbd-aside">
    <div class="bbd-logo" @click="$router.push('/home')">
      <img v-if="isCollapse" :src="logoSrc" alt="logo" style="width:40px;height: 40px;margin: 10px;">
      <div v-if="!isCollapse" style="padding: 0 20px;">云南省工信厅<br> 工业运行监测系统</div>
    </div>
    <el-menu
      class="bbd-menu"
      :background-color="backgroundColor"
      text-color="#fff"
      :collapse="isCollapse"
      :active-text-color="activeColor"
      router>
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <template v-for="item in menuOptions">
        <el-submenu v-if="item.children" :index="item.id" :key="item.key">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="child in item.children" 
              :key="child.id" :index="child.path">
              <i :class="child.icon"></i>
              {{child.name}}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item v-else :index="item.id" :key="item.key">
          <i class="el-icon-setting"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>


  </div>
</template>
<script>

export default {
  components: {
  },
  data() {
    return {
      logoSrc: require('@/assets//images/logo.png'),
      activeIndex: '1',
      activeIndex2: '1',
      activeColor: '#ffd04b',

      // 菜单列表
      menuOptions: [
        {
          id: '0',
          name: '系统设置',
          icon: 'el-icon-location',
          children: [
            {
              id: '1',
              name: '菜单设置',
              icon: 'el-icon-location',
              path: '/menu'
            },
            {
              id: '2',
              name: '组织机构',
              icon: 'el-icon-location',
              path: '/organization'
            },
            {
              id: '3',
              name: '角色权限',
              icon: 'el-icon-location',
              path: '/jurisdiction'
            },
            {
              id: '4',
              name: '用户管理',
              icon: 'el-icon-location',
              path: '/userManagement'
            },
          ]
        }
      ]
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.isMenuCollapse
    },
    backgroundColor() {
      return this.$store.state.primaryColor
    }
  },
  mounted() {
    
  },  
  methods: {
    
  }
}
</script>

<style soped lang="scss">
  .bbd-logo {
    overflow: hidden;
    height: 60px;
    font-size: 20px;
    color: #fff;
  }
  
  .el-menu {
    border-right: none !important;
  }

</style>
<style lang="scss">
  .el-menu {
    i {
      color: #fff !important;
    }
  }

</style>