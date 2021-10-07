<template>
  <div>
    <div class="text-center">
      <h2 class="mt-4">Профіль</h2>
      <hr />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <form>
            <div class="form-group">
              <div class="form-group">
                <label for="formGroupExampleInput">Ім'я</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Введіть ім'я"
                  v-model="name"
                />
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="exampleRadios1">
                  Українська
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  value="option3"
                  disabled
                />
                <label class="form-check-label" for="exampleRadios3">
                  Русский
                </label>
              </div>
            </div>
            <my-button :item="'Оновити'" @buttonValue="updateInfo"/>
          </form>
        </div>
        <div class="col-md-6 text-center">Profile photo</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "Profile",
  data: () => ({
    name: '',
  }),
  mounted() {
    this.name = this.info.name
  },
  computed: {
    ...mapGetters(['info'])
  },
  methods: {
    ...mapActions(['currentUserInfo']),
    async updateInfo() {
      try {
        await this.currentUserInfo({
          name: this.name
        })
      } catch (e) {

      }
    }
  }
};
</script>

<style>
</style>