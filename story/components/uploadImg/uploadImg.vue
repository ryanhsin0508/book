<template>
  <figure :class="['imgCover',{circle: isCircle}]" :style="{backgroundImage: `url(${imgSrc})` }">
    <div v-if="edit" @click="toggle()" :class="['layer',{circle: isCircle}]">
      <p v-if="text">{{ text }}</p>
    </div>
    <div v-if="edit">
      <myUpload field="uploadfile" :params="params.data" lang-type="zh-tw" @crop-success="cropSuccess" @crop-upload-success="cropUploadSuccess" @crop-upload-fail="cropUploadFail" v-model="showImg" :width="limitSize ? limitSize : undefined" :height="limitSize ? limitSize : undefined" :headers="uploadHeader" v-if="showImg" :url="uploadUrl" :no-circle="!hasCropShape" :no-square="!hasCropShape">
      </myUpload>
    </div>
  </figure>
</template>

<script>
import myUpload from 'vue-image-crop-upload';
export default {
    props: {
        // 是否為可編輯圖片狀態
        edit: {
            type: Boolean,
            default: false
        },
        // 圖片路徑位置
        imgSrc: {
            type: String,
            default: ''
        },
        // 可編輯圖片模式時,背景顯示的上傳圖片文字
        text: {
            type: String,
            default: ''
        },
        // 是否顯示圖片裁切形狀
        hasCropShape: {
            type: Boolean,
            default: true
        },
        // 圖片上傳大小限制（寬=高px)
        limitSize: {
            type: Number,
            default: undefined
        },
        // 上傳圖片的api header(有登入則須加token,ex: getUser ? { 'Authorization': 'Bearer' + getUser.auth_token } : {})
        uploadHeader: {
            type: Object,
            default: {}
        },
        // 上傳圖片的api
        uploadUrl: {
            type: String,
            default: ''
        },
        // 圖片區塊是否為圓形
        isCircle: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            showImg: false,
            params: {
                data: {
                    cut: 0
                }
            }
        };
    },
    components: {
        myUpload
    },
    methods: {
        cropSuccess (imageDataUrl, field) {
        },
        cropUploadSuccess (jsonData, field) {
            this.$emit('uploadSuccess', jsonData.data.full_path);
        },
        cropUploadFail (status, field) {
        },
        toggle () {
            this.showImg = !this.showImg;
        }
    }
};
</script>

<style scoped>
figure {
    margin: 0;
}
.imgCover {
    background-size: cover;
    background-position: 50%;
    position: relative;
}
.layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(25, 29, 62, 0.3);
    background-image: url('./images/ic_general_camera.png');
    background-size: 40px;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: inherit;
    color: #fff;
    cursor: pointer;
}
.layer p {
    margin: 0;
    position: relative;
    top: 35px;
}
.circle {
    border-radius: 50%;
}
</style>
