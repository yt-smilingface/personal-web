import Vue from 'vue'
import Vuex from 'vuex'
import jsCookie from 'js-cookie'  
import {primaryColor, isMenuCollapse} from '@/utils/baseText'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
      //存放的键值对就是所要管理的状态
      //主题颜色  判断是否有缓存主题色，有取缓存中的，没有则取定义好的
      primaryColor: jsCookie.get('primaryColor') ? jsCookie.get('primaryColor') : primaryColor,  

      //左侧菜宽度  判断是否有缓存，有取缓存中的，没有则取定义好的
      isMenuCollapse: jsCookie.get('isMenuCollapse') == 'true' ? Boolean(jsCookie.get('isMenuCollapse')) : isMenuCollapse, 
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