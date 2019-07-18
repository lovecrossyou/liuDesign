import Vue from 'vue'
import Router from 'vue-router'
import { request } from 'http';

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');

const routes = [
	{
		path: '/',
		component: login
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
