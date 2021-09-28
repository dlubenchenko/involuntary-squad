<template>
  <div>
    <table class="table table-hover sticky">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col" v-for="(item, i) of Object.keys(items[0])" :key="i">
            {{ item }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(val, i) of items" :key="i">
          <th scope="row">{{ i + 1 }}</th>
          <td v-for="(v, i) of Object.values(val)" :key="i">
            <p v-if="v !== 'btn'">
              {{ v }}
            </p>
            <p v-else class="align-middle">
              <my-button :item="btn" />
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
export default {
  name: 'my-table',
  components: { MyButton },
  props: ['items', 'btn'],
};
</script>

<style>

</style>