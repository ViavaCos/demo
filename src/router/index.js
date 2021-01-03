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
      path: '/register',
      component: () => import('../views/register.vue')
    },
    {
      path: '/v',
      component: () => import('../views/v.vue')
    }
  ]
})

// solve Error: Loading CSS chunk chunk-016d2e83 failed.
router.onError(error => {
  const pattern = /Loading chunk (\w)+ failed/g
  const isError = error.message.match(pattern)
  const targetPath = router.history.pending.fullPath
  if (isError) {
    router.replace(targetPath)
  }
})

export default router
