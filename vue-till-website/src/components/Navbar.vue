<template>
  <nav :class="['navbar', 'navbar-expand-lg', isDarkMode ? 'bg-dark' : 'bg-light']">
    <a class="navbar-brand" :class="isDarkMode ? 'text-light' : 'text-dark'" href="#">BÜRO PULST</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item active">
          <router-link class="nav-link" :class="isDarkMode ? 'text-light' : 'text-dark'" to="/">HOME</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :class="isDarkMode ? 'text-light' : 'text-dark'" to="/projects">PROJEKTE</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :class="isDarkMode ? 'text-light' : 'text-dark'" to="/contact">KONTAKT</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :class="isDarkMode ? 'text-light' : 'text-dark'" to="/about">ÜBER</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" :class="isDarkMode ? 'text-light' : 'text-dark'" href="https://linkedin.com" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
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
import { defineComponent, toRefs } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default defineComponent({
  name: 'Navbar',
  components: {
    FontAwesomeIcon
  },
  props: {
    isDarkMode: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const { isDarkMode: darkMode } = toRefs(props);

    const toggleDarkMode = () => {
      emit('toggle-dark-mode');
    };

    return {
      darkMode,
      faMoon,
      faSun,
      toggleDarkMode
    };
  }
});
</script>


<style scoped>
.navbar {
  transition: background-color 0.2s, color 0.2s;
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.8rem; 
  letter-spacing: 0.5rem; 
  margin-left: 20px;
}

.nav-item, nav-link:last-child {
  margin-right: 20px;
}

.nav-link {
  font-size: 1.0rem;
  letter-spacing: 0.1rem;
}

.navbar-brand, .nav-link {
  transition: color 0.3s;
}
</style>
