import { defineStore } from 'pinia'
import { ref } from 'vue'

interface CartItem {
  id: number
  title: string
  price: number
  quantity: number
  thumbnail: string
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>(JSON.parse(localStorage.getItem('cart') || '[]'))

  const addItem = (product: CartItem) => {
    const exist = items.value.find((i) => i.id === product.id)
    if (exist) exist.quantity += 1
    else items.value.push({ ...product, quantity: 1 })
    localStorage.setItem('cart', JSON.stringify(items.value))
  }

  const removeItem = (id: number) => {
    items.value = items.value.filter((i) => i.id !== id)
    localStorage.setItem('cart', JSON.stringify(items.value))
  }

  const clearCart = () => {
    items.value = []
    localStorage.removeItem('cart')
  }

  const totalPrice = () => items.value.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return { items, addItem, removeItem, clearCart, totalPrice }
})
