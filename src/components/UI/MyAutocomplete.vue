<template>
  <div class="row">
    <div class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">search</i>
          <input autocomplete="off" @change="updateSelect($event)" v-model="labelValue" type="text" id="autocomplete-input" class="autocomplete" @keyup="autocomplete">
          <label for="autocomplete-input">{{ label }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['options', 'label'],
  data: () => ({
    labelValue: ''
  }),
  methods: {
    updateSelect(e) {
      if (!e.isTrusted) {
        this.$emit('update', e.target.value)
        // console.log(e.target.value)
      }
    },
    autocomplete(e) {
      let temp = {}
      // console.log(e.target)
      // console.log(Object.fromEntries(this.languages.map(e => ([e, null]))))
      M.Autocomplete.init(e.target, {data: Object.fromEntries(this.options.map(e => ([e, null])))
      }, {limit: 1}).open()
    }
  },
}
</script>