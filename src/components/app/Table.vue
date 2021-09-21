<template>
  <table>
    <thead>
    <tr>
      <th v-for="c in reissue" class="center">{{ c }}</th>
    </tr>
    </thead>

    <tbody>
    <tr>
      <td v-for="c in modalContent" class="center">{{ c.length ? c : '-----' }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['reissue', 'modalContent']
}
</script>

<style>
td {
  /*border: 1px solid orange;*/
}

</style>