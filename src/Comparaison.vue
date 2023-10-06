<template>
  <div class="border">
    <div class="p-4">
      <table class="table table-zebra">
        <tbody>
        <tr>
          <th>URL</th>
          <td>{{ url }}</td>
        </tr>
        <tr>
          <th>Test</th>
          <td>{{test}}</td>
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
<script lang="ts" setup>
import UseFetchOutput from "@/components/UseFetchOutput.vue";
import SimpleFetchOutput from "@/components/SimpleFetchOutput.vue";

const props = defineProps({
  url: {
    type: String
  },
  test: {
    type: String
  }
})
</script>