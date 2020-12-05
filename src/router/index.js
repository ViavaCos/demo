import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/',
      component: () => import('../components/Layout.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: () => import('../views/home.vue')
        },
        {
          path: '/export',
          component: () => import('../components/ExportPDF.vue')
        },
        {
          path: '/table',
          component: () => import('../components/TableSpan.vue')
        },
        {
          path: '/tree',
          component: () => import('../components/HalfCheckTree.vue')
        },
        {
          path: '/upload',
          component: () => import('../components/upload.vue')
        },
        {
          path: '/animate',
          component: () => import('../components/animate')
        },
        {
          path: '/throttle',
          component: () => import('../components/throttle')
        },
        {
          path: '/sukula',
          component: () => import('../components/SaKuLaTree.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/v',
      component: () => import('../views/v.vue')
    }
  ]
})

export default router
