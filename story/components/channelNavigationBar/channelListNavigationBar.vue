<template>
    <nav class="navbar">
        <channelNavigationBar :class="[isDesktop ? 'channelBar' : 'mChannelBar']" :channelList="channelList" :lang="lang" :isDesktop="isDesktop" :hasIcon="hasIcon" :hasArrowButton="hasArrowButton" :arrowButtonClass="arrowButtonClass" :totalChannelWidth="totalChannelWidth" :movePosition="movePosition" />
    </nav>
</template>
<script>
import channelNavigationBar from './channelNavigationBar.vue';
export default {
    props: {
        /* data */
        // 頻道列表
        channelList: {
            type: Array,
            default: [],
            required: true
        },
        // 語系
        lang: {
            type: String,
            default: 'en',
            required: true
        },
        // 裝置
        isDesktop: {
            type: Boolean,
            default: true
        },
        // 頻道圖示
        hasIcon: {
            type: Boolean,
            default: false
        },
        // 左右箭頭
        hasArrowButton: {
            type: Boolean,
            default: false
        },
        /* style */
        totalChannelWidth: {
            type: Number,
            default: 980
        },
        movePosition: {
            type: Number,
            default: 200
        },
        arrowButtonClass: {
            type: String,
            default: 'barBtn'
        }
    },
    data () {
        return {
            ensPosition: {
                type: Number,
                default: 0
            }
        }
    },
    components: {
        channelNavigationBar
    },
    mounted () {

    }
}
</script>
<style scoped>
.navbar {
    font-size: 15px;
}
.channelBar {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
}
.mChannelBar {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
}
.navbar >>> .barBtn button {
    width: 0;
    height: 0;
    background-color: transparent;
    border-style: solid;
    border-color: transparent #eee transparent transparent;
    border-width: 5px 7px 5px 0;
    padding: 0;
    margin: 0 15px;
    cursor: pointer;
    position: relative;
}
.navbar >>> .barBtn button:disabled {
    cursor: inherit;
}
.navbar >>> .barBtn.active button {
    border-color: transparent #4a4a4a transparent transparent;
}
.navbar >>> .barBtn.active::after button {
    width: 60px;
    height: 24px;
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0), #fff);
    content: '';
    display: block;
    position: absolute;
    top: calc(50% - 12px);
    left: 7px;
}
.navbar >>> .barBtn:last-child button {
    transform: rotate(180deg);
}
</style>
