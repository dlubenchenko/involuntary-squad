<template>
  <div class="container">
    <div class="text-center">
      <h2 class="mt-4">Котакти</h2>
      <hr />
    </div>
    <div>
      <v-select class="contacts-output" :options="selectedAl"></v-select>
    </div>
    <div class="mt-4">
      <my-collapse class="contacts-output" :options="options"/>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    options: ['Head_Office', 'UA', 'RU', 'DE', 'KZ', 'USA', 'EE', 'AT', 'RO_MD', 'PL', 'TR', 'ES', 'FR', 'NL', 'IL'],
    alContacts: null,
    selectedAl: []
  }),
      async mounted() {
      const id = {value: process.env.VUE_APP_CONTACTS}
      console.clear()
      
      const reason = await this.$store.dispatch('fetchGoogle', id)
      this.alContacts = await this.$store.dispatch('formatGTable', reason.table.rows)
      this.alContacts.map(e => this.selectedAl.push(e.slice(0,3).join('  / ')))
    }
}
</script>

<style>
.contacts-output {
  margin: 0 auto;
}
</style>