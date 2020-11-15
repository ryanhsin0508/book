<template>
    <div style="display: flex; margin-bottom:20px; overflow:hidden; align-items: center;">
        <div
            v-show="hasPosts"
            v-swiper:mySwiper="swiperOption"
        >
            <div class="swiper-wrapper">                
                <Slide></Slide>
            </div>
        </div>
    </div>
</template>

<script>
import Slide from './Slide.vue'

export default {
    components: { Slide },
    props: {
        // Data
        device: {
            type: String,
            default: 'desktop'
        },
        regionPath: {
            type: String
        },
        posts: {
            type: [Array, Object]
        },

        // Style
        mainColor: {
            type: String,
            default: 'ffafa0'
        },

        // Animate
        isInfiniteLoop: {
            type: Boolean
        },
        isAutoplay: {
            type: Boolean
        },
        autoplayDelay: {
            type: Number,
            default: 5000
        },
        speedWhenSwitchView: {
            type: Number,
            default: 1000
        }
    },
    watch: {},
    computed: {
        hasPosts() {
            return Boolean(this.posts.length)
        }
    },
    data() {
        return {
            loading: true,
            swiperOption: {
                lazy: true,
                loop: this.isInfiniteLoop,
                autoplay: this.isAutoplay && { delay: this.autoplayDelay, disableOnInteraction: false },
                speed: this.speedWhenSwitchView
            },
        };
    },
    mounted() {},
    updated() {},
    destroyed() {},
    methods: {}
};
</script>

<style scoped>
.swiper-container {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>