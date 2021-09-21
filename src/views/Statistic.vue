<template>
  <div>
    <div class="text-center">
      <h2 class="mt-4">Історія запитів</h2>
      <hr />
    </div>
    <div class="row">
      <div class="col-12 text-center">

        <h5>Фільтр</h5>
      </div>
      <div class="col-lg col-md-12 mt-2">
        <v-select :options="options"/>
      </div>
      <div class="col-lg col-md-12 mt-2">
        <v-select :options="options"/>
      </div>
    </div>
    <div class="row">
      <div class="col-12 mt-4">
        <my-table :items="statistic" :btn="'Open'" />
      </div>
    </div>
  </div>
</template>

<script>
import MyTable from "../components/UI/MyTable.vue";
export default {
  components: { MyTable },
  data: () => ({
    statistic: [
      {
        Name: "Lubenchenko Dmytro",
        System: "Kiwi",
        Time: "17.09.21, 23:38:46",
        More: "btn",
      },
      {
        Name: "Lubenchenko Dmytro",
        System: "Kiwi",
        Time: "17.09.21, 23:38:46",
        More: "btn",
      },
      {
        Name: "Lubenchenko Dmytro",
        System: "Kiwi",
        Time: "17.09.21, 23:38:46",
        More: "btn",
      },
      {
        Name: "Lubenchenko Dmytro",
        System: "Kiwi",
        Time: "17.09.21, 23:38:46",
        More: "btn",
      },
      {
        Name: "Lubenchenko Dmytro",
        System: "Kiwi",
        Time: "17.09.21, 23:38:46",
        More: "btn",
      },
      {
        Name: "Lubenchenko Dmytro",
        System: "Kiwi",
        Time: "17.09.21, 23:38:46",
        More: "btn",
      },
    ],
        options: ["foo", "bar", "baz", 'led', 'lwo'],
  }),
};
</script>

<style>
</style>