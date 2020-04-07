import Vue from 'vue'
import VueRouter from 'vue-router'
import Explore from '../views/Explore.vue'
import LogIn from '../components/LogIn.vue'
import SignUp from '../components/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/favourite',
    name: 'Favourite',
    component: () => import('../views/Favourite.vue')
  },
  {
    path: '/myCollection',
    name: 'MyCollection',
    component: () => import('../views/MyCollection.vue')
  },
  {
    path: '/userCenter',
    name: 'UserCenter',
    component: () => import('../views/UserCenter.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue'),
    children: [
      {
        path: 'logIn',
        name: 'LogIn',
        component: LogIn,
      },
      {
        path: 'signUp',
        name: 'SignUp',
        component: SignUp,
      }
    ]
  },
  {
    path: '/collection/:collectionName',
    name: 'Collection',
    component: () => import('../views/Collection.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
