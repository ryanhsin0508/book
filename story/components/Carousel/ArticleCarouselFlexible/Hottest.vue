<template>
    <figure class="post" :style="{ maxWidth: `${maxWidth}px` }" ref="post">
        <div
            :class="['frame',{'video': type === 'video'}]"
            :style="{
                height:type=='video' || frameRatio ? `${postWidth / (4/3)}px` : 'auto',
                backgroundColor: (frameRatio && type != 'video') ? '#ffffff' : '#000000'
            }"
        >
            <img v-if="type === 'image'" :src="post.image" alt />
            <iframe
                v-if="type === 'video'"
                :src="`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fgirlstyle.tw%2Fvideos%2F${post.src}%2F&show_text=0`"
                :style="{
                    width:ratio >= 4/3 ? 'calc(100% - 4px)' : postWidth / (4/3) * ratio,
                    height:`${postWidth / ratio}px`,border:'none',overflow:'hidden'}"
                frameborder="0"
                allowtransparency="true"
                allowfullscreen="true"
            ></iframe>
        </div>
        <figcaption :style="{backgroundColor:bgColor}">
            <span :style="{color:textColor}">{{post.title}}</span>
        </figcaption>
        <a target="_blank" :class="['btn-no-visible', {'video':type === 'video'}]" :href="post.url"></a>
    </figure>
</template>
<script>
import moment from 'moment';
export default {
    props: {
        post: {
            type: Object
        },
        type: {
            type: String
        },
        maxWidth: {
            type: Number,
            default: 300
        },
        color: {
            type: String,
            default: '#ffffff'
        },
        bgColor: {
            type: String,
            default: '#FFFFFF'
        },
        textColor: {
            type: String,
            default: '#AAAAAA'
        },
        ratio: {
            type: Number,
            default: 4 / 3
        },
        frameRatio: {
            type: Number,
            default: undefined
        }
    },
    data() {
        return {
            hover: this.active,
            postWidth: 0,
            rdm: 0
        };
    },
    methods: {
        resizeHandler() {
            this.postWidth = this.$refs.post.offsetWidth;
        }
    },
    computed: {},
    updated() {
        this.resizeHandler();
    },
    mounted() {
        this.resizeHandler();
        window.removeEventListener('resize', this.resizeHandler);
        window.addEventListener('resize', this.resizeHandler);
    }
};
</script>
<style scoped>
figure {
    margin: 0;
    width: 100%;
    max-width: 100%;
}
@media (max-width: 640px) {
    figure {
        max-width: none !important;
    }
}
figure img {
    display: block;
    max-width: 100%;
}
figcaption {
    padding: 14px 28px;
    text-align: center;
    background-color: #fff;
}
figcaption span {
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-height: 1.5;
    height: 4.5em;
}
.frame {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
}
.frame.video {
    background-color: #000000;
}
.btn-no-visible {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
}
.btn-no-visible.video {
    height: calc(4.5em + 28px);
}
</style>