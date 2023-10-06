<script setup lang="ts">
import UseFetchOutput from '@/components/UseFetchOutput.vue'

const url = 'http://localhost:3000'
</script>

<template>
  <UseFetchOutput :url="url" />
</template>

<style scoped></style>