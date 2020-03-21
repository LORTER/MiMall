<!-- cart -->
<template>
  <div class>
    <order-header></order-header>
    cart
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from "./../components/OrderHeader";
import NavFooter from "./../components/NavFooter";

export default {
  name: "cart",
  components: {
    OrderHeader,
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
<style lang='scss' scoped>
</style>