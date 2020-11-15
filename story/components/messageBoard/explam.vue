<template>
    <div class="message_board">
        <post-comment :user="user" :commentTotal="commentTotal" :layer="layer" :commentList="commentList" :commentNum="commentNum" :loadMore="loadMore" :postDisable="postDisable" :loading="loading" :reply="reply" :newReply="newReply" :lang="lang" v-on="$listeners" />
    </div>
</template>

<script>
import postComment from './postComment.vue';
export default {
    props: {
        commentTotal: {
            type: Number,
            default: 0
        },
        layer: {
            type: Boolean,
            default: false
        },
        commentList: {
            type: Array
        },
        commentNum: {
            type: Number,
            default: 0
        },
        loadMore: {
            type: Boolean,
            default: false
        },
        postDisable: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        user: {
            type: Object
        },
        reply: {
            type: Object
        },
        newReply: {
            type: Object
        },
        lang: {
            type: String,
            default: 'zh-TW'
        }
    },
    components: {
        postComment
    }
}
</script>

<style scoped>
.message_board {
    width: 500px;
    margin: 30px auto;
    border: 1px #ccc solid;
    border-radius: 6px;
    overflow: hidden;
}
</style>
