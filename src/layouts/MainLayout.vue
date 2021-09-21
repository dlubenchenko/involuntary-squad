<template>
  <div class="app-main-layout">
    <Navbar
      @click="isOpen = !isOpen"
      id="toTop"
    />

    <Sidebar v-model="isOpen"/>

    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">

        <router-view/>

      </div>
    </main>

    <div class="fixed-action-btn">
      <a
          class="btn-floating btn-large amber darken-4"
          href="#"
          v-scroll-to="'#toTop'"
      >
        <i class="large material-icons">arrow_upward</i>
      </a>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
import Sidebar from "@/components/app/Sidebar";
import messages from "@/utils/messages";
import firebase from "firebase/app";
import dateFilter from "@/filters/date.filter";
export default {
  name: 'main-layout',
  computed: {
    error() {
      return this.$store.getters.error
    },
  },
  watch: {
    error(fbError) {
      console.log(fbError)
      this.$error(messages[fbError.code] || 'Щось пішло не так')
    }
  },
  data: () => ({
    isOpen: true,
  }),
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')

      const auth = firebase.auth().currentUser.metadata.lastSignInTime

      await this.$store.dispatch('createInfo', {
        info: auth,
        date: dateFilter(new Date(), 'datetime').toString(),
        choice: 'last-login'
      })
    }
  },
  components: {Sidebar, Navbar}
}
</script>