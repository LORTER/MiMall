<!--  -->
<template>
  <div class="order-header">
    <div class="container">
      <div class="logo-title">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="title">
          <h2>
            {{title}}
            <slot name="tip"></slot>
            <slot name="la"></slot>
          </h2>
        </div>
      </div>
      <div class="username">
        <a href="javascript:;">{{$store.state.username}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order-header",
  components: {},
  props: {
    title:{
      type:String
    }
  },
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
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
.order-header {
  padding: 30px 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo-title {
      display: flex;
      align-items: center;
      .title {
        margin-left: 54px;
        height: 55px;
        line-height: 55px;
        font-size: 14px;
        h2 {
          font-size: 28px;
          color: #333;
        }
        span {
          display: inline-block;
          margin-left: 24px;
          font-size: 14px;
          font-weight: bold;
          color: #999;
        }
      }
    }
    .username {
      a {
        color: #666;
        font-size: 16px;
      }
    }
  }
}
</style>