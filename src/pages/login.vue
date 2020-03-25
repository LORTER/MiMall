<!-- order-list -->
<template>
  <div class="login-wrapper">
    <div class="login-header">
      <a href="/#/index"></a>
    </div>
    <div class="login-container">
      <div class="login-from-wrapper">
        <div class="login-from">
          <div class="login-title">
            <h2>账号登录</h2>
            <h2>扫码登录</h2>
          </div>
          <div class="login-input">
            <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="username" />
            <input type="password" placeholder="密码" v-model="password" />
            <div class="btn btn-login" @click="login">登录</div>
            <div class="register">
              <span @click="register">手机短信登录/注册</span>
              <div>
                <span>立即注册</span>
                <span>忘记密码？</span>
              </div>
            </div>
          </div>
          <div class="from-bar">
            <div class="bar-title">
              <i></i>
              <p>其他方式登录</p>
            </div>
            <div class="bar-icon">
              <ul>
                <li>
                  <a href="javascript;:"></a>
                </li>
                <li>
                  <a href="javascript;:"></a>
                </li>
                <li>
                  <a href="javascript;:"></a>
                </li>
                <li>
                  <a href="javascript;:"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="login-footer">
      <ul>
        <li>
          <a href="javascript:;">简体</a>
        </li>
        <li>
          <a href="javascript:;">繁体</a>
        </li>
        <li>
          <a href="javascript:;">English</a>
        </li>

        <li>
          <a href="javascript:;">常见问题</a>
        </li>

        <li>
          <a href="javascript:;">隐私政策</a>
        </li>
      </ul>
      <p>
        小米公司版权所有-京ICP备10046444-
        <span>
          <img
            src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png"
            alt
          />
        </span>京公网安备11010802020134号-京ICP证110507号
      </p>
    </div>
  </div>
</template>

<script>
import "../assets/scss/button.scss";
export default {
  name: "login",
  components: {},
  props: {},
  data() {
    return {
      username: "",
      password: ""
    };
  },
  created() {},
  mounted() {},
  methods: {
    login() {
      let { username, password } = this;
      this.axios
        .post("/user/login", {
          username,
          password
        })
        .then(res => {
          this.res = res;
          console.log(res)
          // 保存登录信息
          this.$store.dispatch('saveUserName', res.username)
          console.log(res)
          this.$store.dispatch('saveCartCount', res.role)
          this.$cookie.set("userId", res.id, { expires: "1M" });
          this.$router.push("/index");
        })
        .catch(err => {
          console.log(err);
        });
    },
    register() {
      this.axios
        .post("/user/register", {
          username:'shj',
          password:'shj',
          email:'shj@126.com'
        })
        .then(res => {
          alert('注册成功')
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {}
};
</script>
<style lang='scss' scoped>
.login-wrapper {
  .login-header {
    margin: 0 auto;
    width: 1130px;
    height: 98px;
    display: flex;
    a {
      display: block;
      width: 200px;
      height: 98px;
      background: url(https://account.xiaomi.com/static/res/7f6f2f5/account-static/respassport/acc-2014/img/mistore_logo.png)
        no-repeat;
    }
  }
  .login-container {
    width: 100%;
    height: 588px;
    background-image: url(https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12c02030ee73caa35a19be59c5b1ec78.jpg);
    background-repeat: no-repeat;
    background-position: top center;
    .login-from-wrapper {
      width: 1130px;
      height: 588px;
      margin: 0 auto;
      position: relative;
      .login-from {
        position: absolute;
        width: 410px;
        min-height: 556px;
        bottom: 0;
        right: 0;
        font-size: 14px;
        color: #999;
        background: #fff;
        .login-title {
          display: flex;
          height: 82px;
          padding: 27px 0 24px;
          box-sizing: border-box;
          h2 {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            cursor: pointer;
            &:not(:last-child)::before {
              content: "";
              position: absolute;
              right: 0;
              height: 80%;
              border-right: 1px solid #999;
            }
            &:first-child {
              color: #ff6700;
            }
          }
        }
        .login-input {
          width: 348px;
          margin: 36px auto 0;
          > input {
            display: block;
            width: 100%;
            height: 48px;
            line-height: 48px;
            padding: 13px 16px 13px 14px;
            box-sizing: border-box;
            color: brown;
            border: 1px solid #999;
            &:first-child {
              margin-bottom: 14px;
            }
          }
          .btn-login {
            margin-top: 24px;
            width: 100%;
            height: 50px;
            margin-bottom: 14px;
            line-height: 50px;
          }
          .register {
            display: flex;
            justify-content: space-between;
            > span {
              display: inline-block;
              color: #ff6700;
              cursor: pointer;
            }
            div {
              span {
                padding: 0 6px;
                position: relative;
                cursor: pointer;
                &:first-child::before {
                  content: "";
                  position: absolute;
                  right: 0;
                  top: 20%;
                  height: 60%;
                  border-right: 1px solid #999;
                }
              }
            }
          }
        }
        .from-bar {
          position: absolute;
          width: 100%;
          height: 160px;
          bottom: 0;
          right: 0;
          .bar-title {
            width: 348px;
            margin: 0 auto;
            position: relative;
            height: 19px;
            i {
              display: block;
              position: absolute;
              top: 10px;
              right: 0;
              left: 0;
              border-bottom: 1px solid #999;
            }
            p {
              position: absolute;
              padding: 0 12px;
              display: inline-block;
              background: #fff;
              left: 50%;
              transform: translateX(-50%);
              z-index: 2;
            }
          }
          .bar-icon {
            margin-top: 24px;
            > ul {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 36px;
              li {
                margin: 0 17px;
                > a {
                  display: block;
                  border-radius: 50%;
                  width: 30px;
                  height: 30px;
                  background: url(https://account.xiaomi.com/static/res/166d6dc/account-static/respassport/acc-2014/img/icons_type.png)
                    no-repeat;
                }
                &:nth-child(1) {
                  > a {
                    background-position: -26px 0;
                    background-size: 158px;
                    background-color: #0288d1;
                  }
                }
                &:nth-child(2) {
                  > a {
                    background-position: -56px 0;
                    background-size: 158px;
                    background-color: #d32f2f;
                  }
                }
                &:nth-child(3) {
                  > a {
                    background-position: -126px 0;
                    background-size: 158px;
                    background-color: #00d20d;
                  }
                }
                &:nth-child(4) {
                  > a {
                    background-position: -84px 0;
                    background-size: 158px;
                    background-color: #0ae;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .login-footer {
    padding-top: 100px;
    height: 80px;
    width: 100%;
    font-size: 14px;
    > ul {
      display: flex;
      align-items: center;
      justify-content: center;
      > li {
        &:not(:last-child)::after {
          content: "";
          height: 100%;
          border-right: 1px solid #333;
        }
        > a {
          display: inline-block;
          color: #333;
          padding: 0 10px;
        }
      }
    }
    p {
      text-align: center;
      padding: 10px;
      span {
      }
    }
  }
}
</style>