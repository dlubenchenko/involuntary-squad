<template>
  <div class="container">
    <div class="text-center">
      <h2 class="mt-4">Інформаці по авіакомпаніям</h2>
      <hr />
    </div>
    <div>
      <my-table :items="unactive" :btn="click"/>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    click: 'Open',
    unactive: [['AK', 'Reissue', 'Refund'], ['AF', 'btn', 'btn'], ['DL', 'btn', 'btn'], ['KL', 'btn', 'btn'], ['PS', 'btn', 'btn']],
  }),
  async mounted() {
    console.clear()
    const id = { value: process.env.VUE_APP_ALINFO }
    const reason = await this.$store.dispatch('fetchGoogle', id)
    const temp = await this.$store.dispatch('formatGTable', reason.table.rows)
    // console.log(temp)

  }
};
</script>

<style>
</style>