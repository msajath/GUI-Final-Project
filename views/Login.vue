<template>
  <div class="p-4 max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-4">Login</h1>
    <form @submit.prevent="login" class="flex flex-col gap-2">
      <input type="text" placeholder="Username" v-model="username" class="border rounded p-1"/>
      <input type="password" placeholder="Password" v-model="password" class="border rounded p-1"/>
      <button class="bg-blue-500 text-white rounded py-2 hover:bg-blue-600">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
export default defineComponent({
  setup(){
    const username = ref('');
    const password = ref('');
    const login = async () => {
      try {
        const res = await axios.post('https://dummyjson.com/auth/login', { username:username.value, password:password.value });
        localStorage.setItem('token', res.data.token);
        alert('Login successful');
      } catch (err) {
        alert('Login failed');
      }
    }
    return { username, password, login };
  }
});
</script>