<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage'
export default {
  name: 'App',
  components: {
  },
  mounted(){
    console.log(1)
    // storage.setItem('a',3)
    // storage.setItem('user',{a:1})
    // storage.setItem('abc',{a:2},'user')
    storage.clear('a','user')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
