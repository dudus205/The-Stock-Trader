<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'


export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  body{
    background-color: #14213d;
    padding: 0;
    margin: 10px 10%;
    font-family: 'Titillium Web', sans-serif;
  }

</style>
