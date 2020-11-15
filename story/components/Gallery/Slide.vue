<template>
    <div 
        class="swiper-slide"
        :style="`width: ${maxWidth}px`"
    >
        <slot />
    </div>
</template>

<script>
export default {
    name: 'Slide',
    props: {
        maxWidth: {
            type: Number,
            default: 270
        }
    }
}
</script>

<style>
.swiper-slide {
    display: flex;
    justify-content: center;
    overflow: hidden;
}
</style>
