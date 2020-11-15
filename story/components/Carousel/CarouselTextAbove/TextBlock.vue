<template>
    <div class="text-block">
        <div
            class="block"
            :style="{
            width,
            height,
            backgroundColor:bgcolor,
            color
            }"
        >
            <div
                class="floating-text"
                ref="floatingText"
                :style="{
    		        transform:`translate(${transX}px, -100%)`
    	        }"
            >
                <img :src="floating" alt style="max-height:95px" />
            </div>
            <div class="content">
                <div class="label" :style="{backgroundColor:labelColor}">{{posts[realIndex].label}}</div>
                <div class="main-text">
                    <h3 class v-multi-ref:animation v-html="posts[realIndex].title"></h3>
                    <p class v-multi-ref:animation v-html="posts[realIndex].text"></p>
                    <p class="caption" v-multi-ref:animation v-html="posts[realIndex].caption"></p>
                    <a
                        v-multi-ref:animation
                        class="btn-read-more"
                        :href="posts[realIndex].url"
                        target="_blank"
                    >read more</a>
                </div>
            </div>
            <div class="btns">
                <div class="nav" v-if="posts.length > 1">
                    <button
                        class="btn-prev"
                        @click="prevHandler($event.target)"
                        :disabled="currentIndex == 0"
                        :style="{backgroundColor:bgcolor2}"
                    >
                        <span class="arrow-left" :style="{borderColor:buttonArrowColor}"></span>
                    </button>
                    <button
                        class="btn-next"
                        @click="nextHandler($event.target)"
                        :disabled="currentIndex == posts.length-1"
                        :style="{backgroundColor:bgcolor2}"
                    >
                        <span class="arrow-right" :style="{borderColor:buttonArrowColor}"></span>
                    </button>
                </div>
            </div>
        </div>
        <div class="related">
            <a
                href="javascript:;"
                :style="{
                    color,
                    backgroundColor:labelColor
                }"
                @click="scrollTo"
            >
                其他相關文章
                <span class="arrow-right"></span>
                <span class="arrow-right"></span>
            </a>
        </div>
    </div>
</template>
<script>
import VueMultiRef from './vue-multi-ref.js';
export default {
    props: {
        posts: Array,
        currentIndex: Number,
        color: { type: String, default: '#000000' },
        bgcolor: { type: String, default: '#ffffff' },
        bgcolor2: { type: String, default: '#ccc' },
        labelColor: {type: String},
        buttonArrowColor: { type: String, default: '#ffffff' },
        width: { type: String, default: '600px' },
        height: { type: String, default: '480px' },
        floating: String,
        scrollTarget: { type: String, default: '' }
    },
    data() {
        return {
            realIndex: 0,
            temp: 0,
            transX: 0
        };
    },
    methods: {
        nextHandler() {
            this.temp = this.temp < this.posts.length - 1 ? this.temp + 1 : this.temp;
            this.$emit('slideTo', this.temp);
        },
        prevHandler() {
            this.temp = this.temp > 0 ? this.temp - 1 : this.temp;
            this.$emit('slideTo', this.temp);
        },
        textAni() {
            this.$refs['animation'].forEach(a => {
                a.classList.remove('animated');
                a.classList.add('out');
            });
        },
        scrollTo() {
            this.$emit('scrollTo');
        },
        onScroll() {
            let el = this.$refs.floatingText;
            let scrollTop = window.scrollY;
            let windowHeight = window.innerHeight;
            let offsetTop = el.getBoundingClientRect().top + scrollTop;
            this.transX = (scrollTop + windowHeight / 1.5 - offsetTop) * 1;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll);
        this.$refs['animation'].forEach(a => {
            a.addEventListener('animationend', () => {
                a.classList.add('animated');
                a.classList.remove('out');
                this.realIndex = this.currentIndex;
            });
        });
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll);
    },
    watch: {
        temp() {
            this.textAni();
        }
    }
};
</script>
<style scoped>
.text-block {
    position: relative;
}
h3 {
    font-size: 20px;
    margin-bottom: 1.5em;
}
.block {
    position: relative;
    box-sizing: border-box;
    padding: 50px 50px 20px;
    /* box-shadow: 18px 18px 0px #1d0000; */
}
.caption {
    font-size: 12px;
}
.floating-text {
    color: #000;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0, -100%);
    z-index: 0;
}
.label {
    width: 380px;
    height: 60px;
    background-color: #1d0000;
    position: absolute;
    top: -20px;
    left: 300px;
    display: flex;
    -ms-align-items: center;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 500;
    border-radius: 50px;
}
.btn-read-more {
    position: absolute;
    bottom: 20px;
    font-size: 20px;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 2px;
    pointer-events: all;
    padding-left: 0.5em;
}
.btn-read-more::before {
    position: absolute;
    content: '';
    display: inline-block;
    bottom: 7px;
    left: 0em;
    width: 0.5em;
    height: 2px;
    background-color: #fff;
    margin-right: 2px;
    transition: all 0.5s;
    animation-name: flashing;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
}
.btn-read-more:hover::before {
    width: 100%;
}
.content * {
    font-family: Arial, 微軟正黑體;
    line-height: 1.75;
}
.content p {
    margin-top: 1em;
    margin-bottom: 1em;
}
.btns {
    position: absolute;
    left: 0;
    bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0 50px;
    user-select: none;
    pointer-events: none;
    box-sizing: border-box;
}
.btns .nav {
    margin-right: -50px;
    display: flex;
}
.btns img {
    pointer-events: none;
}

