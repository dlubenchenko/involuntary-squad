<template>
  <div>
    <div class="text-center">
      <h2 class="mt-4">Інформаці по авіакомпаніям</h2>
      <hr />
    </div>
    <div>
      <my-table :items="unactive" :btn="click"/>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    click: 'Open',
    unactive: [
      {Locator: 'UEQPXC', GDS: 'sabre', 'Flight Date': '17SEP21', 'Issue Office': '77RI', "Letter Number": '770170', Comment: 'Тикет ‭#728678‬ создан', 'Edit': 'btn'},
      {Locator: 'CJELLP', GDS: 'sabre', 'Flight Date': '17SEP21', 'Issue Office': '77RI', "Letter Number": '770170', Comment: 'Тикет ‭#728678‬ создан', 'Edit': 'btn'},
      {Locator: 'FQRVSZ', GDS: 'sabre', 'Flight Date': '17SEP21', 'Issue Office': '77RI', "Letter Number": '770170', Comment: 'Тикет ‭#728678‬ создан', 'Edit': 'btn'},
      {Locator: 'SBILBJ', GDS: 'sabre', 'Flight Date': '17SEP21', 'Issue Office': '77RI', "Letter Number": '770170', Comment: 'Тикет ‭#728678‬ создан', 'Edit': 'btn'},
      {Locator: 'JTLAST', GDS: 'sabre', 'Flight Date': '17SEP21', 'Issue Office': '77RI', "Letter Number": '770170', Comment: 'Тикет ‭#728678‬ создан', 'Edit': 'btn'},
      {Locator: 'JTLAST', GDS: 'sabre', 'Flight Date': '17SEP21', 'Issue Office': '77RI', "Letter Number": '770170', Comment: 'Тикет ‭#728678‬ создан', 'Edit': 'btn'},
      {Locator: 'JTLAST', GDS: 'sabre', 'Flight Date': '17SEP21', 'Issue Office': '77RI', "Letter Number": '770170', Comment: 'Тикет ‭#728678‬ создан', 'Edit': 'btn'},
      {Locator: 'JTLAST', GDS: 'sabre', 'Flight Date': '17SEP21', 'Issue Office': '77RI', "Letter Number": '770170', Comment: 'Тикет ‭#728678‬ создан', 'Edit': 'btn'},
      {Locator: 'JTLAST', GDS: 'sabre', 'Flight Date': '17SEP21', 'Issue Office': '77RI', "Letter Number": '770170', Comment: 'Тикет ‭#728678‬ создан', 'Edit': 'btn'},
      {Locator: 'JTLAST', GDS: 'sabre', 'Flight Date': '17SEP21', 'Issue Office': '77RI', "Letter Number": '770170', Comment: 'Тикет ‭#728678‬ создан', 'Edit': 'btn'},
      {Locator: 'JTLAST', GDS: 'sabre', 'Flight Date': '17SEP21', 'Issue Office': '77RI', "Letter Number": '770170', Comment: 'Тикет ‭#728678‬ создан', 'Edit': 'btn'},
      {Locator: 'JTLAST', GDS: 'sabre', 'Flight Date': '17SEP21', 'Issue Office': '77RI', "Letter Number": '770170', Comment: 'Тикет ‭#728678‬ создан', 'Edit': 'btn'},
      {Locator: 'JTLAST', GDS: 'sabre', 'Flight Date': '17SEP21', 'Issue Office': '77RI', "Letter Number": '770170', Comment: 'Тикет ‭#728678‬ создан', 'Edit': 'btn'},
      {Locator: 'JTLAST', GDS: 'sabre', 'Flight Date': '17SEP21', 'Issue Office': '77RI', "Letter Number": '770170', Comment: 'Тикет ‭#728678‬ создан', 'Edit': 'btn'},
      {Locator: 'JTLAST', GDS: 'sabre', 'Flight Date': '17SEP21', 'Issue Office': '77RI', "Letter Number": '770170', Comment: 'Тикет ‭#728678‬ создан', 'Edit': 'btn'},
      {Locator: 'JTLAST', GDS: 'sabre', 'Flight Date': '17SEP21', 'Issue Office': '77RI', "Letter Number": '770170', Comment: 'Тикет ‭#728678‬ создан', 'Edit': 'btn'},
    ],
  })
};
</script>

<style>
</style>