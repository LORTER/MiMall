<template>
  <div class="nav-bar" :class="{'is_fixed':isFixed}">
    <div class="container">
      <div class="pro-title">{{title}}</div>
      <div class="pro-param">
        <a href>概述</a>
        <span>|</span>
        <a href>参数</a>
        <span>|</span>
        <a href>用户评价</a>
        <span></span>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "product-param",
  props:{
    title:{
      type:String
    }
  },
  data() {
    return {
      isFixed: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
  },
  methods: {
    initHeight() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > 152 ? true : false;
    }
  },
  destroyed(){
      window.removeEventListener('scroll',this.initHeight);
  }
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/button.scss";
@import "./../assets/scss/mixin.scss";
.nav-bar {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid $colorH;
  background: $colorG;
  transition: all 0.3s;
  z-index:10;

  .container {
    @include flex();
    .pro-title {
      font-size: $fontH;
      color: $colorB;
      font-weight: bold;
    }
    .pro-param {
      > a {
        font-size: $fontJ;
        color: $colorC;
      }
      span {
        margin: 0 10px;
        vertical-align: top;
        &:last-child {
          margin: 0 10px 0 0;
        }
      }
    }
  }
  &.is_fixed {
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 5px 5px $colorE;
    transition: all 0.3s;
  }
}
</style>