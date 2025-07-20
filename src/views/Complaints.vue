<template>
  <AdminLayout>
    <div>
      <div class="mb-8 flex justify-between items-center">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">Şikayet/İstek Yönetimi</h2>
          <p class="text-gray-600">Sakin şikayet ve isteklerini yönetin</p>
        </div>
        <button class="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
          Yeni Şikayet
        </button>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div class="flex items-center">
            <div class="p-3 bg-yellow-100 rounded-lg">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Bekleyen</p>
              <p class="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div class="flex items-center">
            <div class="p-3 bg-blue-100 rounded-lg">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">İnceleniyor</p>
              <p class="text-2xl font-bold text-gray-900">5</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div class="flex items-center">
            <div class="p-3 bg-green-100 rounded-lg">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Çözüldü</p>
              <p class="text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div class="flex items-center">
            <div class="p-3 bg-red-100 rounded-lg">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Acil</p>
              <p class="text-2xl font-bold text-gray-900">2</p>
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
              placeholder="Şikayet konusu veya sakin adı ara..."
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
          </div>
          <div class="flex gap-2">
            <select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option>Tüm Kategoriler</option>
              <option>Teknik Sorun</option>
              <option>Gürültü</option>
              <option>Temizlik</option>
              <option>Güvenlik</option>
              <option>Diğer</option>
            </select>
            <select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option>Tüm Durumlar</option>
              <option>Bekliyor</option>
              <option>İnceleniyor</option>
              <option>Çözüldü</option>
              <option>Reddedildi</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Complaints List -->
      <div class="space-y-6">
        <!-- Emergency Complaint -->
        <div class="bg-white rounded-xl shadow-sm border border-red-200 overflow-hidden">
          <div class="bg-red-50 px-6 py-4 border-b border-red-200">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                </svg>
                <span class="text-sm font-medium text-red-800">Acil</span>
              </div>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                Bekliyor
              </span>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Su Kesintisi - Daire 5</h3>
                <p class="text-gray-600 mb-4">Sabah 08:00'den beri su kesintisi var. Acil müdahale gerekiyor.</p>
                <div class="flex items-center space-x-6 text-sm text-gray-500">
                  <span>Ahmet Yılmaz</span>
                  <span>Daire 5</span>
                  <span>2 saat önce</span>
                  <span class="text-blue-600">Teknik Sorun</span>
                </div>
              </div>
              <div class="flex space-x-2 ml-4">
                <button class="bg-primary-50 hover:bg-primary-100 text-primary-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border border-primary-200 hover:border-primary-300">
                  Yanıtla
                </button>
                <button class="bg-success-50 hover:bg-success-100 text-success-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border border-success-200 hover:border-success-300">
                  Çözüldü
                </button>
                <button class="bg-danger-50 hover:bg-danger-100 text-danger-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border border-danger-200 hover:border-danger-300">
                  Reddet
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Normal Complaint -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="bg-blue-50 px-6 py-4 border-b border-blue-200">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                </svg>
                <span class="text-sm font-medium text-blue-800">Normal</span>
              </div>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                İnceleniyor
              </span>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Asansör Arızası - Daire 12</h3>
                <p class="text-gray-600 mb-4">Asansör 2. katta takılı kalıyor. Teknik servis çağrılması gerekiyor.</p>
                <div class="flex items-center space-x-6 text-sm text-gray-500">
                  <span>Fatma Demir</span>
                  <span>Daire 12</span>
                  <span>4 saat önce</span>
                  <span class="text-blue-600">Teknik Sorun</span>
                </div>
              </div>
              <div class="flex space-x-2 ml-4">
                <button class="bg-primary-50 hover:bg-primary-100 text-primary-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border border-primary-200 hover:border-primary-300">
                  Yanıtla
                </button>
                <button class="bg-success-50 hover:bg-success-100 text-success-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border border-success-200 hover:border-success-300">
                  Çözüldü
                </button>
                <button class="bg-danger-50 hover:bg-danger-100 text-danger-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border border-danger-200 hover:border-danger-300">
                  Reddet
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Noise Complaint -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="bg-yellow-50 px-6 py-4 border-b border-yellow-200">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                </svg>
                <span class="text-sm font-medium text-yellow-800">Gürültü</span>
              </div>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                Bekliyor
              </span>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Gürültü Şikayeti - Daire 8</h3>
                <p class="text-gray-600 mb-4">Üst kattan sürekli gürültü geliyor. Gece saatlerinde de devam ediyor.</p>
                <div class="flex items-center space-x-6 text-sm text-gray-500">
                  <span>Mehmet Kaya</span>
                  <span>Daire 8</span>
                  <span>6 saat önce</span>
                  <span class="text-yellow-600">Gürültü</span>
                </div>
              </div>
              <div class="flex space-x-2 ml-4">
                <button class="bg-primary-50 hover:bg-primary-100 text-primary-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border border-primary-200 hover:border-primary-300">
                  Yanıtla
                </button>
                <button class="bg-success-50 hover:bg-success-100 text-success-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border border-success-200 hover:border-success-300">
                  Çözüldü
                </button>
                <button class="bg-danger-50 hover:bg-danger-100 text-danger-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border border-danger-200 hover:border-danger-300">
                  Reddet
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Resolved Complaint -->
        <div class="bg-white rounded-xl shadow-sm border border-green-200 overflow-hidden">
          <div class="bg-green-50 px-6 py-4 border-b border-green-200">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span class="text-sm font-medium text-green-800">Çözüldü</span>
              </div>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Çözüldü
              </span>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Çöp Konteyneri - Daire 15</h3>
                <p class="text-gray-600 mb-4">Çöp konteyneri dolmuş, boşaltılması gerekiyor.</p>
                <div class="flex items-center space-x-6 text-sm text-gray-500">
                  <span>Ayşe Özkan</span>
                  <span>Daire 15</span>
                  <span>1 gün önce</span>
                  <span class="text-green-600">Temizlik</span>
                </div>
                <div class="mt-3 p-3 bg-green-50 rounded-lg">
                  <p class="text-sm text-green-800"><strong>Yanıt:</strong> Çöp konteyneri boşaltıldı. Teşekkürler.</p>
                </div>
              </div>
              <div class="flex space-x-2 ml-4">
                <button class="text-primary-600 hover:text-primary-900 text-sm">Detay</button>
                <button class="text-gray-600 hover:text-gray-900 text-sm">Arşivle</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Security Complaint -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="bg-purple-50 px-6 py-4 border-b border-purple-200">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <span class="text-sm font-medium text-purple-800">Güvenlik</span>
              </div>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                İnceleniyor
              </span>
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Şüpheli Kişi - Site Girişi</h3>
                <p class="text-gray-600 mb-4">Site girişinde şüpheli bir kişi görüldü. Güvenlik kontrolü yapılması gerekiyor.</p>
                <div class="flex items-center space-x-6 text-sm text-gray-500">
                  <span>Ali Veli</span>
                  <span>Daire 3</span>
                  <span>8 saat önce</span>
                  <span class="text-purple-600">Güvenlik</span>
                </div>
              </div>
              <div class="flex space-x-2 ml-4">
                <button class="bg-primary-50 hover:bg-primary-100 text-primary-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border border-primary-200 hover:border-primary-300">
                  Yanıtla
                </button>
                <button class="bg-success-50 hover:bg-success-100 text-success-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border border-success-200 hover:border-success-300">
                  Çözüldü
                </button>
                <button class="bg-danger-50 hover:bg-danger-100 text-danger-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border border-danger-200 hover:border-danger-300">
                  Reddet
                </button>
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
</script> 