<template>
  <section>
    <h1 class="text-3xl font-bold mb-6">Online Shopping Store</h1>

    <div class="grid gap-4 md:grid-cols-2 mb-6">
      <SearchBar v-model="searchText" />
      <CategoryFilter v-model="selectedCategory" :categories="categories" />
    </div>

    <LoadingState v-if="loading" />
    <ErrorState v-else-if="error" />
    <EmptyState v-else-if="filteredProducts.length === 0" />
    <ProductGrid v-else :products="filteredProducts" />
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import CategoryFilter from '../components/CategoryFilter.vue'
import ProductGrid from '../components/ProductGrid.vue'
import LoadingState from '../components/LoadingState.vue'
import ErrorState from '../components/ErrorState.vue'
import EmptyState from '../components/EmptyState.vue'
import { getCategories, getProducts } from '../services/productService'
import type { Product, ProductCategory } from '../types/product'

const products = ref<Product[]>([])
const categories = ref<ProductCategory[]>([])
const loading = ref(true)
const error = ref(false)
const searchText = ref('')
const selectedCategory = ref('all')

const filteredProducts = computed(() => {
  const search = searchText.value.toLowerCase().trim()

  return products.value.filter((product) => {
    const matchCategory =
      selectedCategory.value === 'all' || product.category === selectedCategory.value

    const matchSearch =
      product.title.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)

    return matchCategory && matchSearch
  })
})

async function loadData(): Promise<void> {
  try {
    loading.value = true
    error.value = false

    const [productData, categoryData] = await Promise.all([
      getProducts(),
      getCategories(),
    ])

    products.value = productData
    categories.value = categoryData
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadData()
})
</script>
