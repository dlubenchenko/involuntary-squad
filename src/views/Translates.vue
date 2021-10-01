<template>
  <div class="container">
    <div class="text-center">
      <h2 class="mt-4">Переклади причин</h2>
      <hr />
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-12">
        <div class="col-12 mt-3">
          <v-select :options="reason"></v-select>
        </div>
        <div class="col-12 mt-3">
          <v-select :options="options"></v-select>
        </div>
      </div>
    <div class="col-lg-8 col-md-12">
      <p class="output text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
        dignissimos neque omnis perferendis nemo fugit earum libero, cum
        alias, veniam quo beatae minima. Facilis repellendus aut saepe quas
        iste quia.
      </p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    options: [],
    reason: []
  }),
     async mounted() {
      const id = {value: process.env.VUE_APP_TRANSLATES}
      console.clear()
      const reason = await this.$store.dispatch('fetchGoogle', id)
      const temp = await this.$store.dispatch('formatGTable', reason.table.rows)
      this.reason = temp[0].filter(e => e !== '' && !e.includes('Название'))
      temp.filter(e => e[0] !== 'Название').forEach(e => {
        this.options.push(e[0])
      })
      console.log(temp)
    }
};
</script>

<style>
</style>