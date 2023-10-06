<script setup lang="ts">
import { useFetch } from '@vueuse/core'

const url = 'http://localhost:3000'
const { data, isFetching, isFinished, statusCode, error } = useFetch(url)
console.log('data', data.value)
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
      <tr>
        <th>Data</th>
        <td>{{ data }}</td>
      </tr>
      <tr>
        <th>IsFetching</th>
        <td>{{ isFetching }}</td>
      </tr>
      <tr>
        <th>IsFinished</th>
        <td>{{ isFinished }}</td>
      </tr>
      <tr>
        <th>Status Code</th>
        <td>{{ statusCode }}</td>
      </tr>
      <tr>
        <th>Error</th>
        <td>{{ error }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped></style>