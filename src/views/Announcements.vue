<template>
  <AdminLayout>
    <div>
      <div class="mb-8 flex justify-between items-center">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">Duyuru Sistemi</h2>
          <p class="text-gray-600">Site sakinlerine duyuru ve bildirimler gönderin</p>
        </div>
        <button class="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
          Yeni Duyuru
        </button>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div class="flex items-center">
            <div class="p-3 bg-blue-100 rounded-lg">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Toplam Duyuru</p>
              <p class="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div class="flex items-center">
            <div class="p-3 bg-green-100 rounded-lg">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Aktif</p>
              <p class="text-2xl font-bold text-gray-900">18</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div class="flex items-center">
            <div class="p-3 bg-red-100 rounded-lg">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Acil</p>
              <p class="text-2xl font-bold text-gray-900">3</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div class="flex items-center">
            <div class="p-3 bg-purple-100 rounded-lg">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Etkinlik</p>
              <p class="text-2xl font-bold text-gray-900">5</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Filters -->
      <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1">
            <input 
              type="text" 
              placeholder="Duyuru başlığı ara..."
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
          </div>
          <div class="flex gap-2">
            <select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option>Tüm Kategoriler</option>
              <option>Genel Duyuru</option>
              <option>Acil Bildirim</option>
              <option>Etkinlik</option>
              <option>Bakım</option>
            </select>
            <select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option>Tüm Durumlar</option>
              <option>Aktif</option>
              <option>Pasif</option>
              <option>Arşiv</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Announcements Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Emergency Announcement -->
        <div class="bg-white rounded-xl shadow-sm border border-red-200 overflow-hidden">
          <div class="bg-red-50 px-4 py-3 border-b border-red-200">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                </svg>
                <span class="text-sm font-medium text-red-800">Acil Bildirim</span>
              </div>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                Aktif
              </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Su Kesintisi</h3>
            <p class="text-gray-600 text-sm mb-4">Yarın 09:00-17:00 saatleri arasında su kesintisi olacaktır. Gerekli önlemleri alınız.</p>
            <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span>15 Ocak 2024</span>
              <span>Admin</span>
            </div>
            <div class="flex space-x-2">
              <button class="bg-primary-50 hover:bg-primary-100 text-primary-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border border-primary-200 hover:border-primary-300">
                Düzenle
              </button>
              <button class="bg-danger-50 hover:bg-danger-100 text-danger-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border border-danger-200 hover:border-danger-300">
                Sil
              </button>
            </div>
          </div>
        </div>

        <!-- General Announcement -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="bg-blue-50 px-4 py-3 border-b border-blue-200">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
                </svg>
                <span class="text-sm font-medium text-blue-800">Genel Duyuru</span>
              </div>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Aktif
              </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Aidat Ödemeleri</h3>
            <p class="text-gray-600 text-sm mb-4">Ocak ayı aidat ödemeleri 15 Ocak tarihine kadar yapılacaktır. Gecikme faizi uygulanacaktır.</p>
            <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span>10 Ocak 2024</span>
              <span>Admin</span>
            </div>
            <div class="flex space-x-2">
              <button class="bg-primary-50 hover:bg-primary-100 text-primary-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border border-primary-200 hover:border-primary-300">
                Düzenle
              </button>
              <button class="bg-danger-50 hover:bg-danger-100 text-danger-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border border-danger-200 hover:border-danger-300">
                Sil
              </button>
            </div>
          </div>
        </div>

        <!-- Event Announcement -->
        <div class="bg-white rounded-xl shadow-sm border border-purple-200 overflow-hidden">
          <div class="bg-purple-50 px-4 py-3 border-b border-purple-200">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span class="text-sm font-medium text-purple-800">Etkinlik</span>
              </div>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Aktif
              </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Yılbaşı Kutlaması</h3>
            <p class="text-gray-600 text-sm mb-4">31 Aralık akşamı site bahçesinde yılbaşı kutlaması yapılacaktır. Tüm sakinler davetlidir.</p>
            <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span>28 Aralık 2023</span>
              <span>Admin</span>
            </div>
            <div class="flex space-x-2">
              <button class="bg-primary-50 hover:bg-primary-100 text-primary-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border border-primary-200 hover:border-primary-300">
                Düzenle
              </button>
              <button class="bg-danger-50 hover:bg-danger-100 text-danger-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border border-danger-200 hover:border-danger-300">
                Sil
              </button>
            </div>
          </div>
        </div>

        <!-- Maintenance Announcement -->
        <div class="bg-white rounded-xl shadow-sm border border-yellow-200 overflow-hidden">
          <div class="bg-yellow-50 px-4 py-3 border-b border-yellow-200">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span class="text-sm font-medium text-yellow-800">Bakım</span>
              </div>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Aktif
              </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Asansör Bakımı</h3>
            <p class="text-gray-600 text-sm mb-4">A Blok asansörü 20 Ocak tarihinde bakıma alınacaktır. Merdiven kullanımına dikkat ediniz.</p>
            <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span>18 Ocak 2024</span>
              <span>Admin</span>
            </div>
            <div class="flex space-x-2">
              <button class="text-primary-600 hover:text-primary-900 text-sm">Düzenle</button>
              <button class="text-red-600 hover:text-red-900 text-sm">Sil</button>
            </div>
          </div>
        </div>

        <!-- General Announcement 2 -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="bg-blue-50 px-4 py-3 border-b border-blue-200">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
                </svg>
                <span class="text-sm font-medium text-blue-800">Genel Duyuru</span>
              </div>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                Arşiv
              </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Güvenlik Uyarısı</h3>
            <p class="text-gray-600 text-sm mb-4">Site giriş çıkışlarında güvenlik kartlarınızı kullanmayı unutmayınız.</p>
            <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span>5 Ocak 2024</span>
              <span>Admin</span>
            </div>
            <div class="flex space-x-2">
              <button class="text-primary-600 hover:text-primary-900 text-sm">Düzenle</button>
              <button class="text-red-600 hover:text-red-900 text-sm">Sil</button>
            </div>
          </div>
        </div>

        <!-- Event Announcement 2 -->
        <div class="bg-white rounded-xl shadow-sm border border-purple-200 overflow-hidden">
          <div class="bg-purple-50 px-4 py-3 border-b border-purple-200">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span class="text-sm font-medium text-purple-800">Etkinlik</span>
              </div>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Aktif
              </span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Çocuk Kulübü</h3>
            <p class="text-gray-600 text-sm mb-4">Her cumartesi 14:00-16:00 saatleri arasında çocuk kulübü etkinlikleri yapılacaktır.</p>
            <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span>12 Ocak 2024</span>
              <span>Admin</span>
            </div>
            <div class="flex space-x-2">
              <button class="text-primary-600 hover:text-primary-900 text-sm">Düzenle</button>
              <button class="text-red-600 hover:text-red-900 text-sm">Sil</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup>
import AdminLayout from '../components/AdminLayout.vue'
</script> 