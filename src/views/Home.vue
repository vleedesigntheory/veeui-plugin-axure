<template>
  <div class="home">
    
    <div class="home-axure" v-if="isAxure">
      <img
        class="home-logo"
        :src="require('@/assets/logo.png')"
        alt="logo"
      />
      <ul class="axure-form">
        <li><vee-input class="form-item" v-model="file" disabled type="text" placeholder="预览文件" name="file"></vee-input></li>
        <li><vee-input class="form-item" v-model="description" type="text" placeholder="产品说明" name="description"></vee-input></li>
      </ul> 
      <p class="axure-button">
        <vee-button type="primary">上传</vee-button>
      </p>
    </div>
    <div class="home-guide" v-else>
      <img
        class="home-logo"
        :src="require('@/assets/logo.png')"
        alt="logo"
      />
      <p class="guide-title">
        仅需 <span class="guide-title-count">3</span> 步上传Axure文档
      </p>
      <ol class="guide-progress">
        <li>1. 打开 Axure 文件</li>
        <li>2. 在右上角点击“Preview/预览”</li>
        <li>3. 在VeeUI Axure 插件客户端“上传”</li>
      </ol>
      <img
        class="guide-image"
        :src="require('@/assets/axure-guide.png')"
        alt="guide"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      file: '',
      description: ''
    }
  },
  computed: {
    ...mapState(['isAxure']),
  },
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &-logo {
    width: 48px;
    margin: 16px auto;
  }

  &-axure {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .axure-form {
      width: 100%;
      .form-item {
        width: 100%;
        padding: 8px 16px;
        input {
          width: 100%;
          font-family: '微软雅黑';
        }
      }
    }

    .axure-button {
      padding: 20px 16px;
      width: 100%;
      button {
        width: 100%;
        font-family: '微软雅黑';
      }
    }
  }

  &-guide {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .guide-title {
      font-size: 18px;
      font-weight: bold;
      padding: 16px;
      &-count {
        font-size: 24px;
      }
    }

    .guide-progress {
      font-size: 12px;
      margin-top: 20px;
      li {
        padding: 8px 16px;
      }
      

    }

    .guide-image {
      width: 100%;
    }
  }

}
</style>
