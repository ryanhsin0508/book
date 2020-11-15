<template>
    <nuxt-link :to="tagRouter + tagName" :class="customStyle ? customStyle : 'hashtag'">
        <img :src="iconSrc" :height="iconSize" :width="iconSize" v-if="iconSrc"> {{ `${tagSymbol ? tagSymbol : ''}${tagName}` }}
    </nuxt-link>
</template>

<script type="text/javascript">
export default {
    props: {
        // 標籤頁超連結的路徑位置（必填,ex:/hashtag/）
        tagRouter: {
            type: String,
            required: true
        },
        // 標籤名稱（必填）
        tagName: {
            type: String,
            required: true
        },
        // 標籤名稱前的特殊符號（ex:#)
        tagSymbol: {
            type: String,
            default: ''
        },
        // 標籤小圖示的圖片路徑（無圖案則不填）
        iconSrc: {
            type: String,
            default: ''
        },
        // 標籤小圖示寬高尺寸(px)
        iconSize: {
            type: [Number, String],
            default: 24
        },
        // 客製化樣式(class name)
        customStyle: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
        };
    }
};
</script>
<style scoped>
.hashtag {
    border-radius: 5px;
    background-color: #eee;
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    padding: 6px 10px;
    font-weight: 900;
    color: #4a4a4a;
    display: flex;
    align-items: center;
}
.hashtag:hover {
    color: #ff5a5a;
    opacity: 0.8;
}
.hashtag img {
    float: left;
    /* margin-right: 3px; */
}
</style>
