<!--  -->
<template>
  <div class>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from "./../components/NavHeader";
import NavFooter from "./../components/NavFooter";
export default {
  name: "nav-home",
  components: {
    NavHeader,
    NavFooter
  },
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {}
};
</script>
<style>
</style>