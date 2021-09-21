<template>
  <div>
    <div class="page-title">
      <h3>
        {{ greetTime }} <b>{{ getAgent() }}</b>
      </h3>
    </div>
    <div>
      <h5>На разі доступно</h5>
      <ol>
        <li>
          <p>Парсер</p>
        </li>
        <li>
          <p>Зміна імені</p>
        </li>
        <li>
          <p>Інформація АК</p>
        </li>
        <li>
          <p><b>Переклади причин</b></p>
        </li>
        <li>
          <p><b>Контакти АК</b></p>
        </li>
        <li>
          <p><b>Статистика</b></p>
        </li>
      </ol>

      <h5>В наступних версіях</h5>
      <ol>
        <li>
          <p>Повернення</p>
        </li>
        <li>
          <p>Переоформлення/команди</p>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import dateFilter from "@/filters/date.filter";

export default {
  name: "Home",
  data: () => ({
    dayTime: new Date(),
  }),
  computed: {
    greetTime() {
      if (dateFilter(this.dayTime, "time").slice(0, 2) < 7) {
        return "Доброї ночі";
      } else if (dateFilter(this.dayTime, "time").slice(0, 2) < 10) {
        return "Доброго ранку";
      } else if (dateFilter(this.dayTime, "time").slice(0, 2) < 18) {
        return "Доброго дня";
      } else if (dateFilter(this.dayTime, "time").slice(0, 2) <= 23) {
        return "Доброго вечора";
      }
    },
  },
  methods: {
    getAgent() {
      if (this.$store.getters) {
        return this.$store.getters.info.name;
      }
    },
  },
};
</script>
