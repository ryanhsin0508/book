<template>
    <figure
        :style="{
            maxWidth:`${containerMaxWidth}`,
            backgroundColor:mainColor,
            padding:containerPadding,
            border: figureContainerBorderWidth ? `${figureContainerBorderWidth} solid ${figureContainerBorderColor}` : `none`,
            borderRadius: figureContainerBorderRadius ? figureContainerBorderRadius : 0
        }"
        :class="[{video:posts[currentIndex].video}, {vertical: direction == 'vertical'}]"
    >
        <div class="frame" ref="frame">
            <template v-if="posts[currentIndex].image">
                <img :src="posts[currentIndex].image" alt style="zIndex:1" />
                <transition name="fade" @before-leave="beforeLeave" @after-leave="afterLeave">
                    <img
                        class="fader"
                        :src="posts[prevIndex].image ? posts[prevIndex].image : 'http://fakeimg.pl/400x300'"
                        alt
                        v-show="currentIndex == prevIndex"
                        :style="[rendering ? {zIndex:1} : {zIndex:0}]"
                    />
                </transition>
            </template>
            <template v-else>
                <iframe
                    :src="`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fgirlstyle.taiwan%2Fvideos%2F668134433692308%2F&show_text=0&width=560&autoplay=1`"
                    :height="rendered ? frameWidth / posts[currentIndex].ratio : 100"
                    style="width:100%;border:none;overflow:hidden"
                    scrolling="no"
                    frameborder="0"
                    allowtransparency="true"
                    allowfullscreen="true"
                ></iframe>
            </template>
        </div>
        <div class="bottom">
            <figcaption :style="buttonColor && windowWidth < 980 ? {textAlign:'left'} : {}">
                <p :style="{color:fontColor}">{{posts[currentIndex].title}}</p>
            </figcaption>
            <div class="nav-btns" v-if="buttonColor">
                <button
                    class="btn-prev"
                    :style="{backgroundColor:buttonColor,width:buttonDiameter,height:buttonDiameter,border: `2px solid ${buttonBorderColor}`}"
                    @click="prevFigure()"
                >
                    <span :style="{borderColor:buttonArrowColor}"></span>
                </button>
                <button
                    class="btn-next"
                    :style="{backgroundColor:buttonColor,width:buttonDiameter,height:buttonDiameter,border: `2px solid ${buttonBorderColor}`}"
                    @click="nextFigure()"
                >
                    <span :style="{borderColor:buttonArrowColor}"></span>
                </button>
            </div>
        </div>
        <a :target="posts[currentIndex].target" :href="posts[currentIndex].url"></a>
    </figure>
</template>

<script>
export default {
    props: {
        posts: { type: [Array] },
        currentIndex: { type: Number, default: 0 },
        prevIndex: { type: Number, default: 0 },
        mainColor: { type: String, default: '#ffffff' },
        fontColor: { type: String, default: '#000000' },
        containerMaxWidth: { type: String, default: '900px' },
        containerPadding: { type: String, default: '6px' },
        figureContainerBorderWidth: { type: String },
        figureContainerBorderColor: { type: String },
        figureContainerBorderRadius: { type: String },
        buttonBorderColor: { type: String },
        buttonDiameter: { type: String, default: '40px' },
        buttonColor: { type: String },
        buttonArrowColor: { type: String },
        direction: { type: String, default: 'horizontal' }
    },
    data() {
        return {
            frameWidth: 0,
            rendering: false,
            rendered: false,
            windowWidth:0
        };
    },
    mounted() {
        this.rendered = true;
        window.addEventListener('resize', this.onResize);
        this.onResize();
    },
    updated() {},
    destroyed() {},
    methods: {
        onResize() {
            this.frameWidth = this.$refs.frame.offsetWidth;
            if (window) {
                this.windowWidth = window.innerWidth;
            }
        },
        beforeLeave() {
            this.rendering = true;
        },
        afterLeave() {
            // console.log('testaaa')
            this.rendering = false;
            this.$emit('updateIndex', this.currentIndex);
            setTimeout(() => {}, 100);
            // this.$emit('updateIndex', (this.index))
        },
        prevFigure() {
            if (this.currentIndex > 0) {
                this.$emit('updateIndex', this.currentIndex - 1);
            }
        },
        nextFigure() {
            if (this.currentIndex < this.posts.length - 1) {
                this.$emit('updateIndex', this.currentIndex + 1);
            }
        }
    }
};
</script>

<style scoped>
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
.swiper-container {
    width: 100%;
    display: flex;
    justify-content: center;
}
figure {
    position: relative;
    padding: 6px;
    padding-bottom: 0 !important;
    margin: 0 auto 50px;
    width: 100%;
    box-sizing: border-box;
}
figure .frame {
    position: relative;
}
iframe {
    display: block;
}
figure img {
    display: block;
    position: relative;
    width: 100%;
    /* transition: all 0.5s; */
}
figure img.fader {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
}
figcaption {
    text-align: center;
    padding: 20px 90px;
    margin: 0 auto;
    line-height: 1.5;
}
@media (max-width: 980px) {
    figcaption {
        padding: 20px 95px 20px 0;
    }
}
figcaption p {
    max-width: 560px;
    margin: 0 auto;
    height: 3em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
figure a {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: 2;
}
figure.video a {
    height: calc(3em + 40px);
}
.nav-btns {
    display: flex;
    position: absolute;
    right: 0;
    top: 16px;
}
.btn-prev,
.btn-next {
    position: relative;
    width: 28px;
    height: 28px;
    border-radius: 20px;
    background-color: #fff;
    border: none;
    cursor: pointer;
    outline: none;
    z-index: 99;
}
.btn-prev {
    margin-right: 28px;
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
.btn-next span {
    margin-left: -7px;
    transform: rotate(-45deg);
}
.vertical .btn-prev {
}
.vertical .btn-prev span {
    transform: rotate(-135deg);
    top: 57%;
    left: calc(50% + 1px);
}
.vertical .btn-next span {
    transform: rotate(45deg);
    top: 44%;
    left: calc(50% + 3px);
}
.bottom {
    position: relative;
}
</style>