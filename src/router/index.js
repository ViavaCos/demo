import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/Layout.vue'
import ExportPDF from '../components/ExportPDF.vue'
import TableSpan from '../components/TableSpan.vue'
import HalfCheckTree from '../components/HalfCheckTree.vue'
import upload from '../components/upload.vue'
import animate from '../components/animate'
import throttle from '../components/throttle'
import SaKuLaTree from '../components/SaKuLaTree'
import login from '../views/login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/',
      component: Layout,
      children: [
        {
          path: '/export',
          component: ExportPDF
        },
        {
          path: '/table',
          component: TableSpan
        },
        {
          path: '/tree',
          component: HalfCheckTree
        },
        {
          path: '/upload',
          component: upload
          // component: () => require('@/components/upload')
        },
        {
          path: '/animate',
          component: animate
        },
        {
          path: '/throttle',
          component: throttle
        },
        {
          path: '/sukula',
          component: SaKuLaTree
        }
      ]
    },
    {
        path: '/login',
        component: () => import('../views/login.vue')
    }
  ]
})

export default router
