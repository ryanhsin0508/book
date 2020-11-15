<template>
    <div class="comment_box">
        <div class="comment">
            <avatar :isLazyLoad="false" :profile="data.user_collection" :avatarWidth="30" />
            <div class="middle">
                <div v-if="!edit">
                    <div class="message">
                        {{ content }}
                    </div>
                    <div class="info">
                        <div class="reply" @click="showReplyInput">{{ $translate('reply') }}</div>
                        <div @click="like" :class="['likeButton', { 'liked': liked }]"></div>
                        <div class="like_count" v-if="like_count > 0">{{ like_count }} {{ $translate('like') }}</div>
                        <div class="date"> ・ {{ data.comment_time }}</div>
                    </div>
                </div>
                <div v-else @keypress.enter="submitEdit" @keyup.esc="edit = false">
                    <input type="text" v-model="editText" class="editbox" />
                </div>
            </div>
            <div v-if="user" class="button">
                <postCommentMoreAction :user="user" @editComment="editComment" :lang="lang" :ownUserId="data.user_id" :commentId="data._id" :idx="idx" :replyBtn="true" v-on="$listeners" />
            </div>
        </div>
        <div class="reply_box">
            <postCommentReply :lang="lang" :newReply="newReply" :reply="reply" :user="user" :commentId="data._id" :replies_num="data.replies_num" :replyBox="replyBox" :data="data" @reply_input_box_open="reply_input_box_open" v-on="$listeners" />
        </div>
    </div>
</template>

<script>
import avatar from '../avatarWithText/avatarWithText.vue';
import caption from './comment.json';
import postCommentMoreAction from './postCommentMoreActions';
import postCommentReply from './postCommentReply';
export default {
    props: ['data', 'idx', 'user', 'lang'],
    data () {
        return {
            liked: this.data.liked,
            like_count: this.data.like_count,
            replyBox: false,
            edit: false,
            editText: this.data.content,
            content: this.data.content,
            reply: '',
            newReply: ''
        };
    },
    components: {
        postCommentMoreAction,
        postCommentReply,
        avatar
    },
    methods: {
        reply_input_box_open (type) {
            this.replyBox = type;
        },
        like () {
            if (this.user) {
                if (!this.liked) {
                    this.liked = true;
                    this.like_count++;
                    this.$emit('likeComment', { commentId: this.data._id });
                } else {
                    this.liked = false;
                    this.like_count--;
                    this.$emit('unlikeComment', { commentId: this.data._id });
                }
            }
        },
        showReplyInput () {
            if (!this.user) {
                this.$emit('pop_login_msg');
            } else {
                this.replyBox = !this.replyBox;
            }
        },
        editComment () {
            this.edit = true;
        },
        submitEdit () {
            this.content = this.editText;
            this.edit = false;
            this.$emit('editComment', { content: this.editText, commentId: this.data._id });
        },
        $translate (key) {
            return caption[this.lang][key]
        }
    }
};
</script>

<style scoped>
.comment {
    position: relative;
    /* display: flex; */
}
.button {
    position: absolute;
    right: 0;
    top: 0;
    height: 18px;
    margin: auto;
    color: #9b9b9b;
}

.middle {
    width: 100%;
}
.message {
    font-size: 12px;
    color: #000;
    margin: 10px 0 10px 42px;
    /* margin-top: 10px; */
    word-break: break-all;
}
.tagName {
    color: #f97072;
}
.info {
    width: 100%;
    display: flex;
    height: 18px;
    line-height: 18px;
    margin-left: 42px;
}
.reply {
    margin-right: 10px;
    font-size: 12px;
    cursor: pointer;
    color: #9b9b9b;
}
.reply:hover {
    text-decoration: underline;
}
.date {
    font-size: 12px;
    text-align: left;
    color: #9b9b9b;
}
.like_count {
    font-size: 12px;
    text-align: left;
    color: #9b9b9b;
    margin-left: 5px;
    margin-right: 3px;
}
.editbox {
    padding: 5px 10px;
    border-radius: 2px;
    width: calc(100% - 30px);
    border: 1px solid #eee;
    margin-left: 40px;
}
</style>
