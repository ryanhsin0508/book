<template>
    <section class="demo">
        <channelThumbnail class="demoChannel" :channelList="channelList" :lang="lang" :inputType="inputType" :getMount="getMount" :channelThumb="channelThumb" :channelEle="channelEle" @getChoosenChannelIds="getChoosenChannelIds" />
        <counterButton :lang="lang" :selectChannels="selectChannels" :countNum="countNum" :buttonText="buttonText" :channelBtn="channelBtn" @actionSubChannel="actionSubChannel" />
    </section>
</template>
<script>
import channelThumbnail from './channelThumbnail.vue';
import counterButton from './counterButton.vue';
export default {
    props: {
        channelList: {
            type: Array,
            default: [],
            required: true
        },
        lang: {
            type: String,
            default: 'en',
            required: true
        },
        inputType: {
            type: String,
            default: 'checkbox',
        },
        getMount: {
            type: [Number, String],
            default: ''
        },
        channelThumb: {
            type: Object,
            default: function () {
                return {}
            }
        },
        channelEle: {
            type: Object,
            default: function () {
                return {}
            }
        },
        buttonText: {
            type: Array,
            default: function () {
                return {}
            }
        },
        channelBtn: {
            type: Object,
            default: function () {
                return {}
            }
        }
    },
    // props: ['channelList', 'lang', 'inputType', 'getMount', 'channelThumb', 'channelEle', 'channelBtn', 'buttonText'],
    data () {
        return {
            selectChannels: [],
            countNum: this.getMount,
        }
    },
    components: {
        channelThumbnail,
        counterButton
    },
    methods: {
        getChoosenChannelIds (val) {
            this.selectChannels = val;
            console.log(val)
        },
        actionSubChannel (val) {
            console.log(val)
        }
    }
}
</script>
<style scoped>
.demo {
    font-size: 12px;
    display: inline-block;
}
.demo,
.demo button {
    font-weight: bold;
    color: #fff;
    text-align: center;
}
.demo button {
    width: 200px;
    height: 44px;
    font-size: 14px;
    background-color: #ff5a5a;
    box-shadow: 0 6px 6px 0 rgba(246, 160, 148, 0.3);
    display: inline-block;
}
.demo button:disabled {
    background-color: #9b9b9b;
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.1);
}
</style>

