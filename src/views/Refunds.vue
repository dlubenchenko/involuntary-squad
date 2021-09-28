<template>
  <div>
    <div class="text-center">
      <h2 class="mt-4">Повернення</h2>
      <hr />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="text-center pt-5">
            <div
              class="btn-group-vertical"
              role="group"
              aria-label="Basic example"
            >
              <my-button
                v-for="(item, i) of refundButtonsBasic"
                :key="i"
                :item="item"
                @buttonValue="refundHandler"
              />
            </div>

            <div
              v-if="choice === 'Full refund'"
              class="btn-group-vertical mt-3"
              role="group"
              aria-label="Basic example"
            >
              <my-button
                v-for="(item, i) of refundButtonsFull"
                :key="i"
                :item="item"
                @buttonValue="refundHandler()"
              />
            </div>
            <div
              v-else-if="choice === 'Partial refund'"
              class="btn-group-vertical mt-3"
              role="group"
              aria-label="Basic example"
            >
              <my-button
                v-for="(item, i) of refundButtonsPartial"
                :key="i"
                :item="item"
              />
            </div>
          </div>
        </div>
        <div class="col-md mt-3">
          <my-text-area :item="'для ' + choice"/>
        </div>
      </div>
        <div class="row mt-5">
          <my-button :item="'ТИЦЬ'"/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    refundButtonsBasic: ["Full refund", "Partial refund"],
    refundButtonsFull: ["Full refund", "Reissued involuntary", "Reissued voluntary"],
    refundButtonsPartial: [
      "Partial refund",
      "Reissued involuntary",
      "Reissued voluntary",
    ],
    choice: ''
  }),
  methods: {
    refundHandler(e) {
      this.choice = e
    },
  },
};
</script>

<style>
</style>