<template>
  <div class="barCodeButtons">
    <el-popover ref="android" :placement="place" :width="popSize" trigger="hover" popper-class="b-barCode">
      <figure class="popAndroid" :style="{width: `${qrCodeSize}px`, height: `${qrCodeSize}px`}"></figure>
    </el-popover>
    <el-popover ref="ios" :placement="place" :width="popSize" trigger="hover" popper-class="b-barCode">
      <figure class="popIos" :style="{width: `${qrCodeSize}px`, height: `${qrCodeSize}px`}"></figure>
    </el-popover>
    <a href="javascript:void(0)" v-popover:android v-if="android">
      <figure class="img android"></figure>
    </a>
    <a href="javascript:void(0)" v-popover:ios v-if="ios">
      <figure class="img ios"></figure>
    </a>
  </div>
</template>
<script>
export default {
  props: {
        // 使用android 下載圖示和qr code
        android: {
            type: Boolean,
            default: false
        },
        // 使用ios 下載圖示和qr code
        ios: {
            type: Boolean,
            default: false
        },
        // qr code外框大小
        popSize: {
            type: [Number, String],
            default: 128
        },
        // qr code大小
        qrCodeSize: {
            type: [Number, String],
            default: 96
        },
        //qr code位置
        place: {
            type: String,
            default: 'bottom'
        }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
figure {
  margin: 0;
}
.barCodeButtons .img {
    background-size: 100% 100%;
    background-position: center;
}
.barCodeButtons .img, .barCodeButtons .a {
  width: 100%;
  height: 100%;
}
.barCodeButtons .android {
    background-image: url('./images/android.png');
}
.barCodeButtons .ios {
    background-image: url('./images/ios.png');
}
</style>
<style>
.el-popover.el-popper.b-barCode .popAndroid, .el-popover.el-popper.b-barCode .popIos {
    background-color: rgba(0, 0, 0, 0.9);
    background-size: 100% 100%;
    background-position: center;
}
.el-popover.el-popper.b-barCode .popAndroid {
    background-image: url('./images/ic_qr_android.png');
}
.el-popover.el-popper.b-barCode .popIos {
    background-image: url('./images/ic_qr_ios.png');
}
.el-popover.el-popper.b-barCode {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
    text-align: center;
    border-color: black;
    height: 128px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.el-popover.el-popper.b-barCode .popper__arrow ,.el-popover.el-popper.b-barCode .popper__arrow::after {
    border-style: none;
    display: none;
}
</style>
