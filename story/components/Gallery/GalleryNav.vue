<template>
    <div
        :id="name"
        :class="['gallery-nav', {vertical: direction == 'vertical', reverse: directionReverse}]"
        :style="{
            width:direction == 'vertical' ? 'auto' : `${containerMaxWidth}`,
            height: direction == 'vertical' ? (windowWidth < 640 ? `calc(((${windowWidth}px / ${thumbRatio} * 2 + 64px)))` : containerMaxHeight) : 'none'
        }"
        ref="galleryNav"
    >
        <div :style="{}" v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(post, index) in posts" :key="index" @touchstart.stop>
                    <div
                        :class="['thumb', {active: index == $parent.currentIndex}]"
                        :style="{
                            border:`${borderWidth} solid ${borderColor || mainColor}`, borderRadius:borderRadius,
                            maxWidth:`${imgWidth}px`
                        }"
                        @click="clickImgHandler(index)"
                    >
                        <img :src="post.thumb" alt />
                        <div class="text">{{post.title}}</div>
                    </div>
                </div>
            </div>
        </div>
        <button
            v-if="postCount > currentSlidePerView"
            ref="btnPrev"
            class="btn-prev"
            :style="{backgroundColor:buttonColor,width:buttonDiameter,height:buttonDiameter,border: `2px solid ${buttonBorderColor}`}"
        >
            <span :style="{borderColor:buttonArrowColor}"></span>
        </button>
        <button
            v-if="postCount > currentSlidePerView"
            ref="btnNext"
            class="btn-next"
            :style="{backgroundColor:buttonColor,width:buttonDiameter,height:buttonDiameter,border: `2px solid ${buttonBorderColor}`}"
        >
            <span :style="{borderColor:buttonArrowColor}"></span>
        </button>
    </div>
