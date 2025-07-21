<template>
  <AdminLayout>
    <div class="h-full bg-gradient-to-br from-gray-50 to-gray-100">
      <!-- Header Section --> 
      <!-- Main Content -->
      <div class="h-[calc(100vh-200px)] overflow-y-auto">
        <div class="p-6">
          <!-- Enhanced Tabs -->
          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden h-full">
            <div class="bg-gradient-to-r from-primary-50 to-blue-50 border-b border-gray-200">
              <nav class="flex space-x-8 px-8" aria-label="Tabs">
                <button 
                  @click="activeTab = 'apartments'"
                  :class="[
                    activeTab === 'apartments' 
                      ? 'border-primary-500 text-primary-700 bg-white shadow-sm' 
                      : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-white/50',
                    'whitespace-nowrap py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg'
                  ]"
                >
                  <div class="flex items-center space-x-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                    <span>Daire Tanımları</span>
                  </div>
                </button>
                <button 
                  @click="activeTab = 'floors'"
                  :class="[
                    activeTab === 'floors' 
                      ? 'border-primary-500 text-primary-700 bg-white shadow-sm' 
                      : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-white/50',
                    'whitespace-nowrap py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg'
                  ]"
                >
                  <div class="flex items-center space-x-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5v14"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 5v14"/>
                    </svg>
                    <span>Kat Tanımları</span>
                  </div>
                </button>
                <button 
                  @click="activeTab = 'people'"
                  :class="[
                    activeTab === 'people' 
                      ? 'border-primary-500 text-primary-700 bg-white shadow-sm' 
                      : 'border-transparent text-gray-600 hover:text-gray-800 hover:bg-white/50',
                    'whitespace-nowrap py-4 px-6 border-b-2 font-semibold text-sm transition-all duration-200 rounded-t-lg'
                  ]"
                >
                  <div class="flex items-center space-x-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                    </svg>
                    <span>Kişi Tanımları</span>
                  </div>
                </button>
              </nav>
            </div>

            <div class="p-8 h-[calc(100%-80px)] overflow-y-auto">
              <!-- Daire Tanımları -->
              <div v-if="activeTab === 'apartments'" class="space-y-6">
                <div class="flex justify-between items-center">
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900">Daire Tanımları</h3>
                    <p class="text-gray-600 mt-1">Site içerisindeki tüm dairelerin yönetimi</p>
                  </div>
                  <button class="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                    Yeni Daire Ekle
                  </button>
                </div>

                <!-- Search Bar -->
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-1 relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                      </div>
                      <input 
                        v-model="apartmentSearch" 
                        type="text" 
                        placeholder="Daire numarası, blok veya durum ara..." 
                        class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                      >
                    </div>
                    <button @click="apartmentSearch = ''" class="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200">
                      Temizle
                    </button>
                  </div>
                </div>

                <!-- Stats Cards -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="text-blue-100 text-sm font-medium">Toplam Daire</p>
                        <p class="text-3xl font-bold">{{ filteredApartments.length }}</p>
                      </div>
                      <div class="bg-blue-400/30 rounded-lg p-3">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="text-green-100 text-sm font-medium">Dolu Daire</p>
                        <p class="text-3xl font-bold">{{ filteredApartments.filter(a => a.status === 'Dolu').length }}</p>
                      </div>
                      <div class="bg-green-400/30 rounded-lg p-3">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-lg">
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="text-orange-100 text-sm font-medium">Boş Daire</p>
                        <p class="text-3xl font-bold">{{ filteredApartments.filter(a => a.status === 'Boş').length }}</p>
                      </div>
                      <div class="bg-orange-400/30 rounded-lg p-3">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="text-purple-100 text-sm font-medium">Ortalama m²</p>
                        <p class="text-3xl font-bold">{{ Math.round(filteredApartments.reduce((sum, a) => sum + a.area, 0) / filteredApartments.length) || 0 }}</p>
                      </div>
                      <div class="bg-purple-400/30 rounded-lg p-3">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Enhanced Table -->
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead class="bg-gradient-to-r from-gray-50 to-gray-100">
                        <tr>
                          <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Daire No</th>
                          <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Kat</th>
                          <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Blok</th>
                          <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Oda Sayısı</th>
                          <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">m²</th>
                          <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Durum</th>
                          <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">İşlemler</th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-100">
                        <tr v-for="apartment in filteredApartments" :key="apartment.id" class="hover:bg-gray-50 transition-colors duration-200">
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="flex-shrink-0 h-10 w-10">
                                <div class="h-10 w-10 rounded-lg bg-primary-100 flex items-center justify-center">
                                  <span class="text-sm font-bold text-primary-700">{{ apartment.number.split('-')[1] }}</span>
                                </div>
                              </div>
                              <div class="ml-4">
                                <div class="text-sm font-semibold text-gray-900">{{ apartment.number }}</div>
                                <div class="text-sm text-gray-500">Blok {{ apartment.block }}</div>
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm font-medium text-gray-900">{{ apartment.floor }}. Kat</div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {{ apartment.block }}
                            </span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">{{ apartment.rooms }} Oda</div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm font-medium text-gray-900">{{ apartment.area }}m²</div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <span :class="[
                              apartment.status === 'Dolu' ? 'bg-green-100 text-green-800 border-green-200' : 'bg-gray-100 text-gray-800 border-gray-200',
                              'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border'
                            ]">
                              <span :class="[
                                apartment.status === 'Dolu' ? 'bg-green-400' : 'bg-gray-400',
                                'w-2 h-2 rounded-full mr-2'
                              ]"></span>
                              {{ apartment.status }}
                            </span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div class="flex space-x-2">
                              <button class="bg-primary-50 hover:bg-primary-100 text-primary-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-primary-200 hover:border-primary-300 hover:shadow-md">
                                <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                                </svg>
                                Düzenle
                              </button>
                              <button class="bg-red-50 hover:bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-red-200 hover:border-red-300 hover:shadow-md">
                                <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                </svg>
                                Sil
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Kat Tanımları -->
              <div v-if="activeTab === 'floors'" class="space-y-6">
                <div class="flex justify-between items-center">
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900">Kat Tanımları</h3>
                    <p class="text-gray-600 mt-1">Site bloklarının kat yapılandırması</p>
                  </div>
                  <button class="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                    Yeni Kat Ekle
                  </button>
                </div>

                <!-- Enhanced Floor Cards - Smaller Size -->
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  <div v-for="floor in floors" :key="floor.id" class="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                    <div class="bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
                      <div class="flex items-center justify-between mb-3">
                        <h4 class="text-lg font-bold">{{ floor.name }}</h4>
                        <div class="bg-white/20 rounded-lg p-1.5">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"/>
                          </svg>
                        </div>
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-blue-100 text-xs">Blok {{ floor.block }}</span>
                        <span class="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                          {{ floor.daireCount }} Daire
                        </span>
                      </div>
                    </div>
                    <div class="p-4">
                      <div class="space-y-2">
                        <div class="flex items-center justify-between">
                          <span class="text-gray-600 text-xs">Kat No:</span>
                          <span class="font-semibold text-gray-900 text-sm">{{ floor.floorNumber }}</span>
                        </div>
                        <div class="flex items-center justify-between">
                          <span class="text-gray-600 text-xs">Asansör:</span>
                          <span :class="[
                            floor.hasElevator ? 'text-green-600' : 'text-red-600',
                            'font-semibold text-sm'
                          ]">
                            {{ floor.hasElevator ? 'Var' : 'Yok' }}
                          </span>
                        </div>
                        <div class="flex items-center justify-between">
                          <span class="text-gray-600 text-xs">Durum:</span>
                          <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Aktif
                          </span>
                        </div>
                      </div>
                      <div class="mt-4 flex space-x-1">
                        <button class="flex-1 bg-primary-50 hover:bg-primary-100 text-primary-700 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border border-primary-200 hover:border-primary-300">
                          <svg class="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                          </svg>
                          Düzenle
                        </button>
                        <button class="flex-1 bg-red-50 hover:bg-red-100 text-red-700 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border border-red-200 hover:border-red-300">
                          <svg class="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                          </svg>
                          Sil
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Kişi Tanımları -->
              <div v-if="activeTab === 'people'" class="space-y-6">
                <div class="flex justify-between items-center">
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900">Kişi Tanımları</h3>
                    <p class="text-gray-600 mt-1">Site sakinleri ve kiracıların yönetimi</p>
                  </div>
                  <button class="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                    Yeni Kişi Ekle
                  </button>
                </div>

                <!-- Search Bar for People -->
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-1 relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                      </div>
                      <input 
                        v-model="peopleSearch" 
                        type="text" 
                        placeholder="İsim, TC, telefon veya daire ara..." 
                        class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
                      >
                    </div>
                    <button @click="peopleSearch = ''" class="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200">
                      Temizle
                    </button>
                  </div>
                </div>

                <!-- Stats Cards for People -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div class="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="text-green-100 text-sm font-medium">Toplam Kişi</p>
                        <p class="text-3xl font-bold">{{ filteredPeople.length }}</p>
                      </div>
                      <div class="bg-green-400/30 rounded-lg p-3">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="text-blue-100 text-sm font-medium">Sakin</p>
                        <p class="text-3xl font-bold">{{ filteredPeople.filter(p => p.role === 'Sakin').length }}</p>
                      </div>
                      <div class="bg-blue-400/30 rounded-lg p-3">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="text-purple-100 text-sm font-medium">Kiracı</p>
                        <p class="text-3xl font-bold">{{ filteredPeople.filter(p => p.role === 'Kiracı').length }}</p>
                      </div>
                      <div class="bg-purple-400/30 rounded-lg p-3">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Enhanced People Table -->
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead class="bg-gradient-to-r from-gray-50 to-gray-100">
                        <tr>
                          <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Kişi Bilgileri</th>
                          <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">İletişim</th>
                          <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Daire</th>
                          <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Rol</th>
                          <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">İşlemler</th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-100">
                        <tr v-for="person in filteredPeople" :key="person.id" class="hover:bg-gray-50 transition-colors duration-200">
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="flex-shrink-0 h-12 w-12">
                                <div class="h-12 w-12 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
                                  <span class="text-lg font-bold text-white">{{ person.name.charAt(0) }}</span>
                                </div>
                              </div>
                              <div class="ml-4">
                                <div class="text-sm font-semibold text-gray-900">{{ person.name }}</div>
                                <div class="text-sm text-gray-500">TC: {{ person.tc }}</div>
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="space-y-1">
                              <div class="text-sm text-gray-900">{{ person.phone }}</div>
                              <div class="text-sm text-gray-500">{{ person.email }}</div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                              <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                              </svg>
                              {{ person.apartment }}
                            </span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <span :class="[
                              person.role === 'Sakin' ? 'bg-green-100 text-green-800 border-green-200' : 
                              person.role === 'Kiracı' ? 'bg-blue-100 text-blue-800 border-blue-200' : 'bg-gray-100 text-gray-800 border-gray-200',
                              'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border'
                            ]">
                              <span :class="[
                                person.role === 'Sakin' ? 'bg-green-400' : 
                                person.role === 'Kiracı' ? 'bg-blue-400' : 'bg-gray-400',
                                'w-2 h-2 rounded-full mr-2'
                              ]"></span>
                              {{ person.role }}
                            </span>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div class="flex space-x-2">
                              <button class="bg-primary-50 hover:bg-primary-100 text-primary-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-primary-200 hover:border-primary-300 hover:shadow-md">
                                <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                                </svg>
                                Düzenle
                              </button>
                              <button class="bg-red-50 hover:bg-red-100 text-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-red-200 hover:border-red-300 hover:shadow-md">
                                <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                </svg>
                                Sil
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import AdminLayout from '../components/AdminLayout.vue'

