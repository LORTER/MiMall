<!--  -->
<template>
  <div class="fotter">
    <div class="footer-login">
      <img src="/imgs/logo-footer.png" alt />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href>河畔一角主页</a>
      <a href>Vue全栈课程</a>
      <a href>React全家桶课程</a>
      <a href>微信支付专项课程(H5+小程序+Node+Mongo)</a>
    </div>
    <div
      class="copyright"
    >© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</div>
  </div>
</template>

<script>
export default {
  name: "nav-footer",
  components: {},
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
@import './../assets/scss/config.scss';
.fotter {
  height:234px;
  border-top:4px solid $colorA;
  background-color:#333;
  color:#999;
  font-size:16px;
  text-align: center;
  .footer-login{
    display: flex;
    margin-top:46px;
    margin-bottom: 31px;
    flex-direction: column;
    align-items: center;
    img{
      width:53px;
      height:36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: inline-block;
      position: relative;
      color:#999;
      margin-right: 20px;
      &:not(:last-child)::before {
        content: "";
        position: absolute;
        margin-right:-10px;
        top: 15%;
        right: 0;
        border-left: 1px solid #999;
        height: 70%;
      }
    }
  }
  .copyright{
    margin-top:13px;
  }
}
</style>