</template>
<script>
export default {
    watch: {},
    computed: {
        hasPosts() {
            return Boolean(this.posts.length);
        },
        postCount() {
            return this.posts.length;
        },
        currentSlidePerView() {
            return this.windowWidth > 640 ? this.slidesPerView : this.slidesPerViewMobile;
        },
        imgHeight(){
            let ch = this.windowWidth > 640 ? parseInt(this.containerMaxHeight) : (this.windowWidth / this.thumbRatio * 2 + 64);
            return this.windowWidth > 640 ? ((ch - (16 * (this.currentSlidePerView - 1))) / this.currentSlidePerView - (parseInt(this.borderWidth) * 2)) : ((ch - (16 * (this.currentSlidePerView - 1))) / this.currentSlidePerView - (parseInt(this.borderWidth) * 2)) - 64
        },
        imgWidth(){
            return this.imgHeight * this.thumbRatio
        }
    },
    props: {
        name: { type: String },
        currentIndex: { type: Number },
        mainColor: { type: String, default: '#ffffff' },
        borderColor: { type: String },
        borderWidth: { type: String, default: '2px' },
        borderRadius: { type: String },
        containerMaxWidth: { type: [String], default: '900px' },
        containerMaxHeight: { type: String, default: '676px' },
        slidesPerView: { type: Number, default: 5 },
        slidesPerViewMobile: { type: Number, default: 3 },
        posts: { type: [Array, Object] },
        buttonDiameter: { type: String, default: '40px' },
        buttonBorderColor: { type: String },
        buttonColor: { type: String, default: '#ffffff' },
        buttonArrowColor: { type: String, default: '#a9a9a9' },
        containerMaxWidth: { type: String, default: '900px' },
        direction: { type: String, default: 'horizontal' },
        directionReverse: { type: [Boolean, Number], default: false },
        thumbRatio: { type: Number },
        touchRatio: {
            type: Number,
            default: 1
        }
    },
    data() {
        let that = this;
        return {
            windowWidth: 0,
            windowHeight: 0,
            swiperOption:
                that.direction == 'vertical'
                    ? {
                          touchRatio: this.touchRatio,
                          direction: this.direction,
                          navigation: {
                              prevEl: `#${this.name} .btn-prev`,
                              nextEl: `#${this.name} .btn-next`
                          },
                          spaceBetween: 16,
                          slidesPerView: this.windowWidth > 640 ? this.slidesPerView : this.slidesPerViewMobile
                      }
                    : {
                          touchRatio: this.touchRatio,
                          navigation: {
                              prevEl: '.btn-prev',
                              nextEl: '.btn-next'
                          },
                          spaceBetween: 10,
                          slidesPerView: this.windowWidth > 640 ? this.slidesPerView : this.slidesPerViewMobile
                      },
            scrollTop:0,
            tempScrollTop:0
        };
    },
    created() {
        this.onResize();
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
        window.addEventListener('resize', this.onResize);
        let observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    this.onResize();
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: [0, 0.25, 0.5, 0.75, 1]
            }
        );
        observer.observe(this.$refs.galleryNav);
    },
    updated() {},
    destroyed() {
        window.removeEventListener('scroll', this.onScroll)
        window.removeEventListener('resize', this.onResize)
    },
    methods: {
        onScroll(){
            this.scrollTop = window.scrollY
        },
        onResize() {
            if (window) {
                this.windowWidth = window.innerWidth;
                document.querySelectorAll('.vertical .thumb img').forEach(el => {
                    el.style.height = el.style.height != 'auto' ? 'auto' : '100%';
                    el.style.height = '100%';
                });
            }
        },
        clickImgHandler(i) {
            this.$emit('updateIndex', i);
        },
        autoScrollNav(i) {
            let len = this.posts.length;
            let target = this.windowWidth > 640 ? (this.slidesPerView > 2 ? i - 2 : i) : this.slidesPerViewMobile > 2 ? i - 1 : i;
            if (this.mySwiper.params.slidesPerView == 2 && this.mySwiper.activeIndex > 0 && this.mySwiper.activeIndex == i) {
                target = i - 1;
            }
            if (len > 5) {
                this.mySwiper.slideTo(target);
            }
        },
        touchstartHandler(e) {
            console.log(e.targetTouches[0].target)
            this.tempScrollTop = window.scrollY;
        },
        touchmoveHandler(e) {
            console.log('moved');
        },
        touchendHandler(e) {

        }
    },
    watch: {
        currentIndex(v) {
            this.autoScrollNav(v);
        },
        windowWidth() {
            if (this.mySwiper) {
                this.mySwiper.params.slidesPerView = this.windowWidth > 640 ? this.slidesPerView : this.slidesPerViewMobile;
                this.mySwiper.update();
            }
        }
    }
};
</script>
<style scoped>
.gallery-nav {
    position: relative;
    max-width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    flex-shrink: 0;
}
.gallery-nav.vertical {
    width: auto;
}
.btn-prev,
.btn-next {
    position: absolute;
    top: 50%;
    margin-top: -20px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #fff;
    border: none;
    cursor: pointer;
    outline: none;
    z-index: 1;
}
.btn-prev {
    left: -50px;
}
.btn-prev span {
    margin-left: -3px;
    transform: rotate(135deg);
}
.btn-prev span,
.btn-next span {
    content: '';
    position: absolute;
    width: 25%;
    height: 25%;
    border-right: 2px solid #a9a9a9;
    border-bottom: 2px solid #a9a9a9;
    top: 50%;
    left: 50%;
    margin-left: -5px;
    margin-top: -5px;
    box-sizing: content-box;
}
.btn-next {
    right: -50px;
}
.btn-next span {
    margin-left: -7px;
    transform: rotate(-45deg);
}
.vertical .btn-prev {
    top: -16px;
    left: auto;
    right: 0;
    transform: translate(calc(-100% - 28px), 0);
}
.vertical.reverse .btn-prev {
    left: 0;
    right: auto;
    transform: none;
}
.vertical .btn-prev span {
    transform: rotate(-135deg);
    top: 57%;
    left: calc(50% + 1px);
}
.vertical .btn-next {
    top: -16px;
    left: auto;
    right: 0;
}
.vertical.reverse .btn-next {
    left: 0;
    right: auto;
    transform: translate(calc(100% + 28px), 0);
}
.vertical .btn-next span {
    transform: rotate(45deg);
    top: 44%;
    left: calc(50% + 3px);
}
.swiper-container {
    min-width: 100%;
}
.swiper-slide {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    overflow: hidden;
}
.thumb {
    position: relative;
    cursor: pointer;
}
.thumb .before {
    position: absolute;
    left: -3px;
    top: -4px;
    width: calc(100% + 6px);
    height: calc(100% + 8px);
    border-radius: 5px;
}
.thumb::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.25s;
    background-color: rgba(255, 255, 255, 0);
}
.thumb.active::before {
    background-color: rgba(255, 255, 255, 0.75);
}
.thumb::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.75);
    left: 0;
    top: 0;
    z-index: 1;
    opacity: 0;
    transition: all 0.25s;
}
.vertical .thumb::after {
    background-image: linear-gradient(to bottom, rgba(255, 225, 225, 0.7), rgba(255, 247, 247, 0.9) 59%, #ffffff);
}
.thumb:hover::after,
.thumb.active::after {
    opacity: 0.8;
}
.thumb .text {
    display: none;
}
.vertical .thumb .text {
    display: block;
    position: absolute;
    transition: all 0.25s;
    opacity: 0;
    z-index: 2;
    bottom: 0.5em;
    left: 20px;
    width: calc(100% - 40px);
    font-size: 16px;
    overflow: hidden;
    color: #4a4a4a;
    display: flex;
    align-items: flex-start;
    text-align: center;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.5;
    height: 3em;
}
.vertical .thumb.active .text,
.vertical .thumb:hover .text {
    opacity: 1;
}
img {
    max-width: 100%;
    display: block;
    position: relative;
    z-index: 1;
}
.vertical img {
    width: auto;
    height: 100%;
    max-height: 100%;
}
@media (max-width: 960px) {
    .vertical .btn-prev {
        top: -40px !important;
        left: auto !important;
        right: 20px !important;
        transform: none !important;
        margin-top: 0 !important;
    }
    .vertical .btn-next {
        top: auto !important;
        bottom: -40px !important;
        left: auto !important;
        right: 20px !important;
        transform: none !important;
    }
}
@media (max-width: 640px) {
    .vertical .thumb {
        padding-bottom: 4em;
    }
    .vertical .thumb.active::after {
        display: none;
    }
    .vertical .thumb .text {
        bottom: 0.5em;
        opacity: 1;
    }
}
</style>