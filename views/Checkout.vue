<template>
  <div class="p-4 max-w-2xl mx-auto">
    <NavBar @toggle-dark="toggleDark"/>
    <h1 class="text-2xl font-bold mb-4">Checkout</h1>
    <div v-if="cart.items.length">
      <h2 class="font-semibold mb-2">Order Summary</h2>
      <ul class="mb-4">
        <li v-for="item in cart.items" :key="item.id" class="flex justify-between">
          {{ item.title }} x {{ item.quantity }}
          <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
        </li>
      </ul>
      <p class="text-right font-bold mb-4">Total: ${{ cart.totalPrice().toFixed(2) }}</p>
      <form @submit.prevent="placeOrder" class="flex flex-col gap-2">
        <input type="text" placeholder="Full Name" v-model="name" class="border rounded p-1" required/>
        <input type="text" placeholder="Address" v-model="address" class="border rounded p-1" required/>
        <input type="email" placeholder="Email" v-model="email" class="border rounded p-1" required/>
        <button class="bg-blue-500 text-white rounded py-2 hover:bg-blue-600 mt-2">Place Order</button>
      </form>
    </div>
    <p v-else>Your cart is empty.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavBar from '../components/NavBar.vue';
import { useCartStore } from '../store/cart';

export default defineComponent({
  components:{NavBar},
  setup(){
    const cart = useCartStore();
    const name = ref('');
    const address = ref('');
    const email = ref('');
    const placeOrder = () => {
      alert(`Order placed! Thank you, ${name.value}`);
      cart.clearCart();
    }
    const toggleDark = () => document.documentElement.classList.toggle('dark');
    return { cart, name, address, email, placeOrder, toggleDark };
  }
});
</script>