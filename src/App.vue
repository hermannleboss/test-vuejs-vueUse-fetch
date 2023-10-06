<script setup lang="ts">
import Comparaison from '@/Comparaison.vue'

const url = 'http://localhost:3000'
const urlWithError = 'http://localhostds:3000'

const table = [{ url: url }, { url: urlWithError }]
</script>

<template>
  <div class="flex">
    <Comparaison :url="item.url" v-for="(item, i) in table" :key="i" />
  </div>
</template>

<style scoped></style>