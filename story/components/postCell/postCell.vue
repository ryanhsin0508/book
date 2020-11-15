<template>
    <div class="postcell-box" :style="{width: `${width}px`}" :title="title" @mouseover="mouseover" @mouseleave="mouseleave" @click="click">
        <img :src="src" />
        <div class="article-info">
            <div class="article-title" :style="procTitleStyle">{{title}}</div>
            <div>
                <div class="article-category" :style="procCategoryStyle">{{category}}</div>
                <div class="article-post-date" :style="procPostDateStyle">{{postDate}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
            default: ''
        },
        title: {
            type: String,
            required: true,
            default: ''
        },
        mainColor: {
            type: String,
            required: true,
            default: ''
        },
        width: {
            type: Number,
            default: 240
        },
        category: {
            type: String,
            default: ''
        },
        postDate: {
            type: String,
            default: ''
        },
        titleStyle: {
            type: Object,
            default: {}
        },
        categoryStyle: {
            type: Object,
            default: {}
        },
        postDateStyle: {
            type: Object,
            default: {}
        },
    },
    data () {
        return {
            hover: false,
        }
    },
    computed: {
        titleColor () {
            let c = this.titleStyle.color || '';

            return (this.hover? this.mainColor: c);
        },
        procTitleStyle () {
            return Object.assign({}, this.titleStyle, {color: this.titleColor});
        },
        procCategoryStyle () {
            return Object.assign({}, this.categoryStyle, {color: this.mainColor});
        },
        procPostDateStyle () {
            return Object.assign({}, this.postDateStyle);
        }
    },
    methods: {
        mouseover () {
            this.hover = true;
            this.$emit('postCellMouseOver');
        },
        mouseleave () {
            this.hover = false;
            this.$emit('postCellMouseLeave');
        },
        click (e) {
            this.$emit('postCellClick');
        },
    },
}
</script>
<style scoped>
a {
    text-decoration: none;
}

.postcell-box {
    display: inline-block;
    color: #282828;
    min-width: 200px;
    cursor: pointer;
    padding: 5px 5px 10px 5px;
    margin: 5px 5px 10px 5px;
    border-bottom: 1px solid #e6e6e6;
}

.postcell-box img {
    width: 100%;
    height: auto;
}

.article-info {
    width: 100%;
    height: 80px;
    margin-top: 5px;
}

.article-title {
    height: 60px;
    overflow: hidden;
}

.article-category {
    float: left;
    font-size: 12px;
    overflow: hidden;
    height: 20px;
    width: 60%;
}

.article-post-date {
    float: right;
    font-size: 12px;
    text-align: right;
    color: #adadad;
    overflow: hidden;
    height: 20px;
    width: 40%;
}
</style>