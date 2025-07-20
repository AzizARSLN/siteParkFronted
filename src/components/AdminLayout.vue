<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    <!-- Header -->
    <header class="bg-white/80 backdrop-blur-md shadow-soft border-b border-white/20 sticky top-0 z-50">
      <div class="flex items-center justify-between px-4 py-2">
        <!-- Logo -->
        <div class="flex items-center">
          <div class="w-7 h-7 bg-gradient-primary rounded-lg flex items-center justify-center mr-3 shadow-glow">
            <span class="text-white font-bold text-xs">DP</span>
          </div>
          <div>
            <h1 class="text-base font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Doruk Park Sitesi
            </h1>
            <p class="text-xs text-gray-500">Site Yönetim Sistemi</p>
          </div>
        </div>

        <!-- User Info -->
        <div class="flex items-center space-x-3">
          <div class="flex items-center space-x-2">
            <div class="w-6 h-6 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center shadow-soft">
              <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <div class="text-left">
              <p class="text-sm font-medium text-gray-900">Admin Kullanıcı</p>
            </div>
          </div>
          <button @click="logout" class="text-gray-500 hover:text-danger-500 transition-colors duration-200 p-1 rounded-lg hover:bg-red-50">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Main Container - Fixed height -->
    <div class="flex h-[calc(100vh-60px)]">
      <!-- Sidebar - Fixed -->
      <aside class="w-64 bg-white/70 backdrop-blur-md shadow-soft border-r border-white/20 flex flex-col flex-shrink-0">
        <nav class="flex-1 mt-6 px-4 space-y-1">
          <router-link 
            v-for="item in menuItems" 
            :key="item.path"
            :to="item.path"
            :class="[
              $route.path === item.path 
                ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-glow' 
                : 'text-gray-700 hover:bg-white/50 hover:text-primary-600 hover:shadow-soft',
              'group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 transform hover:scale-105'
            ]"
          >
            <!-- Dashboard Icon -->
            <svg v-if="item.icon === 'HomeIcon'" class="mr-3 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            
            <!-- Definitions Icon -->
            <svg v-else-if="item.icon === 'CogIcon'" class="mr-3 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            
            <!-- Residents Icon -->
            <svg v-else-if="item.icon === 'UsersIcon'" class="mr-3 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
            </svg>
            
            <!-- Dues Icon -->
            <svg v-else-if="item.icon === 'CurrencyDollarIcon'" class="mr-3 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
            </svg>
            
            <!-- Announcements Icon -->
            <svg v-else-if="item.icon === 'MegaphoneIcon'" class="mr-3 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
            </svg>
            
            <!-- Complaints Icon -->
            <svg v-else-if="item.icon === 'ExclamationTriangleIcon'" class="mr-3 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
            </svg>
            
            <!-- Maintenance Icon -->
            <svg v-else-if="item.icon === 'WrenchScrewdriverIcon'" class="mr-3 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/>
            </svg>
            
            <!-- Reports Icon -->
            <svg v-else-if="item.icon === 'ChartBarIcon'" class="mr-3 h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            
            {{ item.name }}
          </router-link>
        </nav>

        <!-- Version and DateTime - Always visible at bottom -->
        <div class="p-3 bg-white/50 backdrop-blur-sm border-t border-white/20">
          <div class="text-center">
            <div class="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-3"></div>
            <div class="text-xs text-gray-600">
              <p class="font-medium">Versiyon: v1.0.0</p>
              <p class="mt-1 text-gray-500">{{ currentDateTime }}</p>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main Content - Scrollable -->
      <main class="flex-1 overflow-y-auto p-6 animate-fade-in">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentDateTime = ref('')

const menuItems = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'HomeIcon'
  },
  {
    name: 'Tanımlar',
    path: '/definitions',
    icon: 'CogIcon'
  },
  {
    name: 'Daire/Sakin Yönetimi',
    path: '/residents',
    icon: 'UsersIcon'
  },
  {
    name: 'Aidat Yönetimi',
    path: '/dues',
    icon: 'CurrencyDollarIcon'
  },
  {
    name: 'Duyuru Sistemi',
    path: '/announcements',
    icon: 'MegaphoneIcon'
  },
  {
    name: 'Şikayet/İstek',
    path: '/complaints',
    icon: 'ExclamationTriangleIcon'
  },
  {
    name: 'Bakım/Onarım',
    path: '/maintenance',
    icon: 'WrenchScrewdriverIcon'
  },
  {
    name: 'Raporlar',
    path: '/reports',
    icon: 'ChartBarIcon'
  }
]

// Update date time every second
let interval
const updateDateTime = () => {
  const now = new Date()
  currentDateTime.value = now.toLocaleString('tr-TR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

onMounted(() => {
  updateDateTime()
  interval = setInterval(updateDateTime, 1000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})

const logout = () => {
  router.push('/login')
}
</script> 