<template>
    <section>
        <div class="comment" v-if="showThis">
            <avatar :isLazyLoad="false" :profile="data.user_collection" :avatarWidth="30" />
            <div class="middle">
                <div v-if="!edit">
                    <div class="message" v-html="content"></div>
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
                <el-popover style="padding: 0" placement="bottom" width="150" trigger="click" popper-class="report_popover" v-model="showMenu">
                    <i class="el-icon-more" slot="reference"></i>
                    <div v-if="user&&user._id === ownUserId" class="select" @click="editComment">{{ $translate('action_more_edit_comment') }}</div>
                    <div v-if="user&&user._id === ownUserId" class="select red" @click="delReply">{{ $translate('action_more_delete_comment') }}</div>
                    <el-popover v-else style="padding: 0" placement="bottom" width="150" trigger="click" @click="report" popper-class="report_comment_box" v-model="showReport">
                        <div class="select red" slot="reference" @click="report">{{ $translate('action_more_report') }}</div>
                        <div class="report_box">
                            <div class="title">{{ $translate('action_more_report') }}</div>
                            <div class="text">{{ $translate('display_report_desc') }}</div>
                            <div class="report_btn" @click="reportComment(1)">{{ $translate('action_report_spam') }}</div>
                            <div class="report_btn" @click="reportComment(2)">{{ $translate('action_report_inappropriate') }}</div>
                        </div>
                    </el-popover>
                </el-popover>
            </div>
        </div>
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
    </section>
