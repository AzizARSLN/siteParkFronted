<template>
  <AdminLayout>
    <div>
      <div class="mb-8 flex justify-between items-center">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">Raporlar</h2>
          <p class="text-gray-600">Site yönetimi raporları ve analizler</p>
        </div>
        <div class="flex space-x-3">
          <button class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            PDF İndir
          </button>
          <button class="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            Grafik Görünümü
          </button>
        </div>
      </div>

      <!-- Report Filters -->
      <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mb-8">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1">
            <label class="block text-sm font-medium text-gray-700 mb-2">Rapor Türü</label>
            <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option>Aylık Genel Rapor</option>
              <option>Aidat Raporu</option>
              <option>Şikayet Analizi</option>
              <option>Bakım Maliyeti Raporu</option>
              <option>Sakin Memnuniyeti</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Dönem</label>
            <select class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option>Ocak 2024</option>
              <option>Aralık 2023</option>
              <option>Kasım 2023</option>
              <option>Son 3 Ay</option>
              <option>Son 6 Ay</option>
            </select>
          </div>
          <div class="flex items-end">
            <button class="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              Rapor Oluştur
            </button>
          </div>
        </div>
      </div>

      <!-- Quick Stats -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div class="flex items-center">
            <div class="p-3 bg-blue-100 rounded-lg">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Aylık Gelir</p>
              <p class="text-2xl font-bold text-gray-900">₺12,400</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div class="flex items-center">
            <div class="p-3 bg-red-100 rounded-lg">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Aylık Gider</p>
              <p class="text-2xl font-bold text-gray-900">₺8,200</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div class="flex items-center">
            <div class="p-3 bg-green-100 rounded-lg">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Net Kar</p>
              <p class="text-2xl font-bold text-gray-900">₺4,200</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div class="flex items-center">
            <div class="p-3 bg-purple-100 rounded-lg">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Memnuniyet</p>
              <p class="text-2xl font-bold text-gray-900">85%</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Report Sections -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Aidat Ödeme Analizi -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Aidat Ödeme Analizi</h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Ödenen</span>
              <div class="flex items-center">
                <div class="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div class="bg-green-500 h-2 rounded-full" style="width: 75%"></div>
                </div>
                <span class="text-sm font-medium text-gray-900">75%</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Bekleyen</span>
              <div class="flex items-center">
                <div class="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div class="bg-yellow-500 h-2 rounded-full" style="width: 20%"></div>
                </div>
                <span class="text-sm font-medium text-gray-900">20%</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Gecikmiş</span>
              <div class="flex items-center">
                <div class="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div class="bg-red-500 h-2 rounded-full" style="width: 5%"></div>
                </div>
                <span class="text-sm font-medium text-gray-900">5%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Şikayet Kategorileri -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Şikayet Kategorileri</h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Teknik Sorunlar</span>
              <div class="flex items-center">
                <div class="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div class="bg-blue-500 h-2 rounded-full" style="width: 40%"></div>
                </div>
                <span class="text-sm font-medium text-gray-900">40%</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Gürültü</span>
              <div class="flex items-center">
                <div class="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div class="bg-yellow-500 h-2 rounded-full" style="width: 25%"></div>
                </div>
                <span class="text-sm font-medium text-gray-900">25%</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Temizlik</span>
              <div class="flex items-center">
                <div class="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div class="bg-green-500 h-2 rounded-full" style="width: 20%"></div>
                </div>
                <span class="text-sm font-medium text-gray-900">20%</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Güvenlik</span>
              <div class="flex items-center">
                <div class="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div class="bg-purple-500 h-2 rounded-full" style="width: 15%"></div>
                </div>
                <span class="text-sm font-medium text-gray-900">15%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bakım Maliyetleri -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Bakım Maliyetleri</h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Teknik Servis</span>
              <span class="text-sm font-medium text-gray-900">₺3,200</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Bahçe Bakımı</span>
              <span class="text-sm font-medium text-gray-900">₺1,800</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Temizlik</span>
              <span class="text-sm font-medium text-gray-900">₺2,100</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Güvenlik</span>
              <span class="text-sm font-medium text-gray-900">₺1,100</span>
            </div>
            <div class="border-t pt-2">
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-900">Toplam</span>
                <span class="text-sm font-bold text-gray-900">₺8,200</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Sakin Memnuniyeti -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Sakin Memnuniyeti</h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Çok Memnun</span>
              <div class="flex items-center">
                <div class="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div class="bg-green-500 h-2 rounded-full" style="width: 45%"></div>
                </div>
                <span class="text-sm font-medium text-gray-900">45%</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Memnun</span>
              <div class="flex items-center">
                <div class="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div class="bg-blue-500 h-2 rounded-full" style="width: 40%"></div>
                </div>
                <span class="text-sm font-medium text-gray-900">40%</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Orta</span>
              <div class="flex items-center">
                <div class="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div class="bg-yellow-500 h-2 rounded-full" style="width: 10%"></div>
                </div>
                <span class="text-sm font-medium text-gray-900">10%</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600">Memnun Değil</span>
              <div class="flex items-center">
                <div class="w-32 bg-gray-200 rounded-full h-2 mr-3">
                  <div class="bg-red-500 h-2 rounded-full" style="width: 5%"></div>
                </div>
                <span class="text-sm font-medium text-gray-900">5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Reports -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 mt-8">
        <div class="px-6 py-4 border-b border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900">Son Raporlar</h3>
        </div>
        <div class="divide-y divide-gray-200">
          <div class="px-6 py-4 hover:bg-gray-50">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-gray-900">Ocak 2024 Aylık Raporu</p>
                <p class="text-sm text-gray-500">Genel site yönetimi raporu</p>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-500">15 Ocak 2024</span>
                <button class="text-primary-600 hover:text-primary-900 text-sm">İndir</button>
              </div>
            </div>
          </div>
          <div class="px-6 py-4 hover:bg-gray-50">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-gray-900">Aralık 2023 Aidat Raporu</p>
                <p class="text-sm text-gray-500">Aidat ödeme analizi</p>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-500">1 Ocak 2024</span>
                <button class="text-primary-600 hover:text-primary-900 text-sm">İndir</button>
              </div>
            </div>
          </div>
          <div class="px-6 py-4 hover:bg-gray-50">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-gray-900">Kasım 2023 Şikayet Analizi</p>
                <p class="text-sm text-gray-500">Şikayet ve istek analizi</p>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-500">1 Aralık 2023</span>
                <button class="text-primary-600 hover:text-primary-900 text-sm">İndir</button>
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