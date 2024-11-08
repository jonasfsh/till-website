<template>
  <div id="app">
    <div :class="{ 'dark-mode': isDarkMode }">
      <Navbar :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />
      <About />
      <router-view />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';


export default {
  name: 'App',
  components: {
    Navbar,
  },
  setup() {
    const isDarkMode = ref(false);

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      document.body.classList.toggle('dark-mode', isDarkMode.value);
    };

    return {
      isDarkMode,
      toggleDarkMode
    };
  }
}
</script>



<style>
body {
  background-color: #ffffff;
  color: #ffffff;
}

body.dark-mode {
  background-color: #212529;
  color: #ffffff;
}
</style>

