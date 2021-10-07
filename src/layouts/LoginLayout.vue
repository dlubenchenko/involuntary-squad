<template>
    <div class="login">
            <router-view/>
    </div>
</template>

<script>
    export default {
        computed: {
          error() {
            return this.$store.getters.error
          }
        },
      watch: {
          error(fdError) {
            console.log(fdError)
          }
      }
    }
</script>

<style>
.login { 
    background-color: lightslategray;
    position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>