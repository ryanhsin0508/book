<template>
  <div class="revamp-footer" v-show="footerMobileShow" :style="{backgroundColor:background}">
    <span :style="{color:txtColor,fontSize:`${txtSize}px`}">{{ txt }}</span>
    <goBeautyButton/>
    <i class="el-icon-close" :style="{right:`${iconScrollX}px`}" @click="close"></i>
  </div>
</template>
<script>
import goBeautyButton from './goBeautyButton.vue';
export default {
    props: {
        txt: {
            type: String,
            default: '發稿撰文，快下載BeautyBee'
        },
        txtColor: {
            type: String,
            default: '#fff'
        },
        txtSize: {
            type: Number,
            default: 16
        },
        background: {
            type: String,
            default: '#4a4a4a'
        },
        show: {
            type: Boolean,
            default: false
        },
        iconScrollX: {
            type: Number,
            default: 15
        }
    },
    data() {
        return {
            footerMobileShow: this.show
        };
    },
    components: {
        goBeautyButton
    },
    methods: {
        close() {
            this.footerMobileShow = !this.footerMobileShow;
            this.$emit('bbFooter', this.footerMobileShow);
        }
    }
};
</script>
<style scoped>
.revamp-footer {
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 40px;
    line-height: 40px;
    text-align: center;
}

.revamp-footer span {
    display: inline-block;
    margin-right: 40px;
}

.revamp-footer i {
    position: absolute;
    font-size: 30px;
    bottom: 5px;
    color: #fff;
    cursor: pointer;
}
</style>
