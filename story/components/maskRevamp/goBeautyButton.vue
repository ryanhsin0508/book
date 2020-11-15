<template>
  <a class="go-to-url" :href="url" :style="{color: btntxtColor,fontSize:`${btnTxtSize}px`}">
    {{ btnTxt }}
    <i class="el-icon-right"></i>
  </a>
</template>
<script>
export default {
    props: {
        url: {
            type: String,
            default: 'https://beautybee.com/'
        },
        btnTxt: {
            type: String,
            default: '前往 BeautyBee'
        },
        btntxtColor: {
            type: String,
            default: '#fff'
        },
        btnTxtSize: {
            type: Number,
            default: 20
        }
    },
    data() {
        return {};
    }
};
</script>
<style scoped>
.go-to-url {
    display: inline-block;
    box-sizing: border-box;
    background: linear-gradient(to bottom, #ff6987, #ff525a);
    width: 328px;
    height: 50px;
    box-shadow: 0 2px 5px 0 rgba(199, 53, 53, 0.55);
    font-weight: 600;
    text-align: center;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    text-decoration: none;
    line-height: 50px;
}

.go-to-url i {
    font-size: 14px;
    font-weight: bold;
    margin-left: 22px;
    vertical-align: middle;
}
</style>