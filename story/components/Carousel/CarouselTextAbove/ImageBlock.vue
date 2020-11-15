<template>
    <div class="images" :style="{height,width}">
        <img
            :src="image"
            alt
            v-for="(image, index) in filteredImages"
            :key="'img' + index"
            :class="{
                current:index == current,
                only: filteredImages.length == 1
            }"
        />
    </div>
</template>
<script>
import VueMultiRef from './vue-multi-ref.js';
export default {
    name: 'ImageBlock',
    props: {
        image: String,
        images: Array,
        width: {
            type: String,
            default: 'auto'
        },
        height: {
            type: String,
            default: 'auto'
        }
    },
    data() {
        return {
            current: 0,
            windowWidth:0,
            windowHeight:0
        };
    },
    methods: {
        cycle() {
            let len = this.images.length;
            if (len > 1) {
                this.current < len - 1 ? this.current++ : (this.current = 0);
            }
        }
    },
    computed: {
        filteredImages() {
            let arr = [];
            for (let i in this.images) {
                let img = this.images[i];
                let temp = img.lastIndexOf('.')
                let mobileImg = img.substr(0, temp) + '_m' + img.substr(temp)
                arr.push(mobileImg)
            }
            return this.windowWidth > 1000 ? this.images : arr;
        }
    },
    mounted() {
        setInterval(() => {
            this.cycle();
        }, 3000);
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth;
            this.windowHeight = window.innerHeight;
        })
    }
};
</script>
<style scoped>
img {
    position: relative;
    left: 0;
    top: 0;
    display: block;
    max-height: 100%;
    opacity: 0;
    transition: all 0.5s;
}
img.current {
    position: absolute;
    opacity: 1;
}
img.only {
    position: relative !important;
}
@media (max-width: 1000px) {
    img {
        width: 100%;
        max-height: none;
    }
}
</style>