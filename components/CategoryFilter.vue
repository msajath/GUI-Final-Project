<template>
  <select
    :value="modelValue"
    @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800"
  >
    <option value="all">All Categories</option>
    <option
      v-for="category in categories"
      :key="category.slug"
      :value="category.slug"
    >
      {{ category.name }}
    </option>
  </select>
</template>

<script setup lang="ts">
import type { ProductCategory } from '../types/product'

defineProps<{
  categories: ProductCategory[]
  modelValue: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>