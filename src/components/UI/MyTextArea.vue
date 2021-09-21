<template>
  <div>
    <label for="exampleFormControlTextarea1">Вставити строку <b>{{ item }}</b></label>
    <textarea
      class="form-control"
      id="exampleFormControlTextarea1"
      rows="3"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: ['item']
};
</script>

<style scoped>
</style>