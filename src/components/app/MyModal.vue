<template>
  <div class="modal" v-if="modalVisible">
    <div @click.stop class="modal__content">
      <slot></slot>
      <button class="btn waves-light amber darken-4" @click="hideModal"><b>x</b></button>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  name: 'my-modal',
  components: {MyButton},
  props: {
    modalVisible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideModal() {
      this.$emit('show', false)
    }
  }
}
</script>

<style scoped>
.modal {
  z-index: 9999;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  display: flex;
}

.modal__content {
  margin: auto;
  background: #fff;
  border-radius: 10px;
  min-height: 150px;
  max-width: 1500px;
  padding: 20px;
  border: 2px solid teal;
  display: flex;
  flex-direction: row;
  font-size: .8em;
}

</style>