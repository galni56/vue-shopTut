import Vue from 'vue'
import Router from 'vue-router'

import vCatalog from '../components/catalog/v-catalog'
import vProducts from '../components/catalog/v-products'
import vMainPage from '../components/main-page/v-main-page'
import vProductPage from '../components/catalog/v-product-page'

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: vMainPage
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: vCatalog
    },
    {
      path: '/product',
      name: 'product',
      component: vProductPage
    },
    {
      path: '/filter',
      name: 'products',
      component: vProducts,
      props: true
    },
  ]
})

export default router;
