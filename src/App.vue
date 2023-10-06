<script setup lang="ts">
import Comparaison from '@/Comparaison.vue'

const url = 'http://localhost:3000'
const urlWithError = 'http://urlWithError:3000'

const table = [
  { url: url, test: 'Simple 200 page' },
  { url: urlWithError, test: 'Network Error' },
  { url: url + '/400', test: 'Simple 400 page' },
  { url: url + '/401', test: 'Simple 401 page' },
  { url: url + '/404', test: 'Simple 404 page' },
  { url: url + '/500', test: 'Simple 500 page' }
]
</script>

<template>
  <div class="flex">
    <Comparaison :url="item.url" :test="item.test" v-for="(item, i) in table" :key="i" />
  </div>
</template>

<style scoped></style>