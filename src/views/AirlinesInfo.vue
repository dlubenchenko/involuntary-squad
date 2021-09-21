<template>
  <div>
    <div class="page-title">
      <h3>Інформація АК</h3>
    </div>


    <div class="center" v-if="loading">
      <loader/>
    </div>

    <div class="center" v-else>

      <div class="row">
        <form class="col s12" @submit.prevent>
          <div class="row">
            <div class="input-field col s12">
              <input
                  id="option"
                  type="text"
                  maxlength="2"
                  v-model="option"
                  @change="filterAirlines()"
              >
              <label for="option">Введіть дві літери АК</label>
            </div>
          </div>
        </form>
      </div>

      <table class="highlight" v-if="filterAirlines().length">
        <thead>
        <tr>
          <th><b>AK</b></th>
          <th class="center"><b>Reissue</b></th>
          <th class="center"><b>Refund</b></th>
<!--          <th class="center"><b>Contacts</b></th>-->
        </tr>
        </thead>


        <tbody>
        <tr v-for="(al, i) of filterAirlines()" :key="i">
          <td>{{ al[0] }}</td>
          <td class="center">
            <button class="btn-small btn waves-effect waves-light amber darken-4 reissue" @click="showModal(al, $event)">
              <i class="material-icons reissue">open_in_new</i>
            </button>
          </td>
          <td class="center">
            <button class="btn-small btn waves-effect waves-light amber darken-4 refund" @click="showModal(al, $event)">
              <i class="material-icons refund">open_in_new</i>
            </button>
          </td>
<!--          <td class="center">-->
<!--            <button class="btn-small btn waves-effect waves-light amber darken-4 contacts" @click="$store.commit('setError', 'поки не працює')">-->
<!--              <i class="material-icons reissue">open_in_new</i>-->
<!--            </button>-->
<!--          </td>-->
        </tr>
        </tbody>

      </table>
      <div v-else>
        <h6><b>Інформація по авіакомпанії відсутня в базі</b></h6>
      </div>

    </div>

    <my-modal :modalVisible="modalVisible"
              @show="modalNotVisible">

      <Table
          :reissue="modalOption"
          :modalContent="modalContent"
      />
    </my-modal>


  </div>
</template>


<script>

import Loader from "@/components/app/Loader";
import MyModal from "@/components/app/MyModal";
import Table from "@/components/app/Table";

export default {
  name: 'airlines-info',
  components: {Table, MyModal, Loader},
  data: () => {
    return {
      airlinesInfo: null,
      options: ['reissue', 'refund'],
      loading: true,
      option: '',
      modalOption: [],
      reissue: ['Зміна часу', 'Клас', 'Лист очік.', 'Інтервал дат', 'Code-share', 'Дод. Авториз.', 'Переписує ак', 'Зміна №рейсу', 'На інші ак', 'Примітки'],
      refund: ['Зміна часу', 'Дод. Авториз.', 'GDS', 'Дод. інфа'],
      modalVisible: false,
      modalContent: ''
    };
  },
  async mounted() {
    this.airlinesInfo = await this.$store.dispatch('fetchAirlines')
    this.airlinesInfo = this.airlinesInfo.result.filter(a => a[0] !== '')
    M.updateTextFields()
    this.loading = false
    // console.log(this.airlinesInfo[0])

  },
  methods: {
    filterAirlines() {
      return this.airlinesInfo.filter(a => a[0].includes(this.option.toUpperCase()))
    },
    showModal(al, e) {
      this.modalVisible = true
      if (e.target.classList.contains('reissue')) {
        this.modalContent = al.slice(1, 11)
      } else {
        this.modalContent = al.slice(12, 16)
      }
      this.modalOption = this[e.target.classList[e.target.classList.length - 1]]
    },
    modalNotVisible(a) {
      this.modalVisible = a
    }
  }

}
</script>

<style>

</style>