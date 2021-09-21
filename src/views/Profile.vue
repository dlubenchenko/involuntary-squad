<template>
  <div>
    <div class="page-title">
      <h3>Профіль</h3>
    </div>

    <form class="form" @submit.prevent="submitHandler">
      <div class="input-field">
        <input
            id="name"
            type="text"
            v-model="name"
            :class="{invalid: $v.name.$dirty && !$v.name.required}"
        >
        <label for="name">Ім'я</label>
        <small
            class="helper-text invalid"
            v-if="$v.name.$dirty && !$v.name.required"
        >Поле Ім'я немає бути пустим
        </small>
      </div>

      <div class="switch">
        <label>
          Русский
          <input type="checkbox">
          <span class="lever"></span>
          Українська
        </label>
      </div>

      <button class="btn waves-effect waves-light amber darken-4" type="submit">
        Змінити
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {required} from "vuelidate/lib/validators";

export default {
  data: () => ({
    name: '',

  }),
  mounted() {
      this.name = this.info.name
      setTimeout(() => {
        M.updateTextFields()
      },0)
  },
  validations: {
    name: {required},
  },
  computed: {
    ...mapGetters(['info'])
  },
  methods: {
    ...mapActions(['updateInfo']),
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      try {
        await this.updateInfo({
          name: this.name
        })
      } catch (e) {

      }
    }
  }
}
</script>

<style scoped>
.switch {
  margin-bottom: 2rem;
}
</style>