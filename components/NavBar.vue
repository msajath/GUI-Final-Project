<template>
  <nav class="bg-white shadow dark:bg-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex min-h-16 items-center justify-between gap-4 py-2">
        <div class="flex items-center">
          <h1 class="text-lg font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">GUI Final Project</h1>
        </div>

        <button
          class="rounded border border-gray-300 px-3 py-1 text-sm text-gray-800 dark:border-gray-600 dark:text-gray-100 md:hidden"
          @click="isOpen = !isOpen"
        >
          Menu
        </button>

        <div class="hidden items-center gap-4 md:flex">
          <router-link to="/" class="text-gray-900 hover:text-gray-700 dark:text-gray-100">Home</router-link>
          <router-link to="/cart" class="text-gray-900 hover:text-gray-700 dark:text-gray-100">Cart</router-link>
          <router-link to="/wishlist" class="text-gray-900 hover:text-gray-700 dark:text-gray-100">Wishlist</router-link>
          <router-link to="/checkout" class="text-gray-900 hover:text-gray-700 dark:text-gray-100">Checkout</router-link>
          <router-link to="/login" class="text-gray-900 hover:text-gray-700 dark:text-gray-100">Login</router-link>
          <router-link to="/signup" class="text-gray-900 hover:text-gray-700 dark:text-gray-100">Sign Up</router-link>
        </div>
      </div>

      <div v-if="isOpen" class="flex flex-col gap-2 pb-3 md:hidden">
        <router-link to="/" class="text-gray-900 hover:text-gray-700 dark:text-gray-100" @click="isOpen = false">Home</router-link>
        <router-link to="/cart" class="text-gray-900 hover:text-gray-700 dark:text-gray-100" @click="isOpen = false">Cart</router-link>
        <router-link to="/wishlist" class="text-gray-900 hover:text-gray-700 dark:text-gray-100" @click="isOpen = false">Wishlist</router-link>
        <router-link to="/checkout" class="text-gray-900 hover:text-gray-700 dark:text-gray-100" @click="isOpen = false">Checkout</router-link>
        <router-link to="/login" class="text-gray-900 hover:text-gray-700 dark:text-gray-100" @click="isOpen = false">Login</router-link>
        <router-link to="/signup" class="text-gray-900 hover:text-gray-700 dark:text-gray-100" @click="isOpen = false">Sign Up</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped>
</style>
