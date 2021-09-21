<template>
  <div class="col s12 m6">
    <label>{{ header }}</label>
    <select class="browser-default" @change="updateSelect()" v-model="labelValue">
      <option value="" disabled selected>Choose your option</option>
      <option :value="i" :key="i" v-for="(opt, i) of options">{{ opt }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['options', 'header'],
  data: () => ({
    labelValue: ''
  }),
  methods: {
    updateSelect() {
      this.$emit('update', this.labelValue)
    }
  },
}
</script>

<style>

</style>