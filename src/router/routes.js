const requireAuth = {
  require: true,
  redirectNotAllowed: '/'
}

const notRequireAuth = {
  require: false,
  redirectNotAllowed: '/dashboard'
}

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        meta: {
          auth: notRequireAuth
        },
        component: () => import('pages/Index.vue')
      },
      {
        path: 'consultationCreate',
        meta: {
          auth: requireAuth
        },
        component: () => import('pages/ConsultationCreate.vue')
      },
      {
        name: 'consultationDetails',
        path: 'consultationDetails/:consultation',
        meta: {
          auth: requireAuth
        },
        component: () => import('pages/ConsultationDetails.vue')
      },
      {
        path: 'consultationList',
        meta: {
          auth: requireAuth
        },
        component: () => import('pages/ConsultationList.vue')
      },
      {
        path: 'dashboard',
        meta: {
          auth: requireAuth
        },
        component: () => import('pages/Dashboard.vue')
      }
    ]
  },

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
