<!--  -->
<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item,index) in menuList" :key="index">
                  <li v-for="(sub,i) in item" :key="i">
                    <a :href="sub?'/#/product/'+sub.id:''">
                      <img v-lazy="sub?sub.img : '/imgs/item-box-1.png'" alt />
                      {{sub?sub.name:'小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption" class="swiper_container">
          <swiper-slide v-for="item in slideList" :key="item.id">
            <a :href="'/#/product/'+item.id" target="_black">
              <img v-lazy="item.img" alt />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/#/product/'+item.id" v-for="item in adsList" :key="item.id">
          <img v-lazy="item.img" alt />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt />
        </a>
      </div>
    </div>
    <div class="container-box">
      <div class="container">
        <div class="product-box">
          <h2 @click="showModal=true">手机</h2>
          <div class="wrapper">
            <div class="banner-left">
              <a href="/#/product/30">
                <img v-lazy="'/imgs/mix-alpha.jpg'" alt />
              </a>
            </div>
            <div class="banner-box">
              <div class="list" v-for="(arr,i) in phoneList" :key="i">
                <div class="item" v-for="(item,j) in arr" :key="item.id">
                  <span v-if="j%2!=0" :class="j%2==0?'':'new-pro'">新品</span>
                  <span v-if="j%2==0" :class="j%2==0?'kill-pro':''">秒杀</span>
                  <div class="item-img">
                    <img v-lazy="item.mainImage" alt />
                  </div>
                  <div class="item-info">
                    <h3>{{item.name}}</h3>
                    <p>{{item.subtitle}}</p>
                    <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalType="middle"
      :showModal="showModal"
      @submit="gotoCart"
      @cancel="showModal=false"
    >
      <template v-slot:body>
        <p>商品添加成功</p>
      </template>
    </modal>
  </div>
</template>

<script>
import ServiceBar from "../components/ServiceBar";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import Modal from "./../components/Modal";
import "swiper/css/swiper.css";
export default {
  name: "index",
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
    Modal
  },
  props: {},
  data() {
    return {
      showModal: false,
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "47",
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "48",
          img: "/imgs/slider/slide-5.jpg"
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区"
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png"
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg"
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png"
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg"
        }
      ],
      phoneList: []
    };
  },
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 14
          }
        })
        .then(res => {
          res.list = res.list.slice(6, 14);
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
        });
    },
    addCart(id) {
      this.axios
        .post("/carts", {
          productId: id,
          selected: true
        })
        .then((res) => {
          this.$store.dispatch("saveCartCount", res.cartTotalQuantity);
          this.showModal = true;
        })
        .catch(err => {
          this.showModal = true;
        });
    },
    gotoCart() {
      this.$router.push("/cart");
    }
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.index {
  .container-box {
    background: #f5f5f5;
  }
  .swiper-box {
    position: relative;
    .nav-menu {
      box-sizing: border-box;
      top: 0;
      left: 0;
      position: absolute;
      z-index: 8;
      width: 264px;
      height: 451px;
      background: rgba(105, 101, 101, 0.6);
      padding: 26px 0;
      font-size: 16px;
      color: #fff;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          &:hover {
            background: $colorA;
            .children {
              display: block;
            }
          }
          > a {
            padding-left: 30px;
            position: relative;
            display: block;
            font-size: 16px;
            color: #fff;
            &::after {
              content: "";
              position: absolute;
              top: 17.5px;
              right: 30px;
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          .children {
            box-sizing: border-box;
            display: none;
            position: absolute;
            top: 0;
            left: 264px;
            height: 451px;
            background: #fff;
            border: 1px solid $colorH;
            ul {
              display: flex;
              height: 75px;
              li {
                box-sizing: border-box;
                height: 75px;
                line-height: 75px;
                width: 240px;
                display: flex;
                align-items: center;
                > a {
                  width: 100%;
                  padding-left: 23px;
                  height: 70%;
                  color: #333;
                  display: inline-flex;
                  font-size: 14px;
                  align-items: center;
                  transition: all 0.2s;
                  &:hover {
                    color: #ff6700;
                    background: rgba(105, 101, 101, 0.6);
                  }
                  img {
                    width: 42px;
                    height: 35px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .swiper_container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    display: flex;
    justify-content: space-between;
    margin-top: 14px;
    margin-bottom: 31px;
    > a {
      display: inline-block;
      width: 296px;
      height: 167px;
      > img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .banner {
    margin-bottom: 50px;
    > a {
      display: block;
      height: 130px;
      > img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px 0;
    > h2 {
      font-size: $fontF;
      color: $colorB;
      line-height: 21px;
      height: 21px;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        transition: all 0.2s linear;
        > a {
          display: block;
          width: 224px;
          height: 619px;
          overflow: hidden;
          img {
            width: 224px;
            height: 619px;
            transition: all 0.2s linear;
          }
        }

        &:hover {
          img {
            transform: scale(1.2, 1.2);
          }
          transform: translate3d(0, -6px, 0);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.2s linear;
        }
      }
      .banner-box {
        flex: 1;
        display: flex;
        flex-direction: column;
        .list {
          @include flex();
          flex: 1;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #fff;
            position: relative;
            transition: all 0.2s linear;

            span {
              position: absolute;
              left: 20px;
              top: 10px;
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              text-align: center;
              line-height: 24px;
              color: $colorG;
              border-radius: 12px;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                height: 195px;
                transition: all 0.2s linear;
              }
            }
            .item-info {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              h3 {
                font-size: $fontJ;
                color: $colorB;
                line-height: $fontJ;
                font-weight: bold;
              }
              p {
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  content: "";
                  @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                  vertical-align: middle;
                }
              }
            }
            &:hover {
              z-index: 2;
              box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
              transform: translate3d(0, -2px, 0);
              img {
                height: 206px;
                transition: all 0.2s linear;
              }
            }
          }
        }
      }
    }
  }
}
</style>