const activeTab = ref('apartments')
const apartmentSearch = ref('')
const peopleSearch = ref('')

// Demo data
const apartments = ref([
  { id: 1, number: 'A-101', floor: '1', block: 'A', rooms: 2, area: 85, status: 'Dolu' },
  { id: 2, number: 'A-102', floor: '1', block: 'A', rooms: 3, area: 110, status: 'Dolu' },
  { id: 3, number: 'A-201', floor: '2', block: 'A', rooms: 2, area: 85, status: 'Boş' },
  { id: 4, number: 'A-202', floor: '2', block: 'A', rooms: 3, area: 110, status: 'Dolu' },
  { id: 5, number: 'B-101', floor: '1', block: 'B', rooms: 2, area: 90, status: 'Dolu' },
  { id: 6, number: 'B-102', floor: '1', block: 'B', rooms: 3, area: 120, status: 'Dolu' },
])

const floors = ref([
  { id: 1, name: 'Zemin Kat', floorNumber: 0, block: 'A', daireCount: 2, hasElevator: true },
  { id: 2, name: '1. Kat', floorNumber: 1, block: 'A', daireCount: 2, hasElevator: true },
  { id: 3, name: '2. Kat', floorNumber: 2, block: 'A', daireCount: 2, hasElevator: true },
  { id: 4, name: '3. Kat', floorNumber: 3, block: 'A', daireCount: 2, hasElevator: true },
  { id: 5, name: 'Zemin Kat', floorNumber: 0, block: 'B', daireCount: 2, hasElevator: true },
  { id: 6, name: '1. Kat', floorNumber: 1, block: 'B', daireCount: 2, hasElevator: true },
])

