<!--  -->
<template>
  <div class>
    <product-param>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
  </div>
</template>

<script>
import ProductParam from '../components/ProductParam'

export default {
  name: "product",
  components: {
    ProductParam
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
<style lang="scss" scoped>

</style>