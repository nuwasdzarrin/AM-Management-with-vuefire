<template>
  <div id="app">
    <template>
      <app-header></app-header>
      <transition name="fade">
        <div class="gap">
          <router-view></router-view>
        </div>
      </transition>
      <app-bottomnavbar></app-bottomnavbar>
    </template>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
