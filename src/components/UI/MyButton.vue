<template>
  <button type="submit" class="btn btn-secondary width" @click.prevent='clickHandler'>{{ item }}</button>
</template>

<script>
export default {
  name: 'my-button',
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