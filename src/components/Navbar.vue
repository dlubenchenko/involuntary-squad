<template>
  <nav class="navbar navbar-expand-xl navbar-dark bg-dark sticky-top">
    <router-link class="navbar-brand" to="/">INVOLUNTARTY SQUAD</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="(item, i) of menuItems" :key="i">
          <router-link
            class="nav-link"
            active-class="active"
            :to="item.url"
            exact
            >{{ item.title }}</router-link
          >
        </li>
        <li class="navbar-text">
          <b class="text-white">{{ date | date("datetime") }}</b>
        </li>

        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Вася Пупкін
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <router-link class="dropdown-item" to="/profile"
              >Профіль</router-link
            >
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
      { title: "Парсер", url: "/parser" },
      { title: "Повернення", url: "/refund" },
      { title: "Переоформлення", url: "/reissue" },
      { title: "Контакти", url: "/contacts" },
      { title: "Переклади", url: "/translates" },
      { title: "Helper", url: "/helper" },
      { title: "Інфо АК", url: "/airlines-info" },
      { title: "Статистика", url: "/statistic" },
    ],
    date: new Date(),
    interval: null,
  }),
  methods: {
    logout() {
      this.$router.push("/login?message=logout");
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
</style>