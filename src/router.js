import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('token')

  // Redirect to login page if not logged in
  if (authRequired && !loggedIn) {
    return next('/login')
  }

  // Redirect to dashboard page if already logged in
  if (to.path === '/login' && loggedIn) {
    return next('/')
  }

  next()
})

export default router
