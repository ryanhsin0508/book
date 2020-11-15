<template>
  <div class="mask" v-show="maskShow" :style="{backgroundColor: background}">
    <div class="mask-box" v-if="device === 'desktop'">
      <i
        class="el-icon-close"
        :style="{color: iconColor, fontSize:`${iconSize}px`}"
        @click="closeMask"
      ></i>
      <a :href="url">
        <img :src="blogSrcDesktop" v-if="viewer === 'blog'">
        <img :src="userSrcDesktop" v-else-if="viewer === 'user'">
        <div class="mask-link-box">
          <goBeautyButton/>
          <div class="txt-download">GET THE APP</div>
          <linkDownload/>
        </div>
      </a>
    </div>
    <div class="mask-box mobile" v-else-if="device === 'mobile'">
      <i
        class="el-icon-close"
        :style="{color: iconColor, fontSize:`${iconSize}px`}"
        @click="closeMask"
      ></i>
      <a :href="url">
        <img :src="blogSrcMobile" v-if="viewer === 'blog'">
        <img :src="userSrcMobile" v-else-if="viewer === 'user'">
        <div class="mask-link-box">
          <goBeautyButton :btnTxtSize="16"/>
          <div class="txt-download">GET THE APP</div>
          <linkDownload/>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import goBeautyButton from './goBeautyButton.vue';
import linkDownload from './linkDownload.vue';
export default {
    props: {
        show: {
            type: Boolean,
            default: true
        },
        background: {
            type: String,
            default: 'rgba(0,0,0,.7)'
        },
        //desktop mobile
        device: {
            type: String,
            default: 'mobile'
        },
        url: {
            type: String,
            default: 'https://beautybee.com/'
        },
        blogSrcDesktop: {
            type: String,
            default: 'https://assets.girlstyle.com/uat/girlstyle-tw/static/images/beautybee/popup_blog_d.jpg'
        },
        userSrcDesktop: {
            type: String,
            default: 'https://assets.girlstyle.com/uat/girlstyle-tw/static/images/beautybee/popup_user_d.jpg'
        },
        blogSrcMobile: {
            type: String,
            default: 'https://assets.girlstyle.com/uat/girlstyle-tw/static/images/beautybee/popup_blog_m.jpg'
        },
        userSrcMobile: {
            type: String,
            default: 'https://assets.girlstyle.com/uat/girlstyle-tw/static/images/beautybee/popup_user_m.jpg'
        },
        viewer: {
            type: String,
            default: 'blog'
        },
        iconColor: {
            type: String,
            default: '#fff'
        },
        iconSize: {
            type: Number,
            default: 20
        }
    },
    data() {
        return {
            maskShow: this.show
        };
    },
    components: {
        goBeautyButton,
        linkDownload
    },
    methods: {
        closeMask() {
            this.maskShow = !this.maskShow;
            this.$emit('bbMackAd', this.maskShow);
        }
    }
};
</script>
<style scoped>
.mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
}
.mask .mask-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.mask-box img {
    max-width: 728px;
}

.mask-box i {
    position: absolute;
    font-weight: bold;
    top: -10px;
    right: -10px;
    transform: translate(50%, -50%);
    cursor: pointer;
}

.mask-link-box {
    position: absolute;
    bottom: 0;
    right: 0;
}

.mask-link-box .txt-download {
    margin-top: 12px;
    margin-left: -38px;
    font-size: 8px;
    -webkit-transform: scale(0.66, 0.66);
    color: #9b9b9b;
}

.barCodeButtons >>> a {
    display: inline-block;
}

.barCodeButtons >>> a img {
    width: 130px;
}

.link-download-box {
    margin: 8px 30px 31px 0;
    text-align: right;
}

.link-download-box a:nth-child(2) {
    margin-left: 10px;
}
.mask-box.mobile i {
    transform: translate(0, 0);
    right: 0;
    top: 0;
}
.mobile img {
    max-width: 100vw;
}

.mobile .go-to-url {
    width: 173px;
}

.mobile .go-to-url >>> i {
    margin-left: 7px;
}

.mobile .mask-link-box .txt-download {
    margin-left: -8px;
}

.mobile .link-download-box {
    margin: 8px 21px 21px 0;
    text-align: right;
}

.mobile .link-download-box >>> a {
    display: block;
}

.mobile .link-download-box a:nth-child(2) {
    margin-left: 0;
    margin-top: 8px;
}
</style>