<template>
    <div :style="{padding:device=='desktop'?'0px':'0px 10px 0px'}">
        <div v-for="(post,index) in articlePosts" :key="index" >
            <component
                v-if="index < 8 "
                :device="device"
                :post="post"
                :is="Article(index)"
            />
        </div>
        
        <LargeHotVideo
            v-for="(post,index) in hotPosts.videos"
            :key="post.title"
            :post="post"
            :headerShow="false"
            :device="device"
            :videoProps="videoOptions"
            :index="`${index}`"
        />
    </div>
</template>
<script>
import LargeArticle from "../LargeArticle/LargeArticle.vue";
import SmallArticle from "../SmallArticle/SmallArticle.vue";
import LargeHotVideo from "../LargeHotVideo/LargeHotVideo.vue";

export default {
    props: {
        hotPosts: {
            type: Object
        },
        device: {
            type: String,
            default: 'desktop'
        },
        videoOptions: {
            type: Object,
            default: function() {
                return {
                    autoplay: false,
                    controls: true,
                    width: '700',
                    rel: 0
                    }
            }
        }
    },
    components: {
        LargeArticle,
        SmallArticle,
        LargeHotVideo
    },
    data () {
        return {
            articlePosts:[]
        }
    },
    methods: {
        Article(index){
            return index % 4 == 0 ? LargeArticle : SmallArticle;
        },
        ramdow(){
            let artPosts = this.hotPosts.articles;
            for (let i = artPosts.length - 1; i > 0; i--) {
                let ram = Math.floor(Math.random() * (i + 1));
                [artPosts[i], artPosts[ram]] = [artPosts[ram], artPosts[i]];
            }
            this.articlePosts = artPosts
        }
    },
    mounted() {
        this.ramdow()
    }
}
</script>
<style scoped>

</style>
