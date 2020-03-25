<!--  -->
<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="userName">{{userName}}</a>
          <a href="javascript:;" v-if="!userName" @click="login">登录</a>
          <a href="javascript:;" v-if="userName">我的订单</a>
          <a href="javascript:;" v-if="!userName">注册</a>
          <a href="javascript:;" class="my-cart" @click="gotoCart">
            <span class="icon-cart"></span> 购物车
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="item in phoneList" :key="item.id">
                  <a :href="'/#/product/'+item.id" target="_black">
                    <div class="pro-img">
                      <img
                        v-lazy="item.mainImage"
                        alt
                      />
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">￥{{item.price}}元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href target="_black">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png?thumb=1&w=160&h=110'"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi K30</div>
                    <div class="pro-price">1699元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_black">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png?thumb=1&w=160&h=110'"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi K30</div>
                    <div class="pro-price">1699元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_black">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png?thumb=1&w=160&h=110'"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi K30</div>
                    <div class="pro-price">1699元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_black">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png?thumb=1&w=160&h=110'"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi K30</div>
                    <div class="pro-price">1699元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_black">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png?thumb=1&w=160&h=110'"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi K30</div>
                    <div class="pro-price">1699元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_black">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png?thumb=1&w=160&h=110'"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi K30</div>
                    <div class="pro-price">1699元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_black">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png?thumb=1&w=160&h=110'"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi K30</div>
                    <div class="pro-price">1699元起</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <span class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href target="_black">
                    <div class="pro-img">
                      <img
                        v-lazy="'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg?thumb=1&w=160&h=110&f=webp&q=90'"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi 红米电视 70英寸 R70A</div>
                    <div class="pro-price">3199元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_black">
                    <div class="pro-img">
                      <img
                        v-lazy="'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg?thumb=1&w=160&h=110&f=webp&q=90'"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi 红米电视 70英寸 R70A</div>
                    <div class="pro-price">3199元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_black">
                    <div class="pro-img">
                      <img
                        v-lazy="'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg?thumb=1&w=160&h=110&f=webp&q=90'"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi 红米电视 70英寸 R70A</div>
                    <div class="pro-price">3199元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_black">
                    <div class="pro-img">
                      <img
                        v-lazy="'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg?thumb=1&w=160&h=110&f=webp&q=90'"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi 红米电视 70英寸 R70A</div>
                    <div class="pro-price">3199元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_black">
                    <div class="pro-img">
                      <img
                        v-lazy="'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg?thumb=1&w=160&h=110&f=webp&q=90'"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi 红米电视 70英寸 R70A</div>
                    <div class="pro-price">3199元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_black">
                    <div class="pro-img">
                      <img
                        v-lazy="'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg?thumb=1&w=160&h=110&f=webp&q=90'"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi 红米电视 70英寸 R70A</div>
                    <div class="pro-price">3199元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_black">
                    <div class="pro-img">
                      <img
                        v-lazy="'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg?thumb=1&w=160&h=110&f=webp&q=90'"
                        alt
                      />
                    </div>
                    <div class="pro-name">Redmi 红米电视 70英寸 R70A</div>
                    <div class="pro-price">3199元</div>
                  </a>
                </li>
              </ul>
            </div>
          </span>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
  props: {},
  data() {
    return {
      userName:'jack',
      phoneList:[]
    };
  },
  created() {},
  mounted() {
    this.getProductList();
  },
  methods: {
    login(){
      this.$router.push('/login');
    },
    getProductList(){
      this.axios.get('/products',{
        params:{
          categoryId:'100012',
          pageSize:6
        }
      }).then((res)=>{
        this.phoneList=res.list;
      })
    },
    gotoCart(){
      this.$router.push('/cart');
    }
  },
  computed: {}
};
</script>
<style lang="scss" scope>
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background: #333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: $colorA;
        text-align: center;
        color: #fff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        .icon-cart {
          display: inline-block;
          width: 16px;
          height: 12px;
          background: url("/imgs/icon-cart-checked.png") no-repeat center;
          background-size: contain;
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      position: relative;
      @include flex();
      .header-logo {
        display: inline-block;
        height: 55px;
        width: 55px;
        background-color: $colorA;
        a {
          display: inline-block;
          width: 55px;
          height: 55px;
          overflow: hidden;
          &:before {
            content: "";
            @include bgImg(55px, 55px, "/imgs/mi-logo.png");
            transition: margin 0.4s;
          }
          &:after {
            content: "";
            @include bgImg(55px, 55px, "/imgs/mi-home.png");
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.4s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        flex: 1;
        margin-left: 100px;
        .item-menu {
          display: inline-block;
          color: #333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0 7px 6px -1px rgba(0, 0, 0, 0.11);
            z-index: 10;
            background-color:#fff;
            transition: all 0.5s;
            ul {
              display: flex;
              .product {
                height: 220px;
                width: 204.33px;
                flex-shrink: 0;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                position: relative;
                &:not(:nth-child(6)):before {
                  content: "";
                  position: absolute;
                  top: 28px;
                  right: 0;
                  border-left: 1px solid $colorF;
                  height: 100px;
                }
                a {
                  display: inline-block;
                  img {
                    width: auto;
                    height: 111px;
                    margin-top: 26px;
                  }
                  .pro-img {
                    height: 137px;
                  }
                  .pro-name {
                    font-weight: bold;
                    margin-top: 19px;
                    margin-bottom: 8px;
                    color: $colorB;
                  }
                  .pro-price {
                    color: $colorA;
                  }
                }
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            box-sizing: border-box;
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>