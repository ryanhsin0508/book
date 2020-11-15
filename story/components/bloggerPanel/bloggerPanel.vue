<template>
    <div class="blogger-panel" :style="{width: `${procPanelWidth}px`}" @click="click">
        <div class="author-img" :style="authorImgStyle"></div>
        <div class="author-name" :style="authorNameStyle">{{authorName}}</div>
    </div>
</template>

<script>
export default {
    props: {
        panelWidth: {
            type: Number,
            default: 100
        },
        src: {
            type: String,
            required: true,
            default: ''
        },
        authorName: {
            type: String,
            required: true,
            default: ''
        },
        authorNameStyle: {
            type: Object,
            default: {}
        },
    },
    data () {
        return {
            
        }
    },
    computed: {
        authorImgStyle () {
            return {
                backgroundImage: `url(${this.src})`,
                width: `${this.procPanelWidth}px`,
                height: `${this.procPanelWidth}px`,
            }
        },
        procPanelWidth () {
            return this.panelWidth < 80? 80: this.panelWidth;
        },
    },
    methods: {
        click () {
            this.$emit('bloggerPanelClick');
        },
    },
}
</script>
<style scoped>

.blogger-panel {
    cursor: pointer;
}

.author-img {
    background-position: center;
    background-size: cover;
    border-radius: 50%;
}

.author-name {
    text-align: center;
    color: #a1a1a1;
    font-size: 14px;
    width: 100%;
    word-break: break-all;
}

</style>