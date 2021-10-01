<template>
  <div class="text-center">
    <div class="spinner-border text-secondary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loader'
};
</script>

<style lang="scss" scoped>
.spinner-border {
  margin-top: 5rem;
  width: 6rem;
  height: 6rem;
}
</style>