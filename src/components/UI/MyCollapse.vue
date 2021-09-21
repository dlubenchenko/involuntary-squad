<template>
  <div>
    <div class="accordion" id="accordionExample">
      <div class="card" v-for="card of options" :key="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left text-center"
              type="button"
              data-toggle="collapse"
              :data-target="'#' + card"
              aria-expanded="false"
              :aria-controls="card"
              active-class="show"
              exact
            >
              <b>{{ card }}</b>
            </button>
          </h2>
        </div>

        <div
          :id="card"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            Some placeholder content for the first accordion panel. This panel
            is shown by default, thanks to the <code>.show</code> class.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["options"],
};
</script>

<style>
</style>