<template>
  <div>
    <div class="accordion" id="accordionExample">
      <div class="card" v-for="(card, i) of options" :key="i">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left text-center"
              type="button"
              data-toggle="collapse"
              :data-target="'#' + card[0]"
              aria-expanded="false"
              :aria-controls="card[0]"
              active-class="show"
              exact
            >
              <b>{{ card[0] }}</b>
            </button>
          </h2>
        </div>

        <div
          :id="card[0]"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <div class="row">
              <div class="col output">{{ card[1] }}</div>
              <div class="col output">{{ card[2] }}</div>
              <div class="col output">{{ card[3] }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-collapse',
  props: ["options", "values"],
};
</script>

<style>

</style>