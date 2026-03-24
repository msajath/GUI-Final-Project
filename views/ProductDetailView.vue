<template>
  <div class="product-detail-view">
    <h1>Product Detail</h1>
    <p>Product ID: {{ $route.params.id }}</p>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.product-detail-view {
  padding: 2rem;
}
</style>
