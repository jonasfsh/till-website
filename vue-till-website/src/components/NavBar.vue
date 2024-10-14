<template>
  <nav :class="['navbar', 'navbar-expand-lg', isDarkMode ? 'bg-dark' : 'bg-light']">
    <a class="navbar-brand" :class="isDarkMode ? 'text-light' : 'text-dark'" href="#">RAIK SCHACHE</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item active">
          <router-link class="nav-link" :class="isDarkMode ? 'text-light' : 'text-dark'" to="/">HOME</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :class="isDarkMode ? 'text-light' : 'text-dark'" to="/photography">PHOTOGRAPHY</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :class="isDarkMode ? 'text-light' : 'text-dark'" to="/contact">CONTACT</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" :class="isDarkMode ? 'text-light' : 'text-dark'" href="https://instagram.com" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']" />
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="isDarkMode ? 'text-light' : 'text-dark'" href="#" @click="toggleDarkMode">
            <font-awesome-icon :icon="isDarkMode ? faSun : faMoon" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faMoon,faSun, faInstagram);

export default defineComponent({
  name: 'NavBar',
  components: {
    FontAwesomeIcon

  },
  props: {
    isDarkMode: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleDarkMode() {
      this.$emit('toggle-dark-mode');
    }
  }
});
</script>

<style scoped>
.navbar {
  transition: background-color 0.3s, color 0.3s;
}

.navbar-brand, .nav-link {
  transition: color 0.3s;
}
</style>
