<template>
    <div class="carousel-text-above" :style="{backgroundColor:bgcolor}" ref="carousel">
        <div class="swiper-container image-swiper" v-swiper:imageSwiper>
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(post, index) in posts" :key="index">
                    <template v-if="post.images">
                        <ImageBlock :images="post.images" :height="'100%'" />
                    </template>
                    <template v-else><img :src="post.image" alt /></template>
                </div>
            </div>
        </div>
        <TextBlock
            ref="textBlock"
            v-bind="{
                    posts,
                    currentIndex,
                    color,
                    bgcolor:textbgcolor,
                    bgcolor2:textbgcolor2,
                    labelColor:dataLabelColor,
                    width,
                    height,
                    floating,
                    buttonArrowColor,
                    caption
                }"
            @slideTo="slideTo"
            @scrollTo="scrollTo"
        ></TextBlock>
    </div>
</template>
<script>
import TextBlock from './TextBlock';
import ImageBlock from './ImageBlock';
export default {
    components: {
        TextBlock,
        ImageBlock
    },
    props: {
        posts: Array,
        color: { type: String, default: '#000000' },
        bgcolor: { type: String, default: '#ffffff' },
        textbgcolor: { type: String, default: '#ffffff' },
        textbgcolor2: { type: String, default: '#ccc' },
        labelColor:{ type: String },
        buttonArrowColor: {type:String, default:'#ffffff'},
        width: { type: String, default: '600px' },
        height: { type: String, default: '480px' },
        caption: { type: String, default: 'asd' },
        floating: String,
        scrollTarget: String
    },
    data() {
        let that = this;
        return {
            currentIndex: 0,
            callByChildren: false,
            dataLabelColor: that.labelColor || that.textbgcolor2
        };
    },
    computed: {
        activeIndex() {
            return this.imageSwiper.activeIndex;
        }
    },
    mounted() {
        this.imageSwiper.on('slideChange', () => {
            if (!this.callByChildren) {
                this.currentIndex > this.imageSwiper.activeIndex ? this.$refs.textBlock.prevHandler() : this.$refs.textBlock.nextHandler();
            }
            this.callByChildren = false;
            this.currentIndex = this.imageSwiper.activeIndex;
        });
        this.imageSwiper.on('transitionEnd', () => {});
    },
    methods: {
        scrollTo() {
            if (this.scrollTarget) {
                let offsetTop = this.$parent.$refs[this.scrollTarget].getBoundingClientRect().top + window.scrollY;
                // $('body, html').animate({ scrollTop: offsetTop });
                window.scrollTo({
                    top: offsetTop,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        },
        slideTo(i) {
            this.callByChildren = true;
            this.currentIndex = i;
            this.imageSwiper.slideTo(i);
        }
    }
};
</script>
<style scoped>
.carousel-text-above {
    height: 100vh;
    min-height: 720px;
    overflow: hidden;
    position: relative;
}
.swiper-container {
    height: 100%;
}
.carousel-text-above .swiper-slide {
    display: block;
}
img {
    display: block;
    max-height: 100%;
}

.text-block {
    position: absolute;
    left: 45%;
    top: 50%;
    margin-left: -80px;
    margin-top: -240px;
    max-width: 100%;
    line-height: 1.5;
    box-sizing: border-box;
    font-weight: normal;
    z-index: 9;
    flex-shrink: 0;
    pointer-events: none;
}
@media (max-width: 1000px) {
    .carousel-text-above {
        min-height: 0;
        height: auto;
    }
    .text-block {
        position: static;
        margin: 0;
        width: 100%;
    }
    img {
        max-height: none;
        max-width: 100%;
    }
}
</style>