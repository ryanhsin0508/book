<template>
    <a
        :href="href"
        :title="post.title"
        class="small-article"
        :class="[device == 'desktop'? '' :'mobile']"
        style="width: 100%"
        @mouseover="mouseover()"
        @mouseleave="mouseleave()"
        @click="click()"
    >
        <div class="img-box">
            <img
                :src="`${static_host}/images/loading.png`"
                v-lazy="`${post.image}?w=400&auto=format`"
                :key="`${post.image}?w=400&auto=format`"
                :alt="post.title"
                :style="{
                    width: device == 'desktop' && `${imgWidth}px`,
                    height: device == 'mobile' && '80px',
                    margin: 0
                }"
            />
        </div>
        <div
            class="article-header"
            :style="device == 'desktop' ? `maxWidth: ${headerWidth}px` : `width: calc(100% - 110px)` "
        >
            <span :style="{ color:hover? color :'#282828' }">{{ truncate( post.title, 40) }}</span>
            <p v-if="device == 'desktop'">{{ post.description }}</p>
            <h1>1234</h1>
            <div class="small-bottom">
                <div class="small-cat" v-if="catShow">
                    <a
                        :style="{color: color}"
                        v-for="(cat, index) in categorys"
                        :key="index"
                        :href="`${host}/category/${cat.slug}`"
                    >
                        <div>{{cat.name}}</div>
                    </a>
                </div>
                <div
                    class="time-now"
                    :style="{ width: catShow ? '': '100%' }"
                >{{ moment(post.post_date).fromNow() }}</div>
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
            type: [Array, Object]
        },
        device: {
            type: String,
            default: 'desktop'
        },
        host: {
            type: String,
            default: ''
        },
        static_host: {
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
        imgWidth: {
            type: Number,
            default: 375
        },
        headerWidth: {
            type: Number,
            default: 300
        },
        catShow: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            hover: this.active,
            categorys: []
        };
    },
    methods: {
        moment(time) {
            return moment(time);
        },
        truncate(string, length) {
            return truncate(string, length);
        },
        mouseover() {
            this.hover = true;
            this.$emit('smallArticleMouseOver', this.hover);
        },
        mouseleave() {
            this.hover = false;
            this.$emit('smallArticleMouseLeave', this.hover);
        },
        click() {
            this.$emit('smallArticleClick', this.hover);
        },
        getCat(post) {
            if (this.post.hasOwnProperty('cats') && this.post.cats.length !== 0) {
                if (this.post.cats.length >= 2) {
                    for (let i = 0; i < 2; i++) {
                        this.categorys.push(this.post.cats[i]);
                    }
                } else {
                    this.categorys = this.post.cats;
                }
            } else {
                this.catShow == false;
            }
        }
    },
    mounted() {
        this.getCat(this.post);
    },
    computed: {
        href() {
            let isHttp = this.post.url.indexOf('http://') >= 0 || this.post.url.indexOf('https://') >= 0 ? true : false;
            return `${!isHttp ? this.host : ''}${this.post.url}`;
        }
    }
};
</script>
<style scoped>
.small-article {
    display: flex;
    margin-bottom: 20px;
    font-size: 0;
}

.small-article .img-box {
    display: inline-block;
    vertical-align: middle;
    margin-right: 20px;
    flex-shrink: 0;
}

.small-article .img-box img {
    height: 195px;
}
.small-article .article-header {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    text-align: left;
    border-bottom: 1px solid #f0f0f0;
    height: 195px;
    vertical-align: middle;
}
.small-article .article-header span {
    font-weight: initial;
    font-size: 18px;
    line-height: 29px;
}
.small-article .article-header p {
    font-size: 13px;
    color: #9c9c9c;
    line-height: 21px;
    height: 42px;
    overflow: hidden;
    margin: 7px 0;
}

.small-article .article-header .small-bottom {
    position: absolute;
    bottom: 35px;
    width: 100%;
    font-size: 0;
}

.small-article .article-header .small-cat {
    position: absolute;
    left: 0;
}

.small-article .article-header .small-cat a::after {
    display: inline-block;
    font-size: 12px;
    content: '．';
}

.small-article .article-header .small-cat a:last-child::after {
    content: '';
}
.small-article .article-header .small-cat a div {
    display: inline-block;
    font-size: 14px;
}

.small-article .article-header .time-now {
    position: absolute;
    right: 0;
    text-align: right;
    font-size: 13px;
    color: #adadad;
}

.small-article.mobile .img-box {
    overflow: hidden;
    width: 100px;
    margin-right: 10px;
}

.small-article.mobile .img-box img {
    max-width: initial;
    margin-left: -26px;
    height: 80px;
}

.small-article.mobile .article-header {
    height: 80px;
}

.small-article.mobile .article-header span {
    display: inline-block;
    height: 54px;
    overflow: hidden;
    font-size: 15px;
    line-height: 25px;
}

.small-article.mobile .article-header .small-bottom {
    bottom: 5px;
    height: 20px;
}

span,
p,
a {
    margin: 0;
    text-decoration: none;
}
</style>
