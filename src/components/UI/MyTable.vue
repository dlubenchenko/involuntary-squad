<template>
  <div>
    <table class="table table-hover">
      <thead class="thead-dark sticky-table">
        <tr>
          <th scope="col" v-for="(item, i) of items[0]" :key="i">
            {{ item }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(val, i) of items.slice(1)" :key="i">
          <td
            class="text-center"
            :colspan="items.length"
            v-if="!val[1] && !val[2] && !val[3] && !val[4] && !val[5]"
          >
            <h5>
              <b>{{ val[0] }}</b>
            </h5>
          </td>
          <td v-else v-for="(v, i) of val" :key="i">
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
  name: "my-table",
  components: { MyButton },
  props: ["items", "btn"],
};
</script>

<style>
.sticky-table {
  position: sticky;
  top: 3.5rem;
  pointer-events: none;
}
</style>