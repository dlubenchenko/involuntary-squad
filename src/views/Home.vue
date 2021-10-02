<template>
  <div class="container">
    <div class="text-center">
      <h2 class="mt-4">Домашня сторінка</h2>
      <hr />
    </div>

    <div>
      <div class="home-text">
        <div class="row">
          <div class="col-md output">
            <h5 class="text-center">Корисні посилання</h5>
              <hr />
            <ul>
              <li class="list">
                <a class="list" v-for="(item, i) of contacts" :key="i" :href="item.url" target="blanck">{{ item.title }}</a>
              </li>
            </ul>
          </div>
          <div class="col-md output">
            <h5 class="text-center">Додано на сайт</h5>
            <hr />
            <ul>
              <li>Парсер</li>
              <li>Переклади</li>
              <li>Контакти АК</li>
              <li>Helper</li>
              <li>Моя сторінка</li>
              <li>Статистика</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-md output">
            <h5 class="text-center">Статистика</h5>
            <hr />
          </div>
          <div class="col-md output">
            <h5 class="text-center">Дані</h5>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    contacts: [
      { title: "Адмінка", url: "https://bos.ticketstravelnetwork.com/#" },
      {
        title: "Зендеск",
        url: "https://ticketstravelnetworksupport.zendesk.com/access/unauthenticated?flash_digest=3978cbc52d22da484e70450ac2fd713266dbf0f1&return_to=https%3A%2F%2Fticketstravelnetworksupport.zendesk.com%2Fagent",
      },
      { title: "Бітрікс", url: "https://ttnbook.com/" },
      { title: "Jira", url: "https://j.tickets.ua/" },
      { title: "Confluence", url: "https://c.tickets.ua/" },
      { title: "OTRS", url: "https://h.tickets.ua/otrs/index.pl" },
      { title: "Queue", url: "https://pug.ttndev.com/" },
      { title: "Фанхост", url: "https://f.tickets.com.ua/" },
      { title: "CRM", url: "https://crm.tickets.ua/" },
      { title: "Hahn Air", url: "https://www.hahnair.com/ru/quickcheck#/form" },
      {
        title: "Офіси ГДС",
        url: "https://docs.google.com/spreadsheets/d/1Pw2oEMGb8h5S3yYjAokRiVRhvz3JiBv3RjljW9SilWQ/edit?pli=1#gid=2132180304",
      },
      {
        title: "Таблиця НХ",
        url: "https://docs.google.com/spreadsheets/d/1k9tbJZiyf86DahWrE89Y6DT__cZ44QXHpArJA6k73PE/edit?pli=1#gid=0",
      },
      {
        title: "Графік роботи",
        url: "https://docs.google.com/spreadsheets/d/1JerDt9t4ZvHqUcZ-d2C8czGbLyUvlf-Np1XRgV3uNCQ/edit?pli=1#gid=1188325543",
      },
      {
        title: "Графік відпусток",
        url: "https://docs.google.com/spreadsheets/u/1/d/1dAhS8WLZYX9rBjkh4aogpBbYC3603wLWgQWegzK70ro/edit#gid=0",
      },
      {
        title: "KPI INVOL",
        url: "https://docs.google.com/spreadsheets/d/1RDm85zQGrI9IbdcjI1dxUYw3cSSwBI5xEVxkuHtIbfw/edit#gid=1372680749",
      },
    ],
  }),
};
</script>

<style>
.home-text {
  line-height: 1.4rem;
}
</style>
