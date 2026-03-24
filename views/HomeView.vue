<template>
  <div class="home-view">
    <Section1 />
    <Section2 />
  </div>
</template>

<script setup lang="ts">
const Section1 = () => import('../components/home/Section1.vue')
const Section2 = () => import('../components/home/Section2.vue')
</script>

<style scoped>
.home-view {
  display: flex;
  flex-direction: column;
}
</style>
