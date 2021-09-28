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
                  value="Лубенченко Дмитро"
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
            <my-button :item="'Оновити'"/>
          </form>
        </div>
        <div class="col-md-6 text-center">Profile photo</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style>
</style>