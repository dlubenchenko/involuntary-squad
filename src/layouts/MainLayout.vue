<template>
  <div>
    <Navbar />
    <main class="container-fluid">
      <router-view />
    </main>
    <div>
      <a class="to__up" href="#">
        <svg
          width="64px"
          height="64px"
          viewBox="-96 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import MyButton from "../components/UI/MyButton.vue";
export default {
  components: {
    Navbar,
    MyButton,
  },
};
</script>

<style>
.to__up {
  position: fixed;
  bottom: 50px;
  right: 50px;
  border: 5px solid grey;
  z-index: 10;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.to__up svg {
  position: relative;
  bottom: 14px;
  right: 5px;
  width: 50px;
}
</style>