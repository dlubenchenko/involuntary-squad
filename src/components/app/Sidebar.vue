<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link
        v-for="link in links"
        :key="link.url"
        active-class="active"
        :to="link.url"
        custom
        v-slot="{ href, navigate, isExactActive }"
    >
      <li :class="[isExactActive && 'active']">
        <a :href="href" @click="navigate" class="waves-effect waves-orange pointer active">{{
            link.title
          }}
          <span :class="link.class"></span>
          </a>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    links: [
      {title: 'Домашня сторінка', url: '/', class: ''},
      {title: 'Парсер', url: '/parsers', class: ''},
      {title: 'Повернення', url: '/refunds', class: ''},
      {title: 'Переоформлення', url: '/reissue', class: ''},
      {title: 'Інформація по АК', url: '/airlines-info', class: ''},
      {title: 'Контакти з АК', url: '/airlines-contacts', class: 'new badge red floating'},
      {title: 'Переклади причин', url: '/translates', class: 'new badge red floating'},
      {title: 'Статистика', url: '/statistic', class: 'new badge red floating'},
      {title: 'Команди', url: '/helper', class: 'new badge red floating'},
    ],
  })
}
</script>

<style>
.active {
  font-weight: 800;
}

ul.sidenav {
  position: fixed;
  top: 60px;
}

.floating {
  margin-right: -20px;
}
</style>