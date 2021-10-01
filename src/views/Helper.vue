<template>
  <div>
    <div class="text-center">
      <h2 class="mt-4">Helper</h2>
      <hr />
    </div>
    <div class="row">
      <div class="col-12">
        
      </div>
      <div class="col-12 helper">
        <loader v-if="loading"/>
        <my-table v-else class="helper" :items="helperInfo"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
      helperInfo : null,
      loading: true
    }),
    async mounted() {
      const id = {value: process.env.VUE_APP_HELPER}

      const reason = await this.$store.dispatch('fetchGoogle', id)
      this.helperInfo = await this.$store.dispatch('formatGTable', reason.table.rows)
      this.helperInfo = this.helperInfo.map(e => e.slice(0, 7))
      this.loading = false
    }
  }
</script>

<style>
.helper {
  font-size: .8rem;
}
</style>