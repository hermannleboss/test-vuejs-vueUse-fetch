<template>
  <div class="">
    <table class="table table-zebra table-xs">
      <tbody>
        <tr>
          <th>Method</th>
          <td>Simple Fetch</td>
        </tr>
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
import { onMounted, ref } from 'vue'

const props = defineProps({
  url: {
    type: String
  }
})
const data = ref()
const isFetching = ref()
const isFinished = ref(false)
const statusCode = ref()
const error = ref()

onMounted(async () => {
  try {
    isFetching.value = true
    const response = await fetch(props.url)
    statusCode.value = response.status
    isFinished.value = true
  } catch (e) {
    error.value = e
  } finally {
    isFetching.value = false
    isFinished.value = true
  }
})

// const { data, isFetching, isFinished, statusCode, error } = useFetch(props.url)
// const response = useFetch(props.url)
//console.table(response)
</script>