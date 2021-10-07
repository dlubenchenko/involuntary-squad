<template>
  <div>
    <form class="login-form" @submit.prevent="submitHandler">
      <div class="form-login">
        <div class="form-group">
          <label for="exampleInputEmail1">Електронна адреса</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model.trim="email"
          />
          <small class="form-text text-muted"
            >Введіть електронну пошту</small
          >
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Пароль</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            v-model="password"
          />
          <small class="form-text text-muted">
            Введіть пароль.
          </small>

        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-secondary width">Увійти</button>
        </div>
      </div>
    </form>

    <toast @showToast="showToast"/>
  </div>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
export default {
  data: () => ({
    password: '',
    email: ''
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }
      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/')
      } catch (e) {
        throw e
      }
    },
    showToast(e) {
      console.log(e)
    }
  }
};
</script>

<style>
.form-login {
  margin: 0 auto;
  position: relative;
  top: 10rem;
  max-width: 25rem;
  background-color: #fff;
  padding: 2rem;
  min-width: 10rem;
  border: 1px solid lightgrey;
}
</style>