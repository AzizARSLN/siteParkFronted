<template>
  <div class="home-container">
    <div class="home-content">
      <h1>SitePark'a Hoş Geldiniz</h1>
      <p>Modern ve kullanıcı dostu web uygulamanız</p>
      
      <div class="action-buttons">
        <a-button 
          type="primary" 
          size="large" 
          @click="goToLogin"
          class="login-btn"
        >
          Giriş Yap
        </a-button>
        
        <a-button 
          size="large" 
          @click="goToRegister"
          class="register-btn"
        >
          Kayıt Ol
        </a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToLogin = () => {
  router.push('/login')
}

const goToRegister = () => {
  // Kayıt sayfası henüz oluşturulmadı
  alert('Kayıt sayfası yakında eklenecek!')
}
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  text-align: center;
  padding: 20px;
}

.home-content {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 60px 40px;
  max-width: 500px;
  width: 100%;
}

.home-content h1 {
  color: #1a1a1a;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
}

.home-content p {
  color: #666;
  font-size: 18px;
  margin-bottom: 40px;
}

.action-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.login-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  height: 48px;
  padding: 0 32px;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.register-btn {
  height: 48px;
  padding: 0 32px;
  font-weight: 600;
  border-radius: 8px;
  border: 2px solid #667eea;
  color: #667eea;
  background: white;
  transition: all 0.3s ease;
}

.register-btn:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 480px) {
  .home-content {
    padding: 40px 24px;
  }
  
  .home-content h1 {
    font-size: 28px;
  }
  
  .action-buttons {
    flex-direction: column;
  }
}
</style> 