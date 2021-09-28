<template>
  <div>
    <div class="text-center">
      <h2 class="mt-4">Helper</h2>
      <hr />
    </div>
    <div class="row">
      <div class="col-12">
        
      </div>
      <div class="col-12">
        <my-table :items="commands"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    commands: [
      {'': 'Список очередей', 'AMADEUS': 'QT', 'SABRE': 'QC /', 'SIRENA': 'ОЧР', 'B2': 'QC/', 'GABRIEL': 'QT                 QTA', 'GALILEO': 'QCA'},
      {'': 'Список очередей', 'AMADEUS': 'QT', 'SABRE': 'QC /', 'SIRENA': 'ОЧР', 'B2': 'QC/', 'GABRIEL': 'QT                 QTA', 'GALILEO': 'QCA'},
      {'': 'Список очередей', 'AMADEUS': 'QT', 'SABRE': 'QC /', 'SIRENA': 'ОЧР', 'B2': 'QC/', 'GABRIEL': 'QT                 QTA', 'GALILEO': 'QCA'},
      {'': 'Список очередей', 'AMADEUS': 'QT', 'SABRE': 'QC /', 'SIRENA': 'ОЧР', 'B2': 'QC/', 'GABRIEL': 'QT                 QTA', 'GALILEO': 'QCA'},
      {'': 'Список очередей', 'AMADEUS': 'QT', 'SABRE': 'QC /', 'SIRENA': 'ОЧР', 'B2': 'QC/', 'GABRIEL': 'QT                 QTA', 'GALILEO': 'QCA'},
      {'': 'Список очередей', 'AMADEUS': 'QT', 'SABRE': 'QC /', 'SIRENA': 'ОЧР', 'B2': 'QC/', 'GABRIEL': 'QT                 QTA', 'GALILEO': 'QCA'},
      {'': 'Список очередей', 'AMADEUS': 'QT', 'SABRE': 'QC /', 'SIRENA': 'ОЧР', 'B2': 'QC/', 'GABRIEL': 'QT                 QTA', 'GALILEO': 'QCA'},
      {'': 'Список очередей', 'AMADEUS': 'QT', 'SABRE': 'QC /', 'SIRENA': 'ОЧР', 'B2': 'QC/', 'GABRIEL': 'QT                 QTA', 'GALILEO': 'QCA'},
    ]
  })
  }
</script>

<style>
</style>