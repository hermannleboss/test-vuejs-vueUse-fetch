<script setup lang="ts">
import UseFetchOutput from '@/components/UseFetchOutput.vue'

const url = 'http://localhost:3000'
</script>

<template>
  <div class="w-1/2 border">
    <div class="p-4 " >
      <table class="table table-zebra">
        <tbody>
          <tr>
            <th>URL</th>
            <td>{{ url }}</td>
          </tr>
          <tr>
            <th>Method</th>
            <td>UseFetch</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="p-4">
      <UseFetchOutput :url="url" />
    </div>
  </div>
</template>

<style scoped></style>