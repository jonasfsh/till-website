<template>
  <div id="app">
    <div :class="{ 'dark-mode': isDarkMode }">
      <Navbar :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      isDarkMode: false
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark-mode', this.isDarkMode);
    }
  }
}
</script>

<style>
body {
  background-color: #ffffff;
  color: #ffffff;
}

/* Dark Mode Styles */
body.dark-mode {
  background-color: #212529;
  color: #ffffff;
}
</style>

