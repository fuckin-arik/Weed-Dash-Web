<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/store">Store</RouterLink>
      <img class="logo" src="./assets/asda.png" />
      <RouterLink to="/account">Account</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  position: sticky;
  top: 0;
  line-height: 1.5;
  max-height: 100vh;
  width: 100%;
  background-color: black;
  color: white;
}

.logo {
  display: block;
  height: 2em;
}

nav {
  display: flex;
  justify-content: center;
  vertical-align: middle;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
}

nav a.router-link-exact-active:hover {
}

nav a {
  color: white;
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