const people = ref([
  { id: 1, name: 'Ahmet Yılmaz', tc: '12345678901', phone: '0532 123 45 67', email: 'ahmet@email.com', apartment: 'A-101', role: 'Sakin' },
  { id: 2, name: 'Fatma Demir', tc: '12345678902', phone: '0533 234 56 78', email: 'fatma@email.com', apartment: 'A-102', role: 'Sakin' },
  { id: 3, name: 'Mehmet Kaya', tc: '12345678903', phone: '0534 345 67 89', email: 'mehmet@email.com', apartment: 'A-202', role: 'Kiracı' },
  { id: 4, name: 'Ayşe Özkan', tc: '12345678904', phone: '0535 456 78 90', email: 'ayse@email.com', apartment: 'B-101', role: 'Sakin' },
  { id: 5, name: 'Ali Veli', tc: '12345678905', phone: '0536 567 89 01', email: 'ali@email.com', apartment: 'B-102', role: 'Sakin' },
])

const filteredApartments = computed(() => {
  return apartments.value.filter(apartment => {
    const searchTerm = apartmentSearch.value.toLowerCase()
    return (
      apartment.number.toLowerCase().includes(searchTerm) ||
      apartment.block.toLowerCase().includes(searchTerm) ||
      apartment.status.toLowerCase().includes(searchTerm)
    )
  })
})

const filteredPeople = computed(() => {
  return people.value.filter(person => {
    const searchTerm = peopleSearch.value.toLowerCase()
    return (
      person.name.toLowerCase().includes(searchTerm) ||
      person.tc.toLowerCase().includes(searchTerm) ||
      person.phone.toLowerCase().includes(searchTerm) ||
      person.apartment.toLowerCase().includes(searchTerm)
    )
  })
})
</script> 