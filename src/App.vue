<script setup lang="ts">
import UseFetchOutput from '@/components/UseFetchOutput.vue'
import SimpleFetchOutput from '@/components/SimpleFetchOutput.vue'

const url = 'http://localhosdst:3000'
</script>

<template>
  <div class="w-1/2 border">
    <div class="p-4">
      <table class="table table-zebra">
        <tbody>
          <tr>
            <th>URL</th>
            <td>{{ url }}</td>
          </tr>
          <tr>
            <th>Test</th>
            <td>Test not existing url</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="p-4">
      <UseFetchOutput :url="url" />
    </div>
    <div class="p-4">
      <SimpleFetchOutput :url="url" />
    </div>
  </div>
</template>

<style scoped></style>