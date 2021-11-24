
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '01', component: () => import('pages/01.vue') },
      { path: '02', component: () => import('pages/02.vue') },
      { path: '03', component: () => import('pages/03.vue') },
      { path: '04', component: () => import('pages/04.vue') },
      { path: '05', component: () => import('pages/05.vue') },
      { path: '06', component: () => import('pages/06.vue') },
      { path: '07', component: () => import('pages/07.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
