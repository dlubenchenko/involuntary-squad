<template>
  <div>
    <label for="exampleFormControlTextarea1">Вставити строку <b>{{ item }}</b></label>
    <textarea
      class="form-control"
      id="exampleFormControlTextarea1"
      rows="3"
      @change="textAreaHandler"
      :value="value"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: 'my-text-area',
  props: ['item', 'value'],
  data:() => ({
  }),
  methods: {
    textAreaHandler(e) {
      this.$emit('textAreaHandler', e.target.value)
    }
  }
};
</script>

<style scoped>
</style>