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

<style lang='scss' scope>
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
</style>
