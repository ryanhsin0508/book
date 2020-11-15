<template>
    <div
        v-show="hasPosts"
        style="display: flex; margin-bottom:20px; overflow:hidden; align-items: center;"
    >
        <IconButton
            v-if="isNavShowing"
            class="prev-element"
            direction="el-icon-arrow-left"
            :customStyle="{ background: mainColor }"
        />
        <div
            v-swiper:mySwiper="swiperOption"
            :style="`width: ${ swiperWidth }px `"
        >
            <div 
                class="swiper-wrapper"
                :style="`width: ${ swiperWidth }px`"
            >
                <Slide
                    v-for="(post, index) in posts"
                    :key="post.id"
                    :maxWidth="maxWidth"
                >  
                    <Hottest
                        v-bind="{
                            post,
                            index,
                            maxWidth,
                            host: regionPath,
                            color: mainColor,
                        }"
                        @setPost="$emit('setPost', post)"
                    />
                </Slide>
            </div>
        </div>
        <IconButton 
            v-if="isNavShowing"
            class="next-element"
            direction="el-icon-arrow-right"
            :customStyle="{ background: mainColor }"
        />
    </div>
</template>

<script>
import Carousel from '../Carousel'
import IconButton from '../../IconButton/IconButton'
import Hottest from '../../SidebarHottestArticle/SidebarHottestArticle'

export default {
    extends: Carousel,
    name: 'ArticleCarousel',
    components: { 
        IconButton,
        Hottest
    },
    props: {
        // Data
        isNavShowing: {
            type: Boolean,
            default: true
        },

        // Style
        spaceBetweenSlide: {
            type: Number,
            default: 0
        },
        maxWidth: { 
            type: Number,
            default: 270
        },

        // Animate
        isInfiniteLoop: {
            type: Boolean,
            default: false
        },
        isAutoplay: {
            type: Boolean,
            default: false
        }
    },
    watch: {},
    computed: {
        swiperWidth() {
            return this.maxWidth * this.swiperOption.slidesPerView + 2 * this.spaceBetweenSlide
        }
    },
    data() {
        return {
            swiperOption: {
                navigation: { 
                    prevEl: '.prev-element', 
                    nextEl: '.next-element'
                },
                spaceBetween: this.spaceBetweenSlide,
                slidesPerView: this.device==='desktop' ? 3 : 1,
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
.swiper-slide a.sidebar-hottest .article-header {
    border-bottom: 0px;
}
</style>