import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/',
      component: () => import('../views/v.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: () => import('../views/home.vue')
        },
        {
          path: '/article',
          component: () => import('../views/article.vue')
        },
        {
          path: '/article-details',
          component: () => import('../views/article-details.vue')
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
