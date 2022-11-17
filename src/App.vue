<template>
  <div id="app">
    <NavBar />
    <Login /> 
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Login
  }
  
}
</script>

<style>

</style>
