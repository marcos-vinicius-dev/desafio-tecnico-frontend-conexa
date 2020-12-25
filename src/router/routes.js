const requireAuth = {
  require: true,
  redirectNotAllowed: '/login'
}

const notRequireAuth = {
  require: false,
  redirectNotAllowed: '/'
}

const routes = [
  {
    path: '/login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        meta: {
          auth: notRequireAuth
        },
        component: () => import('pages/Index.vue')
      }
    ]
  },
  {
    path: '/',
    redirect: 'dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'dashboard',
        path: '/dashboard',
        meta: {
          auth: requireAuth
        },
        component: () => import('pages/Dashboard.vue')
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
      }
    ]
  },

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
