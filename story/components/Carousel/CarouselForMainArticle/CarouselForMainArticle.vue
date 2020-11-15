<template>
<div 
    style="display: flex; margin-bottom: 20px; overflow: hidden; align-items: center;"
    :style="device === 'mobile' && 'margin: 0 20px'"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
>
    <div
        v-show="hasPosts"
        v-swiper:mySwiper="swiperOption"
    >
        <div
            v-if="device==='desktop'"
            class="scroll-button prev"
        >
            <div
                class="button-background"
                :style="{
                    background: mainColor,
                    opacity: isHover ? .6 : 0
                }"
            ></div>
            <img
                :style="`opacity: ${isHover ? 1 : 0}`"
                src="../images/left-arrow.png"
            >
        </div>
        <div class="swiper-wrapper">
            <Slide
                v-for="(post, index) in posts"
                :key="post.id"
            >
                <DesktopArticle
                    v-if="device==='desktop'"
                    v-bind="{
                        post,
                        index,
                        maxWidth,
                        host: regionPath,
                        color: mainColor,
                    }"
                />
                <MobileArticle
                    v-if="device==='mobile'"
                    v-bind="{
                        device,
                        post,
                        index,
                        host: regionPath,
                        color: mainColor,
                    }"
                />
            </Slide>
        </div>
        <div
            v-if="device==='desktop'"
            class="scroll-button next"
        >
            <div
                class="button-background"
                :style="{
                    background: mainColor,
                    opacity: isHover ? .6 : 0
                }"
            ></div>
            <img
                :style="`opacity: ${isHover ? 1 : 0}`"
                src="../images/right-arrow.png"
            >
        </div>
    </div>
</div>
</template>

<script>
import Carousel from '../Carousel'
import DesktopArticle from '../../SidebarHottestArticle/SidebarHottestArticle'
import MobileArticle from '../../SmallArticle/SmallArticle'

export default {
    extends: Carousel,
    name: 'CarouselForMainArticle',
    components: {
        DesktopArticle,
        MobileArticle
    },
    props: {
        // Data
        isNavShowing: {
            type: Boolean,
            default: true
        },

        // Style
        isSwiperPaginationShowing: {
            type: Boolean,
            default: true
        },
        spaceBetweenSlide: {
            type: Number,
            default: 0
        },
        maxWidth: { 
            type: Number,
            default: 270
        }
    },
    watch: {},
    computed: {},
    data() {
        return {
            isHover: true,
            swiperOption: {
                navigation: { 
                    prevEl: '.prev', 
                    nextEl: '.next'
                },
                loop: true,
                slidesPerView: this.device==='desktop' ? 3 : 1,
                autoplay: { delay: 3000, disableOnInteraction: false },
                speed: 1000,
            },
        };
    },
    mounted() {},
    updated() {},
    destroyed() {},
    methods: {}
};
</script>

<style>
a {
    text-decoration: none;
}

.meta-image {
    height: 100%;
    overflow: hidden;
}

.meta-image img {
    width: 100%;
    height: auto;
}

.prev,
.next {
    cursor: pointer;
    z-index: 5000;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.prev {
    left: 0;
}

.next {
    right: 0;
}

.button-background {
    width: 24px !important;
    height: 48px !important;
    transition: .3s
}

.prev img, .next img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0 !important;
    width: 10px !important;
    height: 14px !important;
    transition: .3s
}

.swiper-post-title {
    padding: 0px 10px 0px;
    text-align: center;
    margin: 8px auto 8px;
    height: 58px;
    overflow: hidden;
}

.swiper-post-title h2 {
    font-size: 20px;
    font-weight: 400;
    color: black;
}
</style>
