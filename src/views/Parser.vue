<template>
  <div>
    <div class="text-center">
      <h2 class="mt-4">Парсер</h2>
      <hr />
    </div>
    <main class="container">
      <div class="row">
        <div class="col-xl-3 text-center pt-5">
          <div
            class="btn-group-vertical col-xl-9 col-sm-8"
            role="group"
            aria-label="Basic example"
          >
            <my-button
              v-for="(item, i) of parserButtons"
              :key="i"
              :item="item.title"
              @buttonValue="parserHandler"
              class="pt-2 pb-2"
            />
          </div>
        </div>
        <div class="col-xl">
          <form>
            <div class="form-group mt-5">
              <my-text-area :item="parser" />

              <div class="text-center">
                <my-button
                  class="mt-3 col-xl-9 col-sm-8"
                  :item="confirmButton"
                  @buttonValue="parserHandler"
                />
              </div>

              <div class="align-middle">
                <p class="mt-5 output text-center">
                  <span>Результат:</span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, dignissimos neque omnis perferendis nemo fugit earum libero, cum alias, veniam quo beatae minima. Facilis repellendus aut saepe quas iste quia.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import MyButton from "../components/UI/MyButton.vue";
import MyTextArea from "../components/UI/MyTextArea.vue";
export default {
  components: { MyButton, MyTextArea },
  name: "pareser",
  data: () => ({
    parserButtons: [
      { title: "GloryHoliday" },
      { title: "Kiwi" },
      { title: "FlyArystan" },
      { title: "S7" },
      { title: "SkyUp" },
      { title: "TUI" },
      { title: "DOCS" },
      { title: "ACR" },
    ],
    confirmButton: "ТИЦЬ",
    parser: "",
  }),
  methods: {
    parserHandler(e) {
      if (e !== "ТИЦЬ") {
        this.parser = e;
      }
      return e;
    },
  },
};
</script>

<style>
</style>