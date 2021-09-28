<template>
  <div>
    <form class="login-form">
      <div class="form-login">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your password with anyone else.</small
          >
        </div>
        <div class="text-center">
          <router-link to="/">
            <my-button class="mt-4" @click.prevent :item="'Увійти'" />
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
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