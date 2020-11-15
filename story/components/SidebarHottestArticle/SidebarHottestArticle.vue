<template>
    <a
        :href="`${host}${post.url}`" 
        :title="post.title"
        :style="{ maxWidth: `${maxWidth}px` }"
        class="sidebar-hottest"
        @mouseover="mouseover()"
        @mouseleave="mouseleave()"
        @click="click()"
    >
        <div 
            :style="{
                maxWidth: `${maxWidth}px`,
                height: '142px',
                background: `url(${post.image})`,
                backgroundSize: 'cover'
            }"
        ></div>
        <div class="article-header" :style="{color:hover? color :'#282828'}">
            <div class="entry-meta">
                <div class="rank">{{ index + 1 }}</div>
                <div class="time-now">
                    {{ moment(post.post_date).format('DD MMM') }}
                </div>
            </div>
            <span :style="{ fontSize: `${titleSize}px` }">{{ post.title }}</span>
        </div>
    </a>
</template>
<script>
import moment from 'moment';
export default {
    props: {
        post: {
            type: Object
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
        titleSize: {
            type: Number,
            default: 14
        },
        maxWidth: {
            type: Number,
            default: 300
        },
        index: {
            type: Number,
            default: 0
        }
    },
    data () {
        return {
            hover: this.active
        }
    },
    methods: {
        moment (time) {
            return moment(time);
        },
        mouseover() {
            this.hover = true;
            this.$emit('sideBarHotTestMouseOver', this.hover);
        },
        mouseleave() {
            this.hover = false;
            this.$emit('sideBarHotTestMouseLeave', this.hover);
        },
        click() {
            this.$emit('sideBarHotTestClick', this.hover);
        }
    },
}
</script>
<style scoped>
.sidebar-hottest {
    display: inline-block;
    margin-bottom: 25px;
}

.sidebar-hottest img {
    margin: 0 !important;
}

.sidebar-hottest .article-header {
    display: flex;
    font-size: 0; 
    color: #424242;
    padding: 20px 5px;
    box-sizing: border-box;
    text-align: center;
    border-bottom: 1px solid #f0f0f0;
}

.sidebar-hottest .article-header .entry-meta {
    display: inline-block;
    width: 65px;
    vertical-align: middle;
}

.sidebar-hottest .article-header .rank {
    text-align: center;
    font-style: italic;
    font-size: 27px;
    font-weight: 700;
    font-family: noto sans, sans-serif;
}

.sidebar-hottest .article-header .time-now {
    text-align: center;
    font-size: 12px;
    font-family: noto sans, sans-serif;
}

.sidebar-hottest .article-header span {
    display: inline-block;
    text-align: left;
    height: 44px;
    width: 240px;
    font-weight: initial;
    line-height: 22px;
    padding-left: 10px;
    box-sizing: border-box; 
    overflow: hidden;
    margin: 3px 0;
    vertical-align: middle;
}

span, p,a{
    margin: 0;
    text-decoration: none;
}

</style>