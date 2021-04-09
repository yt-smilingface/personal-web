import Vue from 'vue'
import Router from 'vue-router'

// demo
// const demo = () => import('@/views/demo.vue')

// 登录
const login = () => import('@/views/login/login.vue')


const web = () => import('@/components/layout/index.vue')
// 首页
const home = () => import('@/views/home/index.vue')


// 系统设置
const menu = () => import('@/views/setting/menu.vue')  //菜单设置
const jurisdiction = () => import('@/views/setting/jurisdiction.vue')  //角色权限
const organization = () => import('@/views/setting/organization.vue')  //组织机构
const userManagement = () => import('@/views/setting/userManagement.vue')  //用户管理


Vue.use(Router);
export default new Router({
	// mode: 'history',// 默认hash
	base: "/",
	routes: [
		{ path: '', name: 'login', component: login, meta: { index: 0, name: '登录' } },
		{ path: '/login', name: 'login', component: login, meta: { index: 0, name: '登录' } },
		{ path: '/web', name: 'web', component: web, meta: { index: 0, name: '首页' },
			children: [
				{ path: '', name: 'home', component: home, meta: { index: 1, name: '首页' } },
				{ path: '/home', name: 'home', component: home, meta: { index: 1,	name: '首页' } },
				{ path: '/menu', name: 'menu', component: menu, meta: { index: 1, name: '菜单设置' } },
				{ path: '/jurisdiction', name: 'jurisdiction', component: jurisdiction, meta: { index: 1, name: '角色权限' } },
				{ path: '/organization', name: 'organization', component: organization, meta: { index: 1, name: '组织机构' } },
				{ path: '/userManagement', name: 'userManagement', component: userManagement, meta: { index: 1, name: '用户管理' } },
			]
		}
  ]
})