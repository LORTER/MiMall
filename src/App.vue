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
    // storage.clear('a','user')
    this.getUser();
    this.getCartCount();
  },
  methods:{
    getUser(){
      this.axios.get('/user').then((res={})=>{
        // to-do 保存到vuex里面
        this.$store.dispatch('saveUserName',res.username);
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res=0)=>{
         this.$store.dispatch('saveCartCount',res);
      })
    }
  }
}
</script>

<style lang='scss'>
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/mixin.scss';
@import './assets/scss/button.scss';

</style>
