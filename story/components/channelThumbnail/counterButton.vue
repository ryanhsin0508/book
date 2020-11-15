<template>
    <button :disabled="mount !== 0" :style="channelBtn" @click="actionSubChannel()">
        <template v-if="mount > 0">
            <template v-if="lang !== 'ko'">
                {{ buttonText[0] }} {{ mount }} {{ buttonText[1] }}
            </template>
            <template v-else>
                {{ mount }} {{ buttonText[0] }}
            </template>
        </template>
        <template v-else>
            {{ finishedText }}
        </template>
    </button>
</template>
<script>
export default {
    props: {
        /* data */
        // 語系
        lang: {
            type: String,
            default: 'en',
            required: true
        },
        // 選擇頻道
        selectChannels: {
            type: Array,
            default: function () {
                return {}
            }
        },
        // 按鈕數字
        countNum: {
            type: [Number, String],
            default: 3
        },
        // 按鈕文字
        buttonText: {
            type: Array,
            default: function () {
                return {}
            }
        },
        /* style */
        channelBtn: {
            type: Object,
            default: function () {
                return {}
            }
        }
    },
    computed: {
        mount: function () {
            return (!this.selectChannels && this.selectChannels.length < 0) ? 0 : Math.max(0, this.countNum - this.selectChannels.length);
        },
        selectItems: function () {
            return this.selectChannels;
        },
        finishedText: function () {
            const len = this.buttonText.length;
            return this.buttonText[len - 1];
        }
    },
    methods: {
        actionSubChannel () {
            this.$emit('actionSubChannel', this.selectItems);
        }
    }
}
</script>
<style scoped>
button {
    width: 80px;
    height: 30px;
    background-color: #ff5a5a;
    border: none;
    border-radius: 30px;
    padding: 0;
    margin: 0;
}
button:disabled {
    background-color: #9b9b9b;
    opacity: 0.6;
}
</style>
