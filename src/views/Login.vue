<template>
  <div class="login-container">
    <div class="login-background">
      <div class="login-overlay"></div>
    </div>
    
    <div class="login-content">
      <div class="login-card">
        <div class="login-header">
          <div class="logo-section">
            <div class="logo-circle">
              <span class="logo-text">DP</span>
            </div>
            <h1>Doruk Park Sitesi</h1>
          </div>
          <p class="welcome-text">Hesabınıza giriş yapın</p>
        </div>
        
        <a-form
          :model="formState"
          name="login"
          @finish="onFinish"
          class="login-form"
        >
          <a-form-item
            name="email"
            :rules="[
              { required: true, message: 'Lütfen e-posta adresinizi girin!' },
              { type: 'email', message: 'Geçerli bir e-posta adresi girin!' }
            ]"
          >
            <a-input
              v-model:value="formState.email"
              size="large"
              placeholder="E-posta adresiniz"
              class="custom-input"
            >
              <template #prefix>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </template>
            </a-input>
          </a-form-item>

          <a-form-item
            name="password"
            :rules="[
              { required: true, message: 'Lütfen şifrenizi girin!' }
            ]"
          >
            <a-input-password
              v-model:value="formState.password"
              size="large"
              placeholder="Şifreniz"
              class="custom-input"
            >
              <template #prefix>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/>
                </svg>
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item>
            <div class="form-options">
              <a-checkbox v-model:checked="formState.remember" class="custom-checkbox">
                Beni hatırla
              </a-checkbox>
              <a href="#" class="forgot-password">Şifremi unuttum</a>
            </div>
          </a-form-item>

          <a-form-item>
            <a-button
              type="primary"
              html-type="submit"
              size="large"
              :loading="loading"
              class="login-button"
            >
              {{ loading ? 'Giriş yapılıyor...' : 'Giriş Yap' }}
            </a-button>
          </a-form-item>
        </a-form>


      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loading = ref(false)

const formState = reactive({
  email: '',
  password: '',
  remember: false
})

const onFinish = async (values) => {
  loading.value = true
  
  try {
    // Demo giriş kontrolü
    if (values.email === 'admin@admin.com' && values.password === 'admin') {
      // Simüle edilmiş API çağrısı
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      message.success('Başarıyla giriş yapıldı! Hoş geldiniz Admin!')
      
      // Dashboard'a yönlendir
      router.push('/dashboard')
    } else {
      message.error('E-posta veya şifre hatalı!')
    }
    
  } catch (error) {
    message.error('Giriş başarısız. Lütfen bilgilerinizi kontrol edin.')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.login-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.login-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.login-content {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 550px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.login-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  padding: 60px 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: slideUp 0.8s ease-out;
  width: 100%;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.login-header {
  text-align: center;
  margin-bottom: 40px;
}

.logo-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
}

.logo-circle {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.logo-text {
  color: white;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1px;
}

.login-header h1 {
  color: #1a1a1a;
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.welcome-text {
  color: #666;
  font-size: 16px;
  margin: 0;
  font-weight: 400;
}

.login-form {
  width: 100%;
}

.login-form .ant-form-item {
  margin-bottom: 24px;
}

.custom-input {
  border-radius: 12px;
  border: 2px solid #e8e8e8;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  height: 52px;
  font-size: 16px;
}

.custom-input:focus,
.custom-input:hover {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  background: rgba(255, 255, 255, 0.95);
}

.custom-input .ant-input-prefix {
  color: #667eea;
  margin-right: 12px;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.custom-checkbox {
  color: #666;
  font-weight: 500;
}

.forgot-password {
  color: #667eea;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.forgot-password:hover {
  color: #5a6fd8;
  text-decoration: underline;
}

.login-button {
  width: 100%;
  height: 56px;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  font-weight: 600;
  font-size: 16px;
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.login-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
  background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
}

.login-button:active {
  transform: translateY(0);
}



/* Responsive tasarım */
@media (max-width: 480px) {
  .login-content {
    padding: 10px;
  }
  
  .login-card {
    padding: 32px 24px;
  }
  
  .login-header h1 {
    font-size: 28px;
  }
  
  .logo-circle {
    width: 50px;
    height: 50px;
  }
  
  .logo-text {
    font-size: 20px;
  }
  
  .form-options {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
  
  .custom-input {
    height: 48px;
    font-size: 15px;
  }
  
  .login-button {
    height: 52px;
  }
}

/* Floating particles effect */
.login-container::before,
.login-container::after {
  content: '';
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.login-container::before {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.login-container::after {
  bottom: 10%;
  right: 10%;
  animation-delay: 3s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}
</style> 