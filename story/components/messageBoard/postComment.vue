<template>
    <div class="post_comment">
        <div class="comment_num">
            <span class="bold">{{ this.commentTotal }}</span> {{ $translate('comments') }}
        </div>
        <div class="comment_input" v-if="user">
            <div class="avatar" :style="{ backgroundImage: user.avatar[0] }"></div>
            <div class="input"><input type="text" class="message_input" :placeholder="$translate('commentHint')" v-model="input_comment" @keypress.enter="postComment" :disabled="postDisable"></div>
        </div>
        <div :class="['comment_all', { 'layer_all': layer }]">
            <div :class="['comment_list', { 'layer': layer }]">
                <div class="none_comment" v-if="commentNum === 0">
                    <div class="none_img">
                        <img src="./images/ic-empty-comment.png" alt="no message">
                    </div>
                    <div class="none_text">
                        {{ $translate('empty-comment') }}
                    </div>
                </div>
                <div v-else>
                    <div class="message" v-for="(comment, idx) in commentList" :key="comment._id">
                        <postCommentItem :ref="'com' + comment._id" :data="comment" :idx="idx" :user="user" :lang="lang" v-on="$listeners" />
                    </div>
                    <div class="more" v-if="loading">
                        <div :class="loading ? 'loading' : {}"></div>
                    </div>
                    <div class="load_more" @click="loadMoreComment" v-if="loadMore">{{ $translate('load-more') }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import caption from './comment.json';
import postCommentItem from './postCommentItem';
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
        postCommentItem
    },
    data () {
        return {
            input_comment: '',
            timestamp: ''
        };
    },
    watch: {
        'reply': function (val) {
            this.$refs['com' + val.commentId][0].reply = val;
        },
        'newReply': function (val) {
            this.$refs['com' + val.commentId][0].newReply = val;
        }
    },
    methods: {
        postComment () {
            this.$emit('postComment', this.input_comment);
            this.input_comment = '';
        },
        loadMoreComment () {
            this.$emit('loadMoreComment');
        },
        $translate (key) {
            return caption[this.lang][key]
        }
    }
};
</script>

<style scoped>
.post_comment {
    padding: 20px;
    background-color: #fff;
    overflow: hidden;
}
.comment_num {
    font-size: 12px;
    margin-bottom: 20px;
}
.comment_input {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 10px 0;
    margin-bottom: 10px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.avatar {
    min-width: 30px;
    min-height: 30px;
    background-size: cover;
    background-position: 50%;
    border-radius: 50%;
}
.input {
    width: 100%;
}
.message_input {
    border: 1px solid #eee;
    margin-left: 10px;
    padding: 5px 10px;
    border-radius: 2px;
    /* color: #9b9b9b; */
    width: calc(100% - 30px);
    height: 32px;
    /* line-height: 30px; */
}
.bold {
    font-weight: 700;
}
.none_comment {
    text-align: center;
}
.none_img {
    width: 200px;
    margin: 20px auto;
}
.none_text {
    width: 100%;
    font-size: 15px;
    line-height: 30px;
    color: #9b9b9b;
    text-align: center;
}
.comment_all {
    width: 100%;
    overflow: hidden;
}
.layer_all {
    width: 360px;
}
.comment_list {
    /* height: 350px; */
    overflow: hidden;
    overflow-y: scroll;
    padding-right: 17px;
    width: 100%;
}
.layer {
    width: 370px;
    height: 320px;
}
.message {
    margin-bottom: 20px;
}
.message:nth-last-child(1) {
    margin-bottom: 0;
}
.load_more {
    font-size: 12px;
    font-weight: 900;
    text-align: center;
    line-height: 40px;
    display: block;
    color: #ff5a5a;
    cursor: pointer;
}
.more {
    margin-top: 45px;
}
.loading.fullScreen {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    padding-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
}
.loading:after {
    width: 30px;
    height: 30px;
    border: 3px solid #ff5a5a;
    border-color: pink #ff5a5a #ff5a5a #ff5a5a;
    border-radius: 100%;
    animation: lds-ring 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    margin: 0 auto 75px;
    content: '';
    display: block;
}
@keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
