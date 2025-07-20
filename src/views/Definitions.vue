<template>
  <AdminLayout>
    <div>
      <div class="mb-8 flex justify-between items-center">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">Tanımlar</h2>
          <p class="text-gray-600">Site tanımları ve yapılandırma ayarları</p>
        </div>
      </div>

      <!-- Tabs -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
        <div class="border-b border-gray-200">
          <nav class="flex space-x-8 px-6" aria-label="Tabs">
            <button 
              @click="activeTab = 'apartments'"
              :class="[
                activeTab === 'apartments' 
                  ? 'border-primary-500 text-primary-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
              ]"
            >
              Daire Tanımları
            </button>
            <button 
              @click="activeTab = 'floors'"
              :class="[
                activeTab === 'floors' 
                  ? 'border-primary-500 text-primary-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
              ]"
            >
              Kat Tanımları
            </button>
            <button 
              @click="activeTab = 'people'"
              :class="[
                activeTab === 'people' 
                  ? 'border-primary-500 text-primary-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
              ]"
            >
              Kişi Tanımları
            </button>
          </nav>
        </div>

        <div class="p-6">
          <!-- Daire Tanımları -->
          <div v-if="activeTab === 'apartments'" class="space-y-6">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-900">Daire Tanımları</h3>
              <button class="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                Yeni Daire Ekle
              </button>
            </div>

            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Daire No</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kat</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blok</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Oda Sayısı</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">m²</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durum</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlemler</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="apartment in apartments" :key="apartment.id" class="hover:bg-gray-50">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-gray-900">{{ apartment.number }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ apartment.floor }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ apartment.block }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ apartment.rooms }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ apartment.area }}m²</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span :class="[
                        apartment.status === 'Dolu' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800',
                        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
                      ]">
                        {{ apartment.status }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div class="flex space-x-2">
                        <button class="bg-primary-50 hover:bg-primary-100 text-primary-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border border-primary-200 hover:border-primary-300">
                          Düzenle
                        </button>
                        <button class="bg-danger-50 hover:bg-danger-100 text-danger-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border border-danger-200 hover:border-danger-300">
                          Sil
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Kat Tanımları -->
          <div v-if="activeTab === 'floors'" class="space-y-6">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-900">Kat Tanımları</h3>
              <button class="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                Yeni Kat Ekle
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="floor in floors" :key="floor.id" class="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div class="flex items-center justify-between mb-4">
                  <h4 class="text-lg font-semibold text-gray-900">{{ floor.name }}</h4>
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {{ floor.daireCount }} Daire
                  </span>
                </div>
                <div class="space-y-2 text-sm text-gray-600">
                  <div class="flex justify-between">
                    <span>Blok:</span>
                    <span class="font-medium">{{ floor.block }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Kat No:</span>
                    <span class="font-medium">{{ floor.floorNumber }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Asansör:</span>
                    <span class="font-medium">{{ floor.hasElevator ? 'Var' : 'Yok' }}</span>
                  </div>
                </div>
                <div class="mt-4 flex space-x-2">
                  <button class="text-primary-600 hover:text-primary-900 text-sm">Düzenle</button>
                  <button class="text-red-600 hover:text-red-900 text-sm">Sil</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Kişi Tanımları -->
          <div v-if="activeTab === 'people'" class="space-y-6">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-900">Kişi Tanımları</h3>
              <button class="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                Yeni Kişi Ekle
              </button>
            </div>

            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ad Soyad</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TC Kimlik</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefon</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">E-posta</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Daire</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlemler</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="person in people" :key="person.id" class="hover:bg-gray-50">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <div class="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                            <span class="text-sm font-medium text-primary-600">{{ person.name.charAt(0) }}</span>
                          </div>
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">{{ person.name }}</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ person.tc }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ person.phone }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ person.email }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ person.apartment }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span :class="[
                        person.role === 'Sakin' ? 'bg-green-100 text-green-800' : 
                        person.role === 'Kiracı' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800',
                        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
                      ]">
                        {{ person.role }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div class="flex space-x-2">
                        <button class="text-primary-600 hover:text-primary-900">Düzenle</button>
                        <button class="text-red-600 hover:text-red-900">Sil</button>
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
  </AdminLayout>
</template>

<script setup>
import { ref } from 'vue'
import AdminLayout from '../components/AdminLayout.vue'

const activeTab = ref('apartments')

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
</script> 