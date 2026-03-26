<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 flex items-center justify-center p-4 relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
    <div class="absolute bottom-20 right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float" style="animation-delay: 1s;"></div>
    
    <div class="w-full max-w-md relative z-10">
      <div class="bg-white/95 backdrop-blur-lg p-8 rounded-2xl shadow-2xl transform transition-all duration-500 hover:shadow-3xl hover:scale-105">
        <div class="text-center mb-8">
          <div class="inline-block p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4 animate-pulse">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
            </svg>
          </div>
          <h1 class="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Join Us
          </h1>
          <p class="text-gray-600">Create your account to get started</p>
        </div>

        <form @submit.prevent="handleSignup" class="space-y-5">
          <div class="relative group">
            <label class="block mb-2 font-semibold text-gray-700">Full Name</label>
            <div class="relative">
              <svg class="absolute left-3 top-3.5 w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <input
                v-model="fullName"
                type="text"
                class="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-all duration-300 hover:border-purple-300 bg-gray-50 focus:bg-white"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          <div class="relative group">
            <label class="block mb-2 font-semibold text-gray-700">Email</label>
            <div class="relative">
              <svg class="absolute left-3 top-3.5 w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <input
                v-model="email"
                type="email"
                class="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-all duration-300 hover:border-purple-300 bg-gray-50 focus:bg-white"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div class="relative group">
            <label class="block mb-2 font-semibold text-gray-700">Password</label>
            <div class="relative">
              <svg class="absolute left-3 top-3.5 w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
              <input
                v-model="password"
                type="password"
                class="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition-all duration-300 hover:border-purple-300 bg-gray-50 focus:bg-white"
                placeholder="Create a strong password"
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
          >
            <span>Create Account</span>
            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </button>
        </form>

        <p class="text-center mt-6 text-gray-600">
          Already have an account?
          <router-link 
            to="/login" 
            class="font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:underline transition-all"
          >
            Sign in
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const fullName = ref('')
const email = ref('')
const password = ref('')

const handleSignup = () => {
  if (!fullName.value || !email.value || !password.value) {
    alert('Please fill in all fields')
    return
  }

  console.log('Signup attempt:', { name: fullName.value, email: email.value })
  localStorage.setItem('isLoggedIn', 'true')
  localStorage.setItem('userName', fullName.value)
  localStorage.setItem('userEmail', email.value)

  router.push('/')
}
</script>