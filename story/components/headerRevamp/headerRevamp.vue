<template>
  <div class="header-beauty-mobile" :style="{height:`${barHeight}px` }" v-show="showHeader">
    <img :src="src" :style="{width:`${srcWidth}px`}">
    <p :style="{lineHeight:`${barHeight}px` }">
      發稿撰文，前往下載
      <span>BeautyBee</span>
    </p>
    <div id="beautyBeeApp">
      <div class="btn" :style="{backgroundColor:btnBackground,color:btncolor}">{{firstBtnTxt}}</div>
      <div class="btn" :style="{backgroundColor:btnBackground,color:btncolor}">{{secondBtnTxt}}</div>
    </div>
    <i class="el-icon-close" :style="{lineHeight:`${barHeight}px` }" @click="clodeHeader()"></i>
  </div>
</template>
<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        },
        barHeight: {
            type: Number,
            default: 54
        },
        src: {
            type: String,
            default: 'https://assets.girlstyle.com/uat/girlstyle-tw/static/images/beautybee/logo_ic_beautybee.png'
        },
        srcWidth: {
            type: Number,
            default: 28
        },
        firstBtnTxt: {
            type: String,
            default: '下載'
        },
        secondBtnTxt: {
            type: String,
            default: '開啟'
        },
        btnBackground: {
            type: String,
            default: '#ff5a5a'
        },
        btncolor: {
            type: String,
            default: '#ffffff'
        }
    },
    data() {
        return {
            showHeader: this.show
        };
    },
    methods: {
        clodeHeader() {
            this.showHeader = !this.showHeader;
            this.$emit('bbMobileHeader', this.showHeader);
        }
    }
};
</script>
<style scoped>
.header-beauty-mobile {
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    z-index: 1001;
    width: 100vw;
    background-color: #4a4a4a;
}

.header-beauty-mobile img {
    vertical-align: middle;
    margin-right: 12px;
}

.header-beauty-mobile p {
    display: inline-block;
    font-size: 12px;
    color: #ffffff;
    margin: 0;
    margin-right: 4px;
}

.header-beauty-mobile p span {
    color: #ff5a5a;
}

#beautyBeeApp {
    display: inline-block;
}

.header-beauty-mobile .btn {
    display: inline-block;
    font-size: 15px;
    padding: 5px 10px;
    border-radius: 16px;
    cursor: pointer;
    margin-right: 8px;
}

.header-beauty-mobile i {
    color: #fff;
    font-weight: bold;
    cursor: pointer;
}
</style>