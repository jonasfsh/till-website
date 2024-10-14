<template>
  <div id="app">
    <div :class="{ 'dark-mode': isDarkMode }">
      <NavBar :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />
      <router-view />
    </div> 
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
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

