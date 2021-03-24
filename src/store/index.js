import Vue from 'vue'
import Vuex from 'vuex'
import {primaryColor, isMenuCollapse} from '@/utils/baseText'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state:{
      //存放的键值对就是所要管理的状态
      primaryColor: primaryColor,  //主题颜色
      isMenuCollapse: isMenuCollapse,  //左侧菜宽度
    },
    mutations: {
      primaryColor: function(state, data) {
        state.primaryColor = data 
      },
      isMenuCollapse: function(state, data) {
        state.isMenuCollapse = data
      }
    }
})

export default store