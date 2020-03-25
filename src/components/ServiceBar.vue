<!--  -->
<template>
  <div class="service">
    <div class="container">
      <ul>
        <li>
          <span class="icon-setting"></span>
          预约维修服务
        </li>
        <li>
          <span class="icon-7day"></span>
          7天无理由退货
        </li>
        <li>
          <span class="icon-15day"></span>
          15天免费换货
        </li>
        <li>
          <span class="icon-post"></span>
          满99元包邮
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "service-bar",
  components: {}
};
</script>
<style lang='scss' scoped>
@import "../assets/scss/mixin.scss";
.container {
  padding: 33px 0;
  color: #666;
  font-size: 16px;
  ul {
    @include flex(center, center);
    li {
      margin-right: 60px;
      position: relative;
      &:not(:last-child)::before {
        height: 80%;
        content: "";
        border-right: 1px solid #999;
        position: absolute;
        right: -30px;
        top: 10%;
      }
      span {
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-right: 8px;
      }
      .icon-setting {
        @include bgImg(20px, 20px, "/imgs/icon-setting.png");
      }
      .icon-7day {
        @include bgImg(20px, 20px, "/imgs/icon-7day.png");
      }
      .icon-15day {
        @include bgImg(20px, 20px, "/imgs/icon-15day.png");
      }
      .icon-post {
        @include bgImg(20px, 20px, "/imgs/icon-post.png");
      }
    }
  }
}
</style>