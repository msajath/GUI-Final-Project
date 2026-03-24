<template>
  <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col">
    <img
      :src="product.thumbnail"
      :alt="product.title"
      class="w-full h-48 object-cover rounded-lg"
    />

    <div class="mt-4 flex-1">
      <h2 class="text-lg font-semibold">{{ product.title }}</h2>
      <p class="text-sm text-gray-500 mt-1">{{ product.category }}</p>
      <p class="text-xl font-bold text-blue-600 mt-3">${{ product.price }}</p>
    </div>

    <div class="mt-4 flex gap-2">
      <RouterLink
        :to="`/product/${product.id}`"
        class="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        View
      </RouterLink>

      <button
        @click="wishlistStore.toggleWishlist(product)"
        class="px-3 py-2 rounded-lg bg-pink-500 text-white"
      >
        ♥
      </button>

      <button
        @click="cartStore.addToCart(product)"
        class="px-3 py-2 rounded-lg bg-green-600 text-white"
      >
        +
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../types/product'
import { useCartStore } from '../stores/cartStore'
import { useWishlistStore } from '../stores/wishlistStore'

defineProps<{
  product: Product
}>()

const cartStore = useCartStore()
const wishlistStore = useWishlistStore()
</script>