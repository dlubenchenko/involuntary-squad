<template>
  <nav class="navbar navbar-expand-xl navbar-dark bg-dark sticky-top">
    <router-link class="navbar-brand" to="/">INVOLUNTARY SQUAD</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
                        <li class="nav-item" v-for="item of menuItems" :key="item.id">
                          <router-link
                            class="nav-link"
                            active-class="active"
                            :to="item.url"
                            exact
                            >{{ item.title }}</router-link
                          >
                        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="text-white nav-link">{{ date | date("datetime") }}</a>
        </li>
        <li class="nav-item">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ name }}
                      </a>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <router-link class="dropdown-item"  to="/profile">Профіль</router-link>
                        <a @click.prevent="logout" class="dropdown-item" href="#">Вийти</a>
                      </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    menuItems: [
      { id: 1, title: "Парсер", url: "/parser" },
      { id: 2, title: "Повернення", url: "/refund" },
      // { id: 3, title: "Переоформлення", url: "/reissue" },
      { id: 4, title: "Контакти", url: "/contacts" },
      { id: 5, title: "Переклади", url: "/translates" },
      { id: 6, title: "Helper", url: "/helper" },
      // { id: 7, title: "Інфо АК", url: "/airlines-info" },
      // { id: 8, title: "Статистика", url: "/statistic" },
    ],
    date: new Date(),
    interval: null,
  }),
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push("/login?message=logout");
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  computed: {
    name() {
      return this.$store.getters.info.name
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
</style>