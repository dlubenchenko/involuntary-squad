<template>
  <div>
    <div class="text-center">
      <h2 class="mt-4">Переклади причин</h2>
      <hr />
    </div>
    <div class="row">
      <div class="col-lg-6 col-md mt-2">
        <v-select :options="options"></v-select>
      </div>
      <div class="col-lg-6 col-md mt-2">
        <v-select :options="options"></v-select>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col">
        <hr />
        <p class="output text-center mt-4">
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
    options: ["foo", "bar", "baz", "led", "lwo"],
  }),
      mounted() {
      const id = {value: process.env.VUE_APP_TRANSLATES}
      console.clear()
      this.$store.dispatch('fetchGoogle', id)
    }
};
</script>

<style>
</style>