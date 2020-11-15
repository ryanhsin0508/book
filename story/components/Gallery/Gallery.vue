<template>
    <div
        :class="['gallery',  {vertical: direction == 'vertical', reverse: directionReverse}]"
        :style="{backgroundColor:`${bgColor}`,width:wrapWidth}"
    >
        <slot name="title"></slot>

        <GalleryFigure
            ref="galleryFigure"
            v-bind="{
                posts,
                currentIndex,
                prevIndex,
                mainColor,
                fontColor,
                containerMaxWidth,
                containerPadding,
                figureContainerBorderWidth,
                figureContainerBorderColor,
                figureContainerBorderRadius,
                    buttonDiameter:'32px',
                buttonColor,
                buttonBorderColor,
                buttonArrowColor,
                direction
              }"
            @updateIndex="updateIndex"
        />
        <GalleryNav
            ref="galleryNav"
            v-bind="{
                    name,
                    posts,
                    currentIndex,
                    mainColor,
                    buttonDiameter:'32px',
                    buttonColor,
                    buttonArrowColor,
                    containerMaxWidth,
                    slidesPerView,
                    slidesPerViewMobile,
                    direction,
                    directionReverse,
                    borderWidth,
                    borderColor,
                    borderRadius,
                    buttonBorderColor,
                    thumbRatio,
                    touchRatio
                }"
            @updateIndex="updateIndex"
        />
    </div>
</template>

<script>
import GalleryNav from './GalleryNav';
import GalleryFigure from './GalleryFigure';
export default {
    components: {
        GalleryNav,
        GalleryFigure
    },
    props: {
        name: { type: String, default: 'gallery' + parseInt(Math.random() * 100000) },
        posts: { type: [Array, Object] },
        wrapWidth: { type: String, default: '900px' },
        containerMaxWidth: { type: String, default: '900px' },
        containerPadding: { type: String, default: '6px' },
        figureContainerBorderWidth: { type: String },
        figureContainerBorderColor: { type: String },
        figureContainerBorderRadius: { type: String },
        buttonDiameter: { type: String, default: '40px' },
        buttonColor: { type: String, default: '#ffffff' },
        buttonBorderColor: { type: String },
        buttonArrowColor: { type: String, default: '#a9a9a9' },
        mainColor: { type: String, default: '#ffffff' },
        borderColor: { type: String },
        borderWidth: { type: String, default: '2px' },
        borderRadius: { type: String },
        primaryTitleColor: { type: String, default: '#777777' },
        secondaryTitleColor: { type: String, default: '#777777' },
        bgColor: { type: String, default: 'transparent' },
        direction: { type: String, default: 'horizontal' },
        directionReverse: { type: [Boolean, Number], default: false },
        fontColor: { type: String, default: '#000000' },
        slidesPerView: { type: Number, default: 5 },
        slidesPerViewMobile: { type: Number, default: 3 },
        thumbRatio: { type: Number, default: 40 / 21 },
        touchRatio: { type: Number, default: 1 }
    },
    data() {
        return {
            prevIndex: 0,
            currentIndex: 0
        };
    },
    mounted() {},
    updated() {},
    destroyed() {},
    methods: {
        updateIndex(i) {
            this.prevIndex = this.currentIndex;
            this.currentIndex = i;
        },
        autoScrollNav(i) {}
    }
};
</script>

<style scoped>
.gallery {
    margin: 0 auto 20px;
    max-width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    position: relative;
}
.gallery.vertical {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.gallery.vertical.reverse {
    flex-direction: row-reverse;
}
.gallery.vertical /deep/ figure {
    margin: 0;
}
.gallery.vertical /deep/ .gallery-nav {
    margin: 0;
}
@media (max-width: 980px) {
    .gallery.vertical {
        flex-direction: column !important;
    }
    .gallery.vertical /deep/ .gallery-nav {
        margin-top: 50px;
    }
}
</style>