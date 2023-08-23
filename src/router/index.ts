import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const layoutRoutes: Array<RouteRecordRaw> = [
  {
    path: 'index',
    name: '数字驾驶舱',
    meta: {
      title: 'index',
    },
    component: () => import('@/pages/index.vue'),
  },
  {
    path: 'hrNum',
    name: '人员数量指标',
    meta: {
      title: 'hrNum',
    },
    component: () => import('@/pages/hr/hrNum/index.vue'),
  },
  {
    path: 'hrOrg',
    name: '人员结构指标',
    meta: {
      title: 'hrOrg',
    },
    component: () => import('@/pages/hr/hrOrg/index.vue'),
  },
  {
    path: 'hrChange',
    name: '人员变化指标',
    meta: {
      title: 'hrChange',
    },
    component: () => import('@/pages/hr/hrChange/index.vue'),
  },
  {
    path: 'hrExtra',
    name: '加班时长',
    meta: {
      title: 'hrExtra',
    },
    component: () => import('@/pages/hr/hrExtra/index.vue'),
  },
  {
    path: 'hrDetail',
    name: '借调人员详情',
    meta: {
      title: 'hrDetail',
    },
    component: () => import('@/pages/hr/hrDetail/index.vue'),
  },
  {
    path: 'detail',
    name: '借调人员详情',
    meta: {
      title: 'detail',
    },
    component: () => import('@/pages/hr/hrDetail/detail/index.vue'),
  },
  {
    path: 'hrTable',
    name: '借调人员详情',
    meta: {
      title: 'hrTable',
    },
    component: () => import('@/pages/hr/hrDetail/index.vue'),
  },
  {
    path: 'pinia',
    name: 'pinia',
    meta: {
      title: 'pinia',
    },
    component: () => import('@/pages/hr/hrDetail/detail/index.vue'),
  },
  {
    path: 'geo',
    name: 'geo',
    meta: {
      title: 'geo',
    },
    component: () => import('@/pages/geo/index.vue'),
  },
  {
    path: 'image-rotate',
    name: 'image-rotate',
    meta: {
      title: 'image-rotate',
    },
    component: () => import('@/pages/image-rotate/index.vue'),
  },
];

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/index',
    // 需要layout的页面
    children: layoutRoutes,
  },
  // 不需要layout的页面
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'login',
    },
    component: () => import('@/pages/login/index.vue'),
  },
  // 替代vue2中的'*'通配符路径
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHashHistory(), // history 模式则使用 createWebHistory()
  routes,
});
export default router;
