import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Residents from '../views/Residents.vue'
import Dues from '../views/Dues.vue'
import Announcements from '../views/Announcements.vue'
import Complaints from '../views/Complaints.vue'
import Maintenance from '../views/Maintenance.vue'
import Reports from '../views/Reports.vue'
import Definitions from '../views/Definitions.vue'
import { authService } from '../services/authService'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresGuest: true }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/definitions',
      name: 'definitions',
      component: Definitions,
      meta: { requiresAuth: true }
    },
    {
      path: '/residents',
      name: 'residents',
      component: Residents,
      meta: { requiresAuth: true }
    },
    {
      path: '/dues',
      name: 'dues',
      component: Dues,
      meta: { requiresAuth: true }
    },
    {
      path: '/announcements',
      name: 'announcements',
      component: Announcements,
      meta: { requiresAuth: true }
    },
    {
      path: '/complaints',
      name: 'complaints',
      component: Complaints,
      meta: { requiresAuth: true }
    },
    {
      path: '/maintenance',
      name: 'maintenance',
      component: Maintenance,
      meta: { requiresAuth: true }
    },
    {
      path: '/reports',
      name: 'reports',
      component: Reports,
      meta: { requiresAuth: true }
    }
  ]
})

// Navigation guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = authService.isAuthenticated()
  
  // Eğer sayfa authentication gerektiriyorsa
  if (to.meta.requiresAuth) {
    if (!isAuthenticated) {
      // Kullanıcı giriş yapmamışsa login sayfasına yönlendir
      next('/login')
      return
    }
  }
  
  // Eğer sayfa sadece giriş yapmamış kullanıcılar için ise (login sayfası)
  if (to.meta.requiresGuest) {
    if (isAuthenticated) {
      // Kullanıcı zaten giriş yapmışsa dashboard'a yönlendir
      next('/dashboard')
      return
    }
  }
  
  next()
})

export default router 