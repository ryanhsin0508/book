<template>
  <div>
    <nuxt-link class="iconPopBtn" :to="link" v-popover:iconPopBtn v-if="hasLink" :style="{ backgroundImage: `url(${hover ? hoverIconSrc : iconSrc})`, width: `${iconWidth}px`, height: `${iconHeight}px` }" @mouseover="hover=true" @mouseout="hover=false"></nuxt-link>
    <a href="javascript:void(0)" class="iconPopBtn" v-popover:iconPopBtn v-else @click="clickOpen()" :style="{ backgroundImage: `url(${hover ? hoverIconSrc : iconSrc})`, width: `${iconWidth}px`, height: `${iconHeight}px` }" @mouseover="hover=true" @mouseout="hover=false"></a>
    <el-popover ref="iconPopBtn" placement="bottom" trigger="hover" :content="content" :popper-class="customStyle ? customStyle :'iconPopBtn_hover'"></el-popover>
  </div>
</template>

<script>
export default {
    data () {
        return {
            hover: false
        };
    },
    props: {
        // 點擊圖示是否有超連結功能
        hasLink: {
            type: Boolean,
            default: false
        },
        // 有超連結功能時的連結位置
        link: {
            type: String,
            default: '/'
        },
        // 圖示寬度（px)
        iconWidth: {
            type: [Number, String],
            default: 27
        },
        // 圖示高度（px)
        iconHeight: {
            type: [Number, String],
            default: 27
        },
        // 圖示位置url(必填)
        iconSrc: {
            type: String,
            required: true
        },
        // 提示文字
        content: {
            type: String,
            default: ''
        },
        // hover時的圖示位置url
        hoverIconSrc: {
            type: String,
            default: ''
        },
        // 客製化popover的樣式(class name)
        customStyle: {
            type: String,
            default: ''
        }
    },
    methods: {
        clickOpen () {
            this.$emit('clickOpen');
        }
    }
};
</script>

<style scoped>
.iconPopBtn {
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
}
</style>
<style>
.iconPopBtn_hover.el-popover {
    min-width: 60px;
    font-size: 14px;
    color: #fff;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
    padding: 5px 10px;
    text-align: center;
}
.iconPopBtn_hover.el-popper[x-placement^='bottom'] .popper__arrow:after {
    border-bottom-color: rgba(0, 0, 0, 0.9);
    filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.15));
}
</style>