.btns .nav button {
    position: relative;
    display: block;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    background-color: #1d0000;
    cursor: pointer;
    outline: none;
    pointer-events: all;
}
.btns .nav button:disabled {
    background-color: transparent !important;
    cursor: default;
}
.arrow-left,
.arrow-right {
    position: absolute;
    width: 8px;
    height: 8px;
    border-left: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
    left: 50%;
    top: 50%;
    margin-top: -4px;
    margin-left: -4px;
}
.arrow-left {
    transform: rotate(45deg);
}
.arrow-right {
    transform: rotate(-135deg);
}
.main-text > * {
    opacity: 0;
    animation-name: fadeInUp;
    animation-delay: 0.8s;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}
.animated {
    opacity: 1;
    animation-name: fadeInUp;
    animation-delay: 0s;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
}
.out {
    animation-name: fadeOutDown;
    animation-delay: 0s;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
}
.related {
    position: absolute;
    width: 300px;
    height: 100px;
    bottom: -60px;
    right: -40px;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.related::before,
.related::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
}
.related::before {
    top: 0;
    left: 0;
    border-top: 1px solid #1d0000;
    border-right: 1px solid #1d0000;
    animation: drawSquare 0.5s;
    animation-delay: 1.7s;
    animation-fill-mode: forwards;
}
.related::after {
    bottom: 0;
    right: 0;
    border-left: 1px solid #1d0000;
    border-bottom: 1px solid #1d0000;
    animation: drawSquare 0.5s;
    animation-delay: 2.2s;
    animation-fill-mode: forwards;
}
.related a {
    position: absolute;
    z-index: 1;
    bottom: -24px;
    right: -2em;
    padding-top: 0.75em;
    padding-bottom: 0.75em;
    padding-right: 2em;
    padding-left: 3em;
    border-radius: 50px;
    pointer-events: all;
}
.related .arrow-right {
    position: static;
    display: inline-block;
    margin-left: 2px;
    margin-right: 2px;
}
@media (max-width: 1000px) {
    .block {
        position: relative;
        width: 100% !important;
        height: auto !important;
        bottom: 100px;
        padding-top: 30px;
        padding-bottom: 3em;
        z-index: 9;
        top: 0;
    }
    .label {
        font-size: 16px;
        left: auto;
        right: -50px;
        width: auto;
        padding-left: 50px;
        padding-right: 80px;
        padding-top: 10px;
        padding-bottom: 10px;
        height: auto;
    }
    .related {
        position: relative;
        top: -60px;
        bottom: auto;
        right: auto;
        left: 25%;
        width: 50%;
        z-index: 8;
    }
    .related a {
        padding-left: 2em;
        padding-right: 1.5em;
    }
    .main-text * {
        font-size: 15px;
    }
    .main-text h3 {
        min-height: 3.5em;
    }
    .main-text p {
        display: none;
    }
}
@keyframes drawSquare {
    0% {
        width: 0;
        height: 0;
    }

    50% {
        width: 100%;
        height: 0;
    }

    100% {
        width: 100%;
        height: 100%;
    }
}
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(100%);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeOutDown {
    from {
        opacity: 1;
        transform: translateY(0);
    }

    to {
        opacity: 0;
        transform: translateY(100%);
    }
}
@keyframes flashing {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>