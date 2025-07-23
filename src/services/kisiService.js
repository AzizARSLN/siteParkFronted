import { apiRequest } from './authService.js'

// Kisi Service
export const kisiService = {
  // Tüm kişileri getir
  async getKisiler() {
    try {
      return await apiRequest('/Kisi/GetKisiler')
    } catch (error) {
      console.error('Kişiler getirilirken hata:', error)
      throw error
    }
  },

  // ID'ye göre kişi getir
  async getKisi(id) {
    try {
      return await apiRequest(`/Kisi/${id}`)
    } catch (error) {
      console.error('Kişi getirilirken hata:', error)
      throw error
    }
  },

  // Kişi tipine göre kişileri getir
  async getKisilerByTip(tip) {
    try {
      return await apiRequest(`/Kisi/tip/${tip}`)
    } catch (error) {
      console.error('Kişiler tipine göre getirilirken hata:', error)
      throw error
    }
  },

  // Binaya göre kişileri getir
  async getKisilerByBina(binaId) {
    try {
      return await apiRequest(`/Kisi/bina/${binaId}`)
    } catch (error) {
      console.error('Kişiler binaya göre getirilirken hata:', error)
      throw error
    }
  },

  // Daireye göre kişileri getir
  async getKisilerByDaire(daireId) {
    try {
      return await apiRequest(`/Kisi/daire/${daireId}`)
    } catch (error) {
      console.error('Kişiler daireye göre getirilirken hata:', error)
      throw error
    }
  },

  // Yeni kişi ekle
  async createKisi(kisi) {
    try {
      return await apiRequest('/Kisi', {
        method: 'POST',
        body: JSON.stringify(kisi)
      })
    } catch (error) {
      console.error('Kişi eklenirken hata:', error)
      throw error
    }
  },

  // Kişi güncelle
  async updateKisi(id, kisi) {
    try {
      return await apiRequest(`/Kisi/${id}`, {
        method: 'PUT',
        body: JSON.stringify(kisi)
      })
    } catch (error) {
      console.error('Kişi güncellenirken hata:', error)
      throw error
    }
  },

  // Kişi sil
  async deleteKisi(id) {
    try {
      return await apiRequest(`/Kisi/${id}`, {
        method: 'DELETE'
      })
    } catch (error) {
      console.error('Kişi silinirken hata:', error)
      throw error
    }
  }
} 