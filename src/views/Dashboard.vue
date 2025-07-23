<template>
  <AdminLayout>
    <div class="animate-fade-in">
      <!-- Welcome Section -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
          Hoş Geldiniz! 👋
        </h1>
        <p class="text-gray-600">Site yönetim panelinize hoş geldiniz. Hızlı işlemler için butonları kullanabilirsiniz.</p>
      </div>

      <!-- Quick Actions - Modern Button Design -->
      <div class="bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-xl rounded-2xl shadow-soft border border-white/30 p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold text-gray-900">Hızlı İşlemler</h2>
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span class="text-sm text-gray-500">Aktif</span>
          </div>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <button class="group relative bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 p-4 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-105 hover:border-primary-300 hover:from-primary-100 hover:to-primary-200">
            <div class="flex flex-col items-center text-center">
              <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-2 group-hover:shadow-glow transition-all duration-300">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
              </div>
              <span class="text-xs font-medium text-gray-700 group-hover:text-primary-600 transition-colors">Duyuru</span>
            </div>
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button class="group relative bg-gradient-to-br from-success-50 to-success-100 border border-success-200 p-4 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-105 hover:border-success-300 hover:from-success-100 hover:to-success-200">
            <div class="flex flex-col items-center text-center">
              <div class="w-10 h-10 bg-gradient-to-br from-success-500 to-success-600 rounded-lg flex items-center justify-center mb-2 group-hover:shadow-glow-success transition-all duration-300">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
              </div>
              <span class="text-xs font-medium text-gray-700 group-hover:text-success-600 transition-colors">Aidat</span>
            </div>
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-success-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button class="group relative bg-gradient-to-br from-warning-50 to-warning-100 border border-warning-200 p-4 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-105 hover:border-warning-300 hover:from-warning-100 hover:to-warning-200">
            <div class="flex flex-col items-center text-center">
              <div class="w-10 h-10 bg-gradient-to-br from-warning-500 to-warning-600 rounded-lg flex items-center justify-center mb-2 group-hover:shadow-glow-warning transition-all duration-300">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                </svg>
              </div>
              <span class="text-xs font-medium text-gray-700 group-hover:text-warning-600 transition-colors">Şikayet</span>
            </div>
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-warning-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button class="group relative bg-gradient-to-br from-secondary-50 to-secondary-100 border border-secondary-200 p-4 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-105 hover:border-secondary-300 hover:from-secondary-100 hover:to-secondary-200">
            <div class="flex flex-col items-center text-center">
              <div class="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center mb-2 group-hover:shadow-glow transition-all duration-300">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <span class="text-xs font-medium text-gray-700 group-hover:text-secondary-600 transition-colors">Rapor</span>
            </div>
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-secondary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button class="group relative bg-gradient-to-br from-info-50 to-info-100 border border-info-200 p-4 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-105 hover:border-info-300 hover:from-info-100 hover:to-info-200">
            <div class="flex flex-col items-center text-center">
              <div class="w-10 h-10 bg-gradient-to-br from-info-500 to-info-600 rounded-lg flex items-center justify-center mb-2 group-hover:shadow-glow-info transition-all duration-300">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <span class="text-xs font-medium text-gray-700 group-hover:text-info-600 transition-colors">Sakin</span>
            </div>
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-info-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button class="group relative bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 p-4 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-105 hover:border-purple-300 hover:from-purple-100 hover:to-purple-200">
            <div class="flex flex-col items-center text-center">
              <div class="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-2 group-hover:shadow-glow-purple transition-all duration-300">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <span class="text-xs font-medium text-gray-700 group-hover:text-purple-600 transition-colors">Ayarlar</span>
            </div>
            <div class="absolute -top-1 -right-1 w-3 h-3 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-soft border border-white/20 p-6 hover:shadow-medium transition-all duration-300 transform hover:scale-105">
          <div class="flex items-center">
            <div class="p-3 bg-gradient-success rounded-xl shadow-glow-success">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Toplam Sakin</p>
              <p class="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </div>

        <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-soft border border-white/20 p-6 hover:shadow-medium transition-all duration-300 transform hover:scale-105">
          <div class="flex items-center">
            <div class="p-3 bg-gradient-primary rounded-xl shadow-glow">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Aylık Gelir</p>
              <p class="text-2xl font-bold text-gray-900">₺12,400</p>
            </div>
          </div>
        </div>

        <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-soft border border-white/20 p-6 hover:shadow-medium transition-all duration-300 transform hover:scale-105">
          <div class="flex items-center">
            <div class="p-3 bg-gradient-warning rounded-xl shadow-glow-warning">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Bekleyen Şikayet</p>
              <p class="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>

        <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-soft border border-white/20 p-6 hover:shadow-medium transition-all duration-300 transform hover:scale-105">
          <div class="flex items-center">
            <div class="p-3 bg-gradient-secondary rounded-xl shadow-glow">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Aktif Duyuru</p>
              <p class="text-2xl font-bold text-gray-900">5</p>
            </div>
          </div>
        </div>

        <!-- New: Aylık Beklenen Gelir -->
        <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-soft border border-white/20 p-6 hover:shadow-medium transition-all duration-300 transform hover:scale-105">
          <div class="flex items-center">
            <div class="p-3 bg-gradient-info rounded-xl shadow-glow-info">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Beklenen Gelir</p>
              <p class="text-2xl font-bold text-gray-900">₺15,200</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activities & Complaints -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Recent Activities -->
        <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-soft border border-white/20 p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Son Aktiviteler</h2>
          <div class="space-y-4">
            <div v-for="activity in recentActivities" :key="activity.id" class="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50/50 transition-colors duration-200">
              <div class="flex-shrink-0">
                <div :class="`w-8 h-8 rounded-full flex items-center justify-center ${activity.color}`">
                  <component :is="activity.icon" class="w-4 h-4 text-white" />
                </div>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900">{{ activity.title }}</p>
                <p class="text-sm text-gray-500">{{ activity.description }}</p>
                <p class="text-xs text-gray-400 mt-1">{{ activity.time }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Complaints -->
        <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-soft border border-white/20 p-6">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Son Şikayetler</h2>
          <div class="space-y-4">
            <div v-for="complaint in recentComplaints" :key="complaint.id" class="p-4 rounded-xl border-l-4 hover:shadow-soft transition-all duration-200" :class="complaint.borderColor">
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <h3 class="text-sm font-medium text-gray-900">{{ complaint.title }}</h3>
                  <p class="text-sm text-gray-600 mt-1">{{ complaint.description }}</p>
                  <div class="flex items-center mt-2 space-x-4 text-xs text-gray-500">
                    <span>{{ complaint.resident }}</span>
                    <span>{{ complaint.time }}</span>
                  </div>
                </div>
                <span :class="`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${complaint.statusColor}`">
                  {{ complaint.status }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup>
import AdminLayout from '../components/AdminLayout.vue'

// Icons as components
const UserIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`
}

const DollarIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/></svg>`
}

const WarningIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>`
}

const MegaphoneIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/></svg>`
}

