<template>
    <a 
        :href="`${host}${post.url}`" 
        :title="post.title"
        :style="{maxWidth: device == 'desktop'? `${maxWidth}px` : ''}"
        class="large-article"
        :class="[device == 'desktop'? '' :'mobile']"
        @mouseover="mouseover()"
        @mouseleave="mouseleave()"
        @click="click()"
        :target="aTarget"
        >
        <img 
            :src="`${static_host}/images/loading.png`" 
            v-lazy="`${post.image}?w=700&auto=format`"
            :key="`${post.image}?w=700&auto=format`"
            :alt="post.title" 
            :style="{width: device == 'desktop'? `${maxWidth}px`: ''}">
        <div class="article-header">
            <div class="large-cat"  v-if="catShow">
                <a :style="{color: color}" v-for="(cat, index) in categorys" :key="index" :href="`${host}/category/${cat.slug}`">
                    <div>{{cat.name}}</div>
                </a>
            </div>
            <span :style="{color:hover? color :'#282828',marginTop: !catShow ? `55px`: '00' }">{{ post.title }}</span>
            <p v-if="device == 'desktop'">{{ truncate( post.description , 45) }}</p>
            <div class="time-now">
                {{ moment(post.post_date).fromNow() }}
            </div>
        </div>
    </a>
</template>
<script>
import moment from 'moment';
import truncate from 'html-truncate';
export default {
    props: {
        post: {
            type: Object
        },
        device: {
            type: String,
            default: 'desktop'
        },
        host:{
            type: String,
            default: ''
        },
        static_host:{
            type: String,
            default: ''
        },
        active: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: '#ffafa0'
        },
        maxWidth: {
            type: Number,
            default: 700
        },
        catShow: {
            type: Boolean,
            default: true
        },
        aTarget : {
            type: String,
            default: '_self'
        }
    },
    data () {
        return {
            hover: this.active,
            categorys: []
        }
    },
    methods: {
        moment (time) {
            return moment(time);
        },
        truncate(string, length){
            return truncate(string, length)
        },
        mouseover() {
            this.hover = true;
            this.$emit('largeArticleMouseOver', this.hover);
        },
        mouseleave() {
            this.hover = false;
            this.$emit('largeArticleMouseLeave', this.hover);
        },
        click() {
            this.$emit('largeArticleClick', this.hover);
        },
        getCat(post){
            if(this.post.hasOwnProperty('cats') && this.post.cats.length !== 0) {
                    this.categorys = this.post.cats
            }
        }
    },
    mounted() {
        this.getCat(this.post)
    }
}
</script>
<style scoped>
.large-article {
    display: inline-block;
    margin-bottom: 20px;
}
.large-article img {
    max-width: 100%;
}
.large-article .article-header {
    position: relative;
    height: 230px;
    box-sizing: border-box;
    text-align: center;
    border-bottom: 1px solid #f0f0f0;
}
.large-article .article-header .large-cat{
    height: 55px;
    line-height: 55px;
    font-size: 18px;
}
.large-article .article-header .large-cat a::after {
    display: inline-block;
    font-size: 12px;
    content: '．';
}

.large-article .article-header .large-cat a:last-child::after  {
    content: '';
}

.large-article .article-header .large-cat a div{ 
    display: inline-block;
}

.large-article .article-header span {
    display: inline-block;
    font-size: 21px;
    line-height: 29px;
    padding: 0 50px;
    font-weight: initial;
    margin-bottom: 15px;
}
.large-article .article-header p {
    font-size: 16px;
    color: #9c9c9c;
    line-height: 28px;
    margin: 7px 130px;
}
.large-article .article-header .time-now {
    text-align: right;
    font-size: 13px;
    color: #adadad;
}

.large-article.mobile{
    margin-bottom: 15px;
}

.large-article.mobile .article-header {
    height: initial;
}

.large-article.mobile .article-header span {
    text-align: left;
    font-size: 15px;
    line-height: 25px;
    overflow: hidden;
    padding: 15px 10px 0 3px;
    margin-bottom: 35px;
}

.large-article.mobile .article-header .large-cat {
    font-size: 14px;
    position: absolute;
    left: 3px;
    bottom: 8px;
    padding: 0;
    height: initial;
    line-height: initial;
}

.large-article.mobile .article-header .time-now {
    position: absolute;
    right: 10px;
    bottom: 8px;
    
}

a, span, p{
    margin: 0;
    text-decoration: none;
}

</style>
