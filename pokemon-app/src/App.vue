<template>
  <div class="container">
    <div class="pokemon"> 
      <router-view></router-view>
      <div class="pokemon-links has-text-centered"> 
        <router-link to="/charizard">/charizard</router-link>
        <router-link to="/blastoise">/blastoise</router-link>
        <router-link to="/venusaur">/venusaur</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
@import "https://unpkg.com/bulma/css/bulma.css";
@import "./assets/styles/styles.css";
</style>
