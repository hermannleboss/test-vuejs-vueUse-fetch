<template>
  <div class="overflow-x-auto">
    <table class="table table-zebra">
      <tbody>
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
      </tbody>
    </table>
  </div>
</template>
<script lang="ts" setup>
import { useFetch } from '@vueuse/core'

const props = defineProps({
  url: {
    type: String
  }
})
const { data, isFetching, isFinished, statusCode, error } = useFetch(props.url)
const response = useFetch(props.url)
//console.table(response)
</script>