import Vue from 'vue'
import Router from 'vue-router'
import { request } from 'http';

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const index = r => require.ensure([], () => r(require('@/page/index')), 'index');
//设计理念
const design = r => require.ensure([], () => r(require('@/page/design')), 'design');
const news = r => require.ensure([], () => r(require('@/page/news')), 'news');
const about = r => require.ensure([], () => r(require('@/page/about')), 'about');
const history = r => require.ensure([], () => r(require('@/page/history')), 'history');
const workdetail = r=>require.ensure([], () => r(require('@/page/workdetail')), 'workdetail');
const routes = [
	{
		path: '/',
		component: index
	},
	{
		path: '/home',
		component: home
	},
	{
		path: '/login',
		component: login
	},
	{
		path: '/design',
		component: design
	},
	{
		path: '/news',
		component: news
	},
	{
		path: '/history',
		component: history
	},
	{
		path: '/about',
		component: about
	},{
		path:'/workdetail',
		component: workdetail
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
