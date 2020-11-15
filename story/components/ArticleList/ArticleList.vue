<template>
    <div class="article-list" :style="{padding:device=='desktop'?'0px':'0px 10px 0px'}">
        <CategorySelector
            v-if="catShow"
            :device="device"
            :categorySelectorIsEnglish="categoryEnglish"
            :categories="categories"
            @changeCategory="changeCat"
        />
        <i
            class="el-icon-loading"
            style="font-size:25px"
            v-show="loading"
        />

        <component
            v-for="(post,index) in articlePosts"
            :key="index"
            :device="device"
            :post="post"
            :is="Article(index)"
        />

        <el-pagination
            :page-size="12"
            :total="postNum"
            :pager-count="5"
            layout="prev, pager, next"
            @current-change="changePage"
        />

    </div>
</template>
<script>
import LargeArticle from "../LargeArticle/LargeArticle.vue";
import SmallArticle from "../SmallArticle/SmallArticle.vue";
import CategorySelector from "../CategorySelector/CategorySelector.vue"

export default {
    props: {
        device: {
            type: String,
            default: 'desktop'
        },
        catShow: {
            type: Boolean,
            default: true
        },
        categories: {
            type: Array
        },
        categoryEnglish: {
            type: Boolean,
            default: false
        },
        articlePosts: {
            type: Array
        },
        loading: {
            type: Boolean,
            default: false
        },
        postNum: {
            type: Number,
            default: 120
        }
    },
    components: {
        LargeArticle,
        SmallArticle,
        CategorySelector
    },
    data () {
        return {
        }
    },
    methods: {
        changePage (offset) {
            this.$scrollTo('.main-content', 1000, options)
            this.$emit('changePage', offset)
            var options = {
                container: 'body',
                easing: 'ease-in',
                offset: -60,
                force: true,
                cancelable: true,
                x: false,
                y: true
            }
        },
        changeCat(id){
            this.$emit('changeCat', id)
        },
        Article(index){
            return index % 4 == 0 ? LargeArticle : SmallArticle;
        },
    },
    mounted() {
    }
}
</script>
<style scoped>
.article-list {
    display: inline-block;
    text-align: center;
    max-width: 700px;
}

</style>
