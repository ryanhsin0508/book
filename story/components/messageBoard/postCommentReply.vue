<template>
    <div>
        <div class="reply_box" v-if="replyBox" @keyup.esc="replyBoxClose">
            <div class="user">
                <div class="avatar">
                    <img :src="user.avatar[0]">
                </div>
                <div class="text">
                    {{ $translate('post_detail_reply_to_nickname') }} {{ data.user_collection.display_name }}
                </div>
            </div>
            <div class="input">
                <input type="text" class="reply_input" v-model="replyText" :placeholder="$translate('reply-this')" @keypress.enter="submitReply" />
            </div>
        </div>
        <div class="reply_load_more" v-if="replyMoreReply" @click="loadReplyList">{{ $translate('load-more-reply') }}</div>
        <div class="reply_more" v-if="replies_num > 0 && replyMore" @click="loadReplyList">{{ $translate('show') }} {{ replies_num }} {{ $translate('comments') }}</div>
        <div class="more" v-if="loading">
            <div :class="loading ? 'loading' : {}"></div>
        </div>
        <div class="reply_list" v-if="replyList.length > 0 && replyList">
            <postCommentReplyItem :lang="lang" :user="user" :parentData="data" :data="reply" :idx="idx" v-for="(reply, idx) in replyList" :key="reply._id" v-on="$listeners" @addReply="addReply" />
        </div>
    </div>
</template>

<script>
import caption from './comment.json';
import postCommentReplyItem from './postCommentReplyItem';
export default {
    props: ['data', 'commentId', 'replies_num', 'replyBox', 'user', 'reply', 'newReply', 'lang'],
    data () {
        return {
            replyText: '',
            timestamp: '',
            loading: false,
            replyMore: true,
            replyMoreReply: false,
            replyList: []
        };
    },
    components: {
        postCommentReplyItem
    },
    watch: {
        'reply': function (val) {
            this.loading = false;
            this.replyList = val.data.concat(this.replyList);
            this.timestamp = val.timestamp;
            if (val.total === this.replyList.length) {
                this.replyMoreReply = false;
            } else {
                this.replyMoreReply = true;
            }
        },
        'newReply': function (val) {
            let newPlase = this.replyList.length - 1;
            if (this.timestamp === '') {
                this.timestamp = val.data.timestamp;
            }
            this.replyList.splice(newPlase, 1, val.data);
            this.postDisable = false;
            this.replyText = '';
        }
    },
    mounted () {
        console.log(this.data);
    },
    methods: {
        replyBoxClose () {
            this.$emit('reply_input_box_open', false);
        },
        async loadReplyList () {
            this.loading = true;
            this.replyMore = false;
            this.replyMoreReply = false;
            this.$emit('loadReplyList', { commentId: this.commentId, timestamp: this.timestamp });
        },
        submitReply () {
            let self = this;
            let now = new Date();
            let newComment = {
                comment_time: now,
                content: self.replyText,
                like_count: 0,
                user_collection: {
                    real_name: self.user.real_name,
                    avatar: self.user.avatar,
                    display_name: self.user.display_name
                },
                parent_id: self.commentId
            };
            self.replyBoxClose();
            self.postDisable = true;
            let newPlase = self.replyList.length;
            self.replyList.splice(newPlase, 0, newComment);
            self.$emit('submitReply', { post_id: self.data.post_id, content: self.replyText, parent_id: self.commentId });
        },
        addReply (params) {
            let self = this;
            let now = new Date();
            let tagContent;
            let newComment;
            let tagPlace;
            if (params.reply_user_list) {
                tagPlace = params.content.indexOf('@' + params.reply_user_list.user_collection);
            }

            tagContent = params.content;

            newComment = {
                comment_time: now,
                content: tagContent,
                like_count: 0,
                user_collection: {
                    real_name: self.user.real_name,
                    avatar: self.user.avatar,
                    display_name: self.user.display_name
                },
                parent_id: params.parent_id
            };
            self.replyBoxClose();
            self.postDisable = true;
            let newPlase = self.replyList.length;
            self.replyList.splice(newPlase, 0, newComment);
            self.$emit('submitReply', params);
        },
        $translate (key) {
            return caption[this.lang][key]
        }
    }
};
</script>

<style scoped>
.reply_more {
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    margin-top: 10px;
    color: #ff5a5a;
    cursor: pointer;
}
.more {
    margin-top: 10px;
    height: 30px;
}
.reply_more:hover {
    text-decoration: underline;
}
.reply_box {
    margin-left: 40px;
    line-height: 20px;
}
.user {
    margin: 10px 0;
    display: flex;
    line-height: 20px;
    height: 20px;
}
.avatar {
    margin-right: 10px;
}
.avatar img {
    width: 20px;
    height: 20px;
    border-radius: 99em;
}
.text {
    font-size: 12px;
    color: #666;
}
.reply_input {
    border: 1px #eee solid;
    width: calc(100% - 40px);
    padding: 5px;
    line-height: 20px;
    border-radius: 4px;
    outline: none;
}
.input {
    margin-left: 30px;
}
.reply_load_more {
    color: #ff5a5a;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
}
.reply_load_more:hover {
    text-decoration: underline;
}
</style>
