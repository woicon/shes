import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/index'
import About from '@/components/about'
import Case from '@/components/case'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld,
    },
    { 
  		path: '/about',
  		name:"about us",
  		props:['coupons'],
  		component: About,
 	},
  ]
})
