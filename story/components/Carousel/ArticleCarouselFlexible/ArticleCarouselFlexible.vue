<template>
    <div
        :class="name"
        v-show="hasPosts"
        style="padding-bottom:10px;position:relative;display: flex; margin-bottom:20px; overflow:hidden; align-items: center; justify-content:center;"
    >
        <IconButton
            v-if="isNavShowing && posts.length > slidesPerViewSlide"
            class="prev-element"
            direction="el-icon-arrow-left"
            :customStyle="{ background: mainColor }"
        />
        <div
            v-swiper:mySwiper="swiperOption"
            :style="`width: ${ swiperWidth }px `"
            :class="{shadow:shadow}"
        >
            <div class="swiper-wrapper" :style="`width: ${ swiperWidth }px`">
                <Slide v-for="(post, index) in posts" :key="'post'+index" :maxWidth="maxWidth">
                    <slot
                        v-bind="{
                                post,
                                type,
                                index,
                                maxWidth,
                                host: regionPath,
                                color: mainColor,
                                textColor,
                                bgColor
                            }"
                    >
                        <Hottest
                            v-bind="{
                                post,
                                type: post.src ? 'video' : 'image',
                                index,
                                maxWidth,
                                host: regionPath,
                                color: mainColor,
                                textColor,
                                bgColor,
                                ratio: post.ratio ? post.ratio : 4/3,
                                frameRatio
                            }"
                            @setPost="$emit('setPost', post)"
                        />
                    </slot>
                </Slide>
            </div>
        </div>
        <IconButton
            v-if="isNavShowing"
            class="next-element"
            direction="el-icon-arrow-right"
            :customStyle="{ background: mainColor }"
        />
        <div class="swiper-pagination" ref="pagination" v-show="showPagination && (posts.length > slidesPerViewSlide || windowWidth < 640)"></div>
    </div>
</template>

<script>
import Carousel from '../Carousel';
import IconButton from '../../IconButton/IconButton';
import Hottest from './Hottest';

export default {
    extends: Carousel,
    name: 'ArticleCarouselFlexible',
    components: {
        IconButton,
        Hottest
    },
    props: {
        // Data
        name: {
            type: String,
            default: 'mySwiper'
        },
        isNavShowing: {
            type: Boolean,
            default: true
        },
        showPagination: {
            type: Boolean,
            default: false,
            
        },
        // Style
        spaceBetweenSlide: {
            type: Number,
            default: 0
        },
        maxWidth: {
            type: [String, Number],
            default: 270
        },
        shadow: {
            type: Boolean,
            default: true
        },
        bgColor: {
            type: String,
            default: '#FFFFFF'
        },
        textColor: {
            type: String,
            default: '#333'
        },
        // Animate
        isInfiniteLoop: {
            type: Boolean,
            default: false
        },
        isAutoplay: {
            type: Boolean,
            default: false
        },
        slidesPerViewSlide: {
            type: Number,
            default: 3
        },
        containerMaxWidth: {
            type: [Number, String],
            default: 'none'
        },
        type: {
            type: [String],
            default: 'image'
        },
        frameRatio:{
            type:Number,
            default:undefined
        }
    },
    computed: {
        swiperWidth() {
            if (this.containerMaxWidth != 'none') {
                return this.containerMaxWidth;
            }
            return this.maxWidth * this.swiperOption.slidesPerView + 2 * this.spaceBetweenSlide;
        },
        articleWidth() {
            return undefined;
        }
    },
    data() {
        return {
            windowWidth: 2000,
            swiperOption: {
                navigation: {
                    prevEl: '.prev-element',
                    nextEl: '.next-element'
                },
                spaceBetween: this.spaceBetweenSlide,
                slidesPerView: this.slidesPerViewSlide,
                pagination: {
                    el: '.' + this.name + ' .swiper-pagination',
                    type: 'bullets',
                    clickable:true
                }
            }
        };
    },
    created() {},
    mounted() {
        this.onResize();
    },
    updated() {},

    watch: {
        swiperOption: {
            handler(v, o) {
                this.mySwiper.params.slidesPerView = v.slidesPerView;
                
                this.mySwiper.update();
                console.log(v.slidesPerView);
            },
            deep: true
        }
    },
    destroyed() {},
    methods: {
        onResize() {
            this.windowWidth = window.innerWidth;
            this.windowHeight = window.innerHeight;
            window.addEventListener('resize', () => {
                this.windowWidth = window.innerWidth;
                this.windowHeight = window.innerHeight;
                this.swiperOption.slidesPerView = this.windowWidth < 640 ? (this.posts.length == 1 ? 1 : 1.2) : this.slidesPerViewSlide;
            });
            this.swiperOption.slidesPerView = this.windowWidth < 640 ? (this.posts.length == 1 ? 1 : 1.2) : this.slidesPerViewSlide;
        }
    }
};
</script>

<style scoped>
@media (max-width: 640px) {
    .icon-btn {
        display: none;
    }
}
.icon-btn {
    flex-shrink: 0;
}
.swiper-container {
    margin: 0 20px;
}
.swiper-container.shadow {
    padding-bottom: 10px;
}
.swiper-container.shadow .swiper-slide {
    box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.2);
}
.swiper-pagination {
    bottom: 0;
}
/deep/.swiper-pagination-bullet{
    margin-left: 5px;
    margin-right: 5px;
}
/deep/.swiper-pagination-bullet-active{}
</style>