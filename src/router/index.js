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
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/definitions',
      name: 'definitions',
      component: Definitions
    },
    {
      path: '/residents',
      name: 'residents',
      component: Residents
    },
    {
      path: '/dues',
      name: 'dues',
      component: Dues
    },
    {
      path: '/announcements',
      name: 'announcements',
      component: Announcements
    },
    {
      path: '/complaints',
      name: 'complaints',
      component: Complaints
    },
    {
      path: '/maintenance',
      name: 'maintenance',
      component: Maintenance
    },
    {
      path: '/reports',
      name: 'reports',
      component: Reports
    }
  ]
})

export default router 