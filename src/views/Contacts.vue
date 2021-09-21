<template>
  <div>
    <div class="text-center">
      <h2 class="mt-4">Котакти</h2>
      <hr />
    </div>
    <div>
      <v-select class="contacts-output" :options="options"></v-select>
    </div>
    <div class="mt-4">
      <my-collapse class="contacts-output" :options="options"/>
    </div>
  </div>
</template>

<script>
import MyCollapse from '../components/UI/MyCollapse.vue'

export default {
  components: { MyCollapse },
  data: () => ({
    options: ["UA", "RU", "USA", 'DE', 'KZ'],
  }),
}
</script>

<style>
.contacts-output {
  margin: 0 auto;
}
</style>