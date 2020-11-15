<template>
    <ul class="channelBox" :style="channelThumb">
        <li class="item" v-for="channel in channelList" :key="channel._id" :style="channelEle">
            <input :type="inputType" class="itemBox" :id="`item_${channel._id}`" :name="`item_${channel._id}`" :value="channel._id" v-model="selectChannel" />
            <label :for="`item_${channel._id}`" :style="{ backgroundImage: `url(${channel.thumbnail})` }">
                <span class="itemName">{{ channel.names[lang] }}</span>
            </label>
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
        // 倒數數字
        getMount: {
            type: [Number, String],
            default: ''
        },
        /* dom */
        inputType: {
            type: String,
            default: 'checkbox',
        },
        /* style */
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
        }
    },
    data () {
        return {
            selectChannel: []
        }
    },
    watch: {
        'selectChannel' (val) {
            this.selectLen = Math.max(0, this.getMount - val.length);
            // this.$emit('getChoosenMount', this.selectLen);
            this.$emit('getChoosenChannelIds', this.selectChannel);
        }
    },
    methods: {

    }
}
</script>
<style scoped>
ul,
li {
    list-style: none;
    padding: 0;
    margin: 0;
}
.channelBox {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.channelBox .item {
    width: 104px;
    height: 104px;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
}
.channelBox .itemBox {
    width: 100%;
    height: 100%;
    display: none;
    -webkit-appearance: none;
}
.channelBox .itemBox:checked {
    width: 24px;
    height: 24px;
    background: #ff5a5a;
    border-radius: 50%;
    content: url('./images/btn-selection-on.svg');
    display: inline-block;
    overflow: hidden;
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 1;
}
.channelBox .itemBox + label {
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
    cursor: pointer;
    display: block;
}
.channelBox .itemBox + label:hover::before {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5));
    position: absolute;
    top: 0;
    content: '';
    display: block;
}
.channelBox .item .itemName {
    position: absolute;
    left: 10px;
    bottom: 10px;
}
</style>
