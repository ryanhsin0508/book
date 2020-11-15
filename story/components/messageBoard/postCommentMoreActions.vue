<template>
    <div>
        <el-popover style="padding: 0" placement="bottom" width="150" trigger="click" popper-class="report_popover" v-model="showMenu">
            <i class="el-icon-more" slot="reference"></i>
            <div v-if="user&&user._id === ownUserId" class="select" @click="edit">{{ $translate('action_more_edit_comment') }}</div>
            <div v-if="user&&user._id === ownUserId" class="select red" @click.once="del">{{ $translate('action_more_delete_comment') }}</div>
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
</template>
<script>
import caption from './comment.json';
export default {
    props: ['ownUserId', 'commentId', 'idx', 'replyBtn', 'lang', 'user'],
    data () {
        return {
            showMenu: false,
            reasons: '',
            showReport: false
        };
    },
    methods: {
        reply () {
            this.showMenu = false;
        },
        report () {
            this.showMenu = false;
        },
        edit () {
            this.showMenu = false;
            this.$emit('editComment');
        },
        del () {
            this.showMenu = false;
            this.$emit('deleteComment', this.commentId, this.idx);
        },
        async reportComment (num) {
            let reasons;
            this.showReport = false;
            if (num === 1) {
                reasons = this.$translate('report', 'action_report_spam');
            } else {
                reasons = this.$translate('report', 'action_report_inappropriate');
            }
            this.$emit('reportComment', { reason: reasons, commentId: this.commentId });
        },
        $translate (key) {
            return caption[this.lang][key]
        }
    }
};
</script>
<style scoped>
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
.report_box {
    padding: 10px;
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
</style>