const recentActivities = [
  {
    id: 1,
    title: 'Yeni sakin kaydı',
    description: 'Ahmet Yılmaz A-101 daireye kayıt oldu',
    time: '2 saat önce',
    icon: 'UserIcon',
    color: 'bg-gradient-success'
  },
  {
    id: 2,
    title: 'Aidat ödemesi',
    description: 'Fatma Demir Ocak ayı aidatını ödedi',
    time: '4 saat önce',
    icon: 'DollarIcon',
    color: 'bg-gradient-primary'
  },
  {
    id: 3,
    title: 'Yeni duyuru',
    description: 'Su kesintisi duyurusu yayınlandı',
    time: '6 saat önce',
    icon: 'MegaphoneIcon',
    color: 'bg-gradient-secondary'
  },
  {
    id: 4,
    title: 'Şikayet çözüldü',
    description: 'Asansör arızası giderildi',
    time: '8 saat önce',
    icon: 'WarningIcon',
    color: 'bg-gradient-warning'
  }
]

const recentComplaints = [
  {
    id: 1,
    title: 'Su Kesintisi',
    description: 'Sabah 08:00\'den beri su kesintisi var',
    resident: 'Ahmet Yılmaz',
    time: '2 saat önce',
    status: 'Bekliyor',
    borderColor: 'border-danger-500 bg-red-50/50',
    statusColor: 'bg-danger-100 text-danger-800'
  },
  {
    id: 2,
    title: 'Asansör Arızası',
    description: 'Asansör 2. katta takılı kalıyor',
    resident: 'Fatma Demir',
    time: '4 saat önce',
    status: 'İnceleniyor',
    borderColor: 'border-warning-500 bg-yellow-50/50',
    statusColor: 'bg-warning-100 text-warning-800'
  },
  {
    id: 3,
    title: 'Gürültü Şikayeti',
    description: 'Üst kattan sürekli gürültü geliyor',
    resident: 'Mehmet Kaya',
    time: '6 saat önce',
    status: 'Bekliyor',
    borderColor: 'border-danger-500 bg-red-50/50',
    statusColor: 'bg-danger-100 text-danger-800'
  }
]
</script> 