</template>
<script>
import avatar from '../avatarWithText/avatarWithText.vue';
import caption from './comment.json';
export default {
    props: ['data', 'idx', 'user', 'lang'],
    data () {
        return {
            liked: this.data.liked,
            like_count: this.data.like_count,
            showThis: true,
            ownUserId: this.data.user_id,
            commentId: this.data._id,
            showMenu: false,
            showReport: false,
            edit: false,
            editText: this.data.content,
            content: '',
            replyBox: false,
            replyText: '',
            isTagName: false,
            tagPlace: Number
        };
    },
    components: {
        avatar
    },
    watch: {
        'replyText': function (val) { // Tag 人
            if (this.data.user_id !== this.user._id) {
                let tagNameLength = this.data.user_collection.display_name.length + 1;
                let tagName = val.indexOf('@' + this.data.user_collection.display_name + ' ');
                if (tagName < 0) {
                    if (this.isTagName) {
                        this.replyText = this.replyText.substring(0, this.tagPlace) + this.replyText.substring(this.tagPlace + tagNameLength);
                        this.isTagName = false;
                    }
                } else {
                    this.tagPlace = tagName;
                    this.isTagName = true;
                }
            }
        }
    },
    mounted () {
        if (this.data.content_tag_user_collection && this.data.content_tag_user_collection.length > 0) {
            let idPlase = this.data.content.indexOf(this.data.content_tag_user_collection[0]._id);
            if (idPlase >= 0) {
                let idLength = this.data.content_tag_user_collection[0]._id.length + 1;
                this.content = this.data.content.substring(0, idPlase - 1) + '<a href="../profile/' + this.data.user_collection.real_name + '"><span class="atName">@' + this.data.content_tag_user_collection[0].display_name + '</span></a> ' + this.data.content.substring(idPlase + idLength);
            }
        } else {
            this.content = this.data.content;
        }
        console.log('-----');
        console.log(this.data);
    },
    methods: {
        showReplyInput () {
            if (!this.user) {
                this.$emit('pop_login_msg');
            } else {
                this.isTagName = true;
                if (this.data.user_id !== this.user._id) {
                    this.replyText = '@' + this.data.user_collection.display_name + ' ';
                }
                this.replyBox = true;
            }
        },
        replyBoxClose () {
            this.replyBox = false;
        },
        submitReply () {
            let params;
            this.replyBox = false;
            if (this.replyText.indexOf('@' + this.data.user_collection.display_name + ' ') >= 0 && this.data.user_id !== this.user._id) {
                let tagNameLength = this.data.user_collection.display_name.length + 2;
                this.replyText = this.replyText.substring(0, this.tagPlace) + '@' + this.data.user_id + ' ' + this.replyText.substring(this.tagPlace + tagNameLength);
                params = { post_id: this.data.post_id, content: this.replyText, parent_id: this.data.parent_id, reply_user_list: { user: this.data.user_id }, tagName: this.data.user_collection.display_name };
            } else {
                params = { post_id: this.data.post_id, content: this.replyText, parent_id: this.data.parent_id };
            }
            this.$emit('addReply', params);
            this.replyText = '';
        },
        like () {
            if (!this.liked) {
                this.liked = true;
                this.like_count++;
                this.$emit('likeReply', { commentId: this.data._id });
            } else {
                this.liked = false;
                this.like_count--;
                this.$emit('unlikeReply', { commentId: this.data._id });
            }
        },
        report () {
            this.showMenu = false;
        },
        editComment () {
            this.showMenu = false;
            this.edit = true;
        },
        reportComment (num) {
            let self = this;
            let reasons;
            this.showReport = false;
            if (num === 1) {
                reasons = this.$translate('report', 'action_report_spam');
            } else {
                reasons = this.$translate('report', 'action_report_inappropriate');
            }
            this.$emit('reportComment', { commentId: self.commentId, reason: reasons });
        },
        async delReply () {
            this.showReport = false;
            this.showThis = false;
            this.$emit('deleteReply', { commentId: this.commentId });
        },
        submitEdit () {
            this.content = this.editText;
            this.edit = false;
            this.$emit('editReply', { content: this.editText, commentId: this.data._id });
        },
        $translate (key) {
            return caption[this.lang][key]
        }
    }
};
</script>
<style scoped>
.report_box {
    padding: 10px;
}
.comment {
    position: relative;
    /* display: flex; */
    margin-left: 40px;
    margin-top: 10px;
}
.button {
    position: absolute;
    right: 0;
    top: 0;
    height: 18px;
    margin: auto;
    color: #9b9b9b;
    text-align: right;
}
.middle {
    line-height: 20px;
    width: 100%;
    margin-left: 32px;
}
.message {
    font-size: 12px;
    color: #000;
    margin: 5px 0;
    word-break: break-all;
    width: calc(100% - 30px);
}
.info {
    width: 100%;
    display: flex;
    height: 18px;
    line-height: 18px;
}
.reply {
    margin-right: 10px;
    font-size: 12px;
    cursor: pointer;
    color: #ff5a59;
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
i {
    cursor: pointer;
}
i:hover {
    opacity: 0.8;
}
.button {
    height: 24px;
    width: 24px;
}
.select {
    padding: 0;
    text-align: center;
    line-height: 50px;
    border: none;
    height: 50px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
}
.select:hover {
    background: #eee;
}
.red {
    color: #f97072;
}
.reportList {
    position: absolute;
    top: 30px;
    border: #eee 1px solid;
    background: #fff;
    box-shadow: 0 0 10px #eee;
    border-radius: 4px;
    width: 250px;
    height: 200px;
    z-index: 1000;
    right: 0;
}
.title {
    font-size: 15px;
    font-weight: 600;
    color: #4a4a4a;
    margin-bottom: 10px;
}
.text {
    font-size: 12px;
    color: #4a4a4a;
}
.report_btn {
    margin-top: 10px;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    -webkit-transition: 0.1s;
    transition: 0.1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}
.report_btn:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
}
.editbox {
    padding: 5px 10px;
    border-radius: 2px;
    width: calc(100% - 30px);
    border: 1px solid #eee;
    margin-top: 10px;
}
.reply {
    margin-right: 10px;
    font-size: 12px;
    cursor: pointer;
    color: #9b9b9b;
    font-family: Lato, sans-serif;
    font-weight: 400;
}
.reply:hover {
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
    width: 100%;
    padding: 5px;
    line-height: 20px;
    border-radius: 4px;
}
.input {
    margin-left: 30px;
}
</style>
