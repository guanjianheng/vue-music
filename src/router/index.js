import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Topic from '../views/Topic'
import Mine from '../views/Mine'
import Search from '../views/Search'
import Layout from '../views/Layout'

Vue.use(VueRouter)

const routes = [
 {
   path:"/",
   name:"Layout",
   component: Layout,
   children: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/topic',
      name: 'Topic',
      component: Topic
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    } 
   ]
 }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:"active"
})

export default router
