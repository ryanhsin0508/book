<template>
    <button :disabled="disableBtn" @mouseover="isHover=true" @mouseleave="isHover=false" @click="clickAction">
        <img v-if="imgSrc||disImgSrc" :src="`${iconSrc}`" :style="[imgStyle,isHover?hoverImgStyle:'']">
        {{disableBtn&&disText?disText:text}}
    </button>

</template>
<script>
export default {
    props: {
        // 按鈕是否diabled
        disableBtn: {
            type: Boolean,
            default: false
        },
        // 文字
        text: {
            type: String,
        },
        // diabled 時的文字
        disText: {
            type: String,
        },
        // 按鈕icon路徑
        imgSrc: {
            type: String,
        },
        // 按鈕diabled 時的icon
        disImgSrc: {
            type: String,
        },
        // img style
        imgStyleProps: {
            type: Object
        },
        // 按鈕diabled 時 img style
        disImgStyleProps: {
            type: Object
        },
        // 按鈕hover 時 img style
        hoverImgStyle: {
            type: Object
        }
    },
    data () {
        return {
            isHover: false
        }
    },
    computed: {
        imgStyle () {
            if (this.disableBtn) {
                return { ...this.imgStyleProps, ...this.disImgStyleProps }
            } else {
                return { ...this.imgStyleProps }
            }
        },
        iconSrc () {
            if (this.disableBtn) {
                if (this.disImgSrc) {
                    return require(`${this.disImgSrc}`)
                } else {
                    if (this.imgSrc && this.disImgSrc !== '') {
                        return require(`${this.imgSrc}`)
                    } else {
                        return ''
                    }
                }
            } else {
                return !this.imgSrc ? '' : require(`${this.imgSrc}`)
            }
        },
    },
    methods: {
        clickAction () {
            this.$emit('clickAction');
        }
    }
};
</script>
<style scoped>
button {
    font-size: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    width: 130px;
    height: 44px;
    background-color: #ff5a5a;
    border-radius: 22px;
    color: #fff;
    border: none;
    cursor: pointer;
}
</style>
