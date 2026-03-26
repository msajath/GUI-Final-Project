<template>
  <section class="login-shell">
    <div class="aurora aurora-1" aria-hidden="true"></div>
    <div class="aurora aurora-2" aria-hidden="true"></div>
    <div class="grain" aria-hidden="true"></div>

    <div class="login-layout">
      <aside class="brand-panel">
        <p class="eyebrow">Welcome back</p>
        <h1>Sign in to continue your shopping journey.</h1>
        <p class="lead">
          Track orders, save favorites, and complete checkout faster with one secure login.
        </p>
        <ul class="benefits">
          <li>Saved cart across sessions</li>
          <li>Faster checkout flow</li>
          <li>Personalized recommendations</li>
        </ul>
      </aside>

      <article class="card">
        <header>
          <p class="card-kicker">Account access</p>
          <h2>Login</h2>
        </header>

        <form class="form" @submit.prevent="login">
          <label>
            Username
            <input v-model="username" type="text" placeholder="kminchelle" required />
          </label>

          <label>
            Password
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="0lelplR"
              required
            />
          </label>

          <button type="button" class="toggle" @click="showPassword = !showPassword">
            {{ showPassword ? 'Hide password' : 'Show password' }}
          </button>

          <button class="submit" :disabled="isLoading" type="submit">
            <span v-if="isLoading">Signing in...</span>
            <span v-else>Sign in</span>
          </button>

          <p v-if="message" class="message" :class="{ success: isSuccess, error: !isSuccess }">
            {{ message }}
          </p>

          <p class="signup-note">
            New here?
            <router-link to="/signup" class="signup-link">Create an account</router-link>
          </p>
        </form>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const username = ref('kminchelle')
const password = ref('0lelplR')
const showPassword = ref(false)
const isLoading = ref(false)
const isSuccess = ref(false)
const message = ref('')

async function login(): Promise<void> {
  isLoading.value = true
  message.value = ''

  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username.value, password: password.value }),
    })

    if (!response.ok) {
      throw new Error('Invalid credentials')
    }

    const data = (await response.json()) as { token?: string }
    localStorage.setItem('token', data.token ?? '')
    isSuccess.value = true
    message.value = 'Login successful. You are now authenticated.'
  } catch {
    isSuccess.value = false
    message.value = 'Login failed. Please check your username and password.'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Outfit:wght@400;600;700&display=swap');

.login-shell {
  position: relative;
  overflow: hidden;
  border-radius: 1.25rem;
  min-height: calc(100vh - 9rem);
  padding: 1rem;
  background: radial-gradient(circle at 20% 20%, #fef3c7 0%, #f8fafc 45%, #ecfeff 100%);
}

.login-layout {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  max-width: 1100px;
  margin: 0 auto;
}

.brand-panel,
.card {
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(15, 23, 42, 0.1);
  border-radius: 1rem;
  padding: 1.25rem;
  box-shadow: 0 20px 60px rgba(12, 30, 52, 0.12);
  animation: reveal 650ms ease both;
}

.brand-panel {
  animation-delay: 80ms;
}

.card {
  animation-delay: 140ms;
}

.eyebrow,
.card-kicker {
  margin: 0;
  font: 600 0.8rem/1 'Space Grotesk', 'Segoe UI', sans-serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #2563eb;
}

h1,
h2 {
  margin: 0.6rem 0 0;
  font-family: 'Space Grotesk', 'Segoe UI', sans-serif;
  color: #0f172a;
}

h1 {
  font-size: clamp(1.5rem, 2.8vw, 2.4rem);
  line-height: 1.15;
}

h2 {
  font-size: 1.6rem;
}

.lead,
.benefits,
label,
.message {
  font-family: 'Outfit', 'Trebuchet MS', sans-serif;
}

.lead {
  margin: 0.9rem 0 0;
  color: #334155;
  line-height: 1.45;
}

.benefits {
  list-style: none;
  margin: 1rem 0 0;
  padding: 0;
  color: #1e293b;
}

.benefits li {
  padding: 0.45rem 0;
  border-bottom: 1px dashed rgba(30, 41, 59, 0.18);
}

.form {
  margin-top: 1rem;
  display: grid;
  gap: 0.8rem;
}

label {
  display: grid;
  gap: 0.35rem;
  color: #0f172a;
  font-weight: 600;
}

input {
  border: 1px solid #cbd5e1;
  border-radius: 0.7rem;
  padding: 0.75rem 0.85rem;
  color: #0f172a;
  transition: border-color 180ms ease, box-shadow 180ms ease;
}

input:focus {
  outline: none;
  border-color: #0ea5e9;
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.25);
}

.toggle {
  width: fit-content;
  border: none;
  background: none;
  color: #0369a1;
  font: 600 0.9rem/1 'Outfit', 'Trebuchet MS', sans-serif;
  cursor: pointer;
  padding: 0.1rem 0;
}

.submit {
  position: relative;
  overflow: hidden;
  border: none;
  border-radius: 0.8rem;
  padding: 0.9rem 1rem;
  color: #ffffff;
  font: 700 1rem/1 'Space Grotesk', 'Segoe UI', sans-serif;
  background: linear-gradient(120deg, #ea580c, #0284c7);
  cursor: pointer;
  transition: transform 180ms ease;
}

.submit:hover {
  transform: translateY(-2px);
}

.submit:disabled {
  cursor: not-allowed;
  opacity: 0.8;
}

.message {
  margin: 0.25rem 0 0;
  font-size: 0.92rem;
}

.message.success {
  color: #065f46;
}

.message.error {
  color: #b91c1c;
}

.signup-note {
  margin: 0.2rem 0 0;
  color: #334155;
  font-size: 0.92rem;
}

.signup-link {
  color: #0369a1;
  font-weight: 700;
}

.aurora {
  position: absolute;
  border-radius: 999px;
  filter: blur(20px);
  opacity: 0.45;
}

.aurora-1 {
  width: 300px;
  height: 300px;
  background: #22d3ee;
  top: -80px;
  left: -90px;
  animation: floaty 10s ease-in-out infinite;
}

.aurora-2 {
  width: 280px;
  height: 280px;
  background: #fb923c;
  bottom: -90px;
  right: -70px;
  animation: floaty 12s ease-in-out infinite reverse;
}

.grain {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(15, 23, 42, 0.08) 0.45px, transparent 0.45px);
  background-size: 10px 10px;
  opacity: 0.3;
}

@media (min-width: 900px) {
  .login-shell {
    padding: 2rem;
  }

  .login-layout {
    grid-template-columns: 1.1fr 0.9fr;
    align-items: stretch;
    gap: 1.4rem;
  }

  .brand-panel,
  .card {
    padding: 2rem;
  }
}

@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floaty {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(12px, 18px, 0) scale(1.06);
  }
}
</style>