<template>
  <div class="p-4 max-w-4xl mx-auto">
    <NavBar @toggle-dark="toggleDark"/>
    <h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>
    <div v-if="cart.items.length">
      <div v-for="item in cart.items" :key="item.id" class="flex justify-between items-center border-b py-2">
        <div class="flex items-center gap-4">
          <img :src="item.thumbnail" class="w-16 h-16 object-cover rounded"/>
          <p>{{ item.title }} x {{ item.quantity }}</p>
        </div>
        <div class="flex items-center gap-2">
          <p>${{ (item.price * item.quantity).toFixed(2) }}</p>
          <button class="text-red-500" @click="cart.removeItem(item.id)">Remove</button>
        </div>
      </div>
      <div class="mt-4 text-right font-bold">
        Total: ${{ cart.totalPrice().toFixed(2) }}
      </div>
      <router-link to="/checkout" class="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Proceed to Checkout
      </router-link>
    </div>
    <p v-else>Your cart is empty.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../components/NavBar.vue';
import { useCartStore } from '../store/cart';

export default defineComponent({
  components:{NavBar},
  setup(){
    const cart = useCartStore();
    const toggleDark = () => document.documentElement.classList.toggle('dark');
    return { cart, toggleDark };
  }
});
</script>