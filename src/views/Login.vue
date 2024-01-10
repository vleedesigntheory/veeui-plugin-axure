<template>
  <div class="login-view">
    <section class="login-box">
      <div class="login-box-header">
        <img
          class="login-box-logo"
          :src="require('@/assets/logo.png')"
          alt="logo"
        />
        <span class="login-box-title">{{ title }}</span>
      </div>
      <vee-button class="login-box-button" type="primary" @click.native="handleLogin">
        登录
      </vee-button>
    </section>
  </div>
</template>

<script>
// import { APILogin } from '@/api/auth'

const APILogin = async () => {
  return {
        code: '0',
        success: true,
        msg: '成功',
        data: {
            token: 'a3c2DF34B5j!emj6ozxx7m8ejonkg'
        }
    }
};

const { title } = require('../../base.config')

export default {
  name: 'Login',
  components: {},
  data() {
    return {
      title,
    }
  },
  methods: {
    handleLogin() {
      console.log('login')
      APILogin().then((res) => {
        console.log('res', res)
        if (res.success) {
          sessionStorage.setItem(`token`, res.data.token)
          this.$router.push('/')
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.login-view {
  width: 100%;
  height: 100%;
  background: #fcfcfc;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-box {
    background: #fcfcfc;
    width: 100%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    align-items: center;

    &-header {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
    }

    &-logo {
      height: 30px;
    }

    &-title {
      font-weight: bold;
      font-size: 32px;
      background-clip: text;
      margin-left: 6px;
      color: #333;
    }

    &-button {
      width: 80%;
      font-family: '微软雅黑';
      margin-top: 20px;
      background-color: #333;
      border-color: #333;
    }
  }
}
</style>
