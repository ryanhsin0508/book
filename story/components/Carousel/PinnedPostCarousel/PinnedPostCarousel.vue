<template>
<div style="display: flex; margin-bottom:20px; overflow:hidden; align-items: center;">
    <div
        v-show="hasPosts"
        v-swiper:mySwiper="swiperOption"
    >
        <div class="swiper-wrapper">                
            <Slide
                v-for="(post, index) in posts"
                :key="post.id"
            >  
                <PinnedPost
                    v-if="device==='desktop'"
                    v-bind="{
                        post,
                        index,
                        regionPath,
                        mainColor
                    }"
                    @setPost="$emit('setPost', post)"
                />
                <div
                    v-if="device==='mobile'"
                    class="meta-image"
                >
                    <a
                        :href="`${regionPath}${post.url}`"
                        @click="$emit('setPost', post)"
                    >
                        <img
                            class="swiper-lazy"
                            :data-src="`${post.image}?auto=format&w=600`"
                        >
                        <div class="swiper-lazy-preloader-white"></div>
                        <div
                            v-if="regionPath === '/tw'"
                            class="swiper-post-title"
                        >
                            <h2>{{ post.title | truncate(30) }}</h2>
                        </div>
                    </a>
                </div>
            </Slide>
        </div>
        <div 
            v-if="isSwiperPaginationShowing"
            :style="regionPath === '/tw' && 'bottom: 85px'"
            class="swiper-pagination"
        ></div>
    </div>
</div>
</template>

<script>
import Carousel from '../Carousel'
import PinnedPost from './PinnedPost'

export default {
    extends: Carousel,
    name: 'PinnedPostCarousel',
    components: { PinnedPost },
    props: {
        // Style        
        isSwiperPaginationShowing: {
            type: Boolean,
            default: true
        },

        // Animate
        isInfiniteLoop: {
            type: Boolean,
            default: true
        },
        isAutoplay: {
            type: Boolean,
            default: true
        }
    },
    watch: {},
    computed: {},
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    bulletActiveClass: 'my-bullet-active',
                    clickable: true
                },
                slidesPerView: 1,
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
