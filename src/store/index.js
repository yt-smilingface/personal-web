import Vue from 'vue'
import Vuex from 'vuex'
import {primaryColor, isMenuCollapse} from '@/utils/baseText'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
      //存放的键值对就是所要管理的状态
      //主题颜色  判断是否有缓存主题色，有取缓存中的，没有则取定义好的
      primaryColor: localStorage.getItem('primaryColor') ? localStorage.getItem('primaryColor') : primaryColor,  

      //左侧菜宽度  判断是否有缓存，有取缓存中的，没有则取定义好的
      isMenuCollapse: localStorage.getItem('isMenuCollapse') == 'true' ? Boolean(localStorage.getItem('isMenuCollapse')) : isMenuCollapse, 
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