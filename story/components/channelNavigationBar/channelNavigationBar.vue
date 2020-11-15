<template>
    <ul :hasIcon="hasIcon">
        <li v-if="hasArrowButton" :class="[arrowButtonClass, { 'active' : movePosition !== 0 }]">
            <button :disabled="movePosition === 0" @click="handleNavbar('increase')"></button>
        </li>
        <li v-for="channel in channelList" :key="channel._id" :ref="channel">
            <template v-if="hasIcon">
                <img :src="channel.icon">
            </template>
            {{ channel.names[lang] }}
        </li>
        <li v-if="hasArrowButton" :class="[arrowButtonClass, { 'active' : totalChannelWidth + Math.abs(movePosition) < ensPosition }]">
            <button :disabled="movePosition === 0" @click="handleNavbar('increase')"></button>
        </li>
    </ul>
</template>
<script>
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
    methods: {
        getListWidth () {
        }
    },
    mounted () {
        this.getListWidth();
    }
}
</script>