<template>
  <div>
    <div class="page-title">
      <h3>Контакти АК</h3>
    </div>

    <div class="center" v-if="loading">
      <loader/>
    </div>

    <div v-else>
      <div>
        <my-autocomplete :max-length="2" @update="setAirline" :options="airlines" :label="'Почніть вводити дві літери авіакомпанії'"/>
      </div>

      <div>
        <table class="highlight" style="width:100%" v-for="(al, i) of selectedAirline" :key="i">
          <tr>
            <th rowspan="3" class="center" style="width: 10%">{{ bsp[i] }}</th>
            <td class="td2"><i>Agency Support Tel. NO.</i></td>
            <td style="width: 70%"><b>{{ al[0] }}</b></td>
          </tr>
          <tr>
            <td class="td2"><i>Agency Support e-mail address</i></td>
            <td style="width: 70%"><b>{{ al[1] }}</b></td>
          </tr>
          <tr>
            <td class="td2"><i>Comments</i></td>
            <td style="width: 70%"><b>{{ al[2] }}</b></td>
          </tr>
        </table>
      </div>

    </div>


  </div>
</template>
<script>
import MySelect from "@/components/UI/MySelect";
import MyAutocomplete from "@/components/UI/MyAutocomplete";
import Loader from "@/components/app/Loader";
import dateFilter from "@/filters/date.filter";

export default {
  components: {Loader, MyAutocomplete, MySelect},
  data: () => ({
    airlines: [],
    airlinesContacts: [],
    selectedAirline: [],
    loading: true,
    bsp: ['Head Office', 'UA', 'RU', 'DE', 'KZ', 'USA', 'EE', 'AT', 'RO MD', 'PL', 'TR', 'ES', 'FR', 'NL', 'IL']
  }),
  async mounted() {
    const spreadsheetId1 = '1eK-bhcCnx6PiA9WmZSysdo9Lr2kVOS-IXzPghUwtKak'
    await fetch(`https://docs.google.com/spreadsheets/d/${spreadsheetId1}/gviz/tq?tqx=out:json`)
        .then(res => res.text())
        .then(text => {
          const json = JSON.parse(text.substr(47).slice(0, -2))
          let temp = (Array.from(json.table.rows, e => e['c'])).map(el => Array.from(el, e => e ? e['v'] : e = ''))
          this.airlines = temp.map(e => e[1])
          this.airlinesContacts = temp
          // console.log(this.airlines)
          // console.log(this.airlinesContacts)
          // console.log(json)
          this.loading = false
        })
  },
  methods: {
    async setAirline(e) {
      // console.log(e)
      try {
        await this.$store.dispatch('createInfo', {
          info: `${e}`,
          date: dateFilter(new Date(), 'datetime').toString(),
          choice: 'info/airline'
        })
      } catch (er) {}
      let temp = this.airlinesContacts.filter(el => el[1] === e)
      // this.selectedAirline = this.airlinesContacts.filter(el => el[1] === e)
      for (let i = 0; i < temp[0].length / 3; i++) {
        this.selectedAirline[i] = temp[0].slice(i * 3, i * 3 + 3)
      }
      this.selectedAirline = this.selectedAirline.slice(1)
      // console.log(this.selectedAirline)
      // console.log(temp)


    }
  }
}
</script>

<style scoped>
table, tr, td {
  /*border: 1px solid teal;*/
}

td {
  /*width: 70%;*/
}

.td2 {
  width: 20%;
}
</style>