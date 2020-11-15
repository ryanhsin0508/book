<template>
  <div class="link-download-box">
    <a :href="iosUrl" v-if="ios">
      <img :src="iosSrc" :style="{width: `${imgWidth}px`}">
    </a>
    <a :href="androidUrl" v-if="android">
      <img :src="androidSrc" :style="{width: `${imgWidth}px`}">
    </a>
  </div>
</template>

<script>
export default {
    props: {
        android: {
            type: Boolean,
            default: true
        },
        ios: {
            type: Boolean,
            default: true
        },
        androidSrc: {
            type: String,
            default: 'https://assets.girlstyle.com/uat/girlstyle-tw/static/images/beautybee/playstore.png'
        },
        iosSrc: {
            type: String,
            default: 'https://assets.girlstyle.com/uat/girlstyle-tw/static/images/beautybee/appstore.png'
        },
        androidUrl: {
            type: String,
            default: 'https://www.google.com.tw'
        },
        iosUrl: {
            type: String,
            default: 'https://www.google.com.tw'
        },
        imgWidth: {
            type: Number,
            default: 130
        }
    },
    data() {
        return {};
    }
};
</script>
<style scoped>
.link-download-box a {
    display: inline-block;
}
</style>