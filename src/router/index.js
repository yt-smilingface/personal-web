import Vue from 'vue'
import Router from 'vue-router'

// demo
// const demo = () => import('@/views/demo.vue')

// 登录
const login = () => import('@/views/login/login.vue')

// 首页
const home = () => import('@/views/home/index.vue')


Vue.use(Router);
export default new Router({
	// mode: 'history',// 默认hash
	base: "/",
	routes: [
		{
			path: '/',
			name: 'login',
			component: login,
			meta: {
				index: 0,
				name: '登录'
			}
		},
		{
			path: '/home',
			name: 'home',
			component: home,
			meta: {
				index: 0,
				name: '首页'
			}
		},
  ]
})