import fetch from '@/config/fetch'

/**
 * 登陆
 */

export const login = data => fetch('/api/admin/login', data, 'POST');

/**
 * 退出
 */

export const singout = () => fetch('/api/admin/singout');
