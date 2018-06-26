<template>
  <div id="app">
    <img src="./assets/logo.png">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import navbar from '@/components/navbar/navbar'
export default {
  name: 'App',
  components: {
    navbar: navbar
  },
  created () {
    this.$store.dispatch('tryAutoLogin')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
