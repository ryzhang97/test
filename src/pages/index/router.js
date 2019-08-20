import Vue from 'vue'
import Router from 'vue-router'
import Push from '@/components/push/push.vue'
import Product from '@/components/product/product.vue'
import Map from '@/components/map/map.vue'
import utils from '../../assets/js/utils'

Vue.use(Router)

const router = new Router({
  // base: '/api',
  mode: 'history',
  routes: [
    {
      path: '/push',
      component: Push,
      meta: {
        title: '绩效考核'
      }
    },
    {
      path: '/product',
      component: Product,
      meta: {
        title: '素材详情'
      }
    },
    {
      path: '/map',
      component: Map,
      meta: {
        title: '位置信息'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  utils.log(to)
  utils.log(from)
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
