<template>
  <button type="button" class="btn btn-secondary width" @click='clickHandler'>{{ item }}</button>
</template>

<script>
export default {
  props: ["item"],
  methods: {
      clickHandler(btn){
        //   console.log(btn.target.innerText)
          this.$emit('buttonValue', btn.target.innerText)
      }
  }
}
</script>

<style>
.btn.width {
  width: 100%;
}
</style>