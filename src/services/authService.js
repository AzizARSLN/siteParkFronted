// API base URL - Backend sunucunuzun URL'sini buraya yazın
const API_BASE_URL = 'http://localhost:5105/api' // Backend port'unuza göre değiştirin

// Auth Service
export const authService = {
  // Login işlemi
  async login(email, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/User/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({
          email,
          password
        })
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Bilinmeyen hata' }))
        throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      
      // Token'ı localStorage'a kaydet
      if (data.token) {
        localStorage.setItem('authToken', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
      }

      return data
    } catch (error) {
      // Network hatası kontrolü
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error('Backend sunucusuna bağlanılamıyor. Lütfen backend\'in çalıştığından emin olun.')
      }
      
      throw error
    }
  },

  // Logout işlemi
  async logout() {
    try {
      const token = localStorage.getItem('authToken')
      
      if (token) {
        await fetch(`${API_BASE_URL}/auth/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          mode: 'cors',
          credentials: 'include'
        })
      }
    } catch (error) {
      // Hata durumunda sessizce devam et
    } finally {
      // Local storage'ı temizle
      localStorage.removeItem('authToken')
      localStorage.removeItem('user')
    }
  },

  // Kullanıcı bilgilerini getir
  async getCurrentUser() {
    try {
      const token = localStorage.getItem('authToken')
      
      if (!token) {
        return null
      }

      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        credentials: 'include'
      })

      if (!response.ok) {
        throw new Error('Kullanıcı bilgileri alınamadı')
      }

      const data = await response.json()
      return data.user
    } catch (error) {
      // Token geçersizse temizle
      localStorage.removeItem('authToken')
      localStorage.removeItem('user')
      return null
    }
  },

  // Token'ın geçerli olup olmadığını kontrol et
  isAuthenticated() {
    const token = localStorage.getItem('authToken')
    return !!token
  },

  // Token'ı getir
  getToken() {
    return localStorage.getItem('authToken')
  },

  // Kullanıcı bilgilerini getir (local storage'dan)
  getUser() {
    const userStr = localStorage.getItem('user')
    return userStr ? JSON.parse(userStr) : null
  }
}

// API istekleri için interceptor
export const apiRequest = async (url, options = {}) => {
  const token = authService.getToken()
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options.headers
  }

  const config = {
    ...options,
    headers: defaultHeaders,
    mode: 'cors',
    credentials: 'include'
  }

  try {
    const response = await fetch(`${API_BASE_URL}${url}`, config)
    
    if (!response.ok) {
      if (response.status === 401) {
        // Token geçersiz, logout yap
        authService.logout()
        window.location.href = '/login'
        return
      }
      
      const errorData = await response.json().catch(() => ({ message: 'API isteği başarısız' }))
      throw new Error(errorData.message || 'API isteği başarısız')
    }

    return await response.json()
  } catch (error) {
    throw error
  }
} 