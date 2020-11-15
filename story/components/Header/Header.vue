<template>
    <header
        id="header"
        :style="{
            background: bgColor,
            height: `${height}px`,
            borderBottomWidth: `${borderBottomWidth}px`,
            borderBottomStyle: borderBottomStyle,
            borderBottomColor: borderBottomColor,
            
        }"
    >
        <div
            class="container"
            :style="{
            width:`${containerWidth}px`,
        }"
        >
            <div
                id="logo-nav"
                :style="{
                top:`${top}px`,
                left:`${left}px`,
            }"
            >
                <DropdownSelect
                    :options="options"
                    v-on:clickOption="valueShow"
                    :groupLogoMargin="groupLogoMargin"
                    :groupLogoHeight="groupLogoHeight"
                    :groupLogoImg="groupLogoImg"
                    :groupLogoLink="groupLogoLink"
                >
                </DropdownSelect>
            </div>
            <a
                id="logo-link"
                :href="centerLogoLink"
            >
                <img
                    id="logo"
                    :src="centerLogoImg"
                    :style="{ height: `${centerLogoHeight}px` }"
                />
            </a>
            <div class="social-link-nav">
                <slot></slot>
            </div>
        </div>
    </header>
</template>

<script>
import DropdownSelect from './Select.vue';

export default {
    components: {
        DropdownSelect
    },
    props: {
        // Header props
        //Header 內容寬度
        containerWidth: {
            type: Number,
            default: 1085
        },
        // 左上LOGO 及下拉選單NAV位置
        top: {
            type: Number,
            default: 5
        },
        // 左上LOGO 及下拉選單位置NAV位置
        left: {
            type: Number,
            default: 1
        },
        //Header 背景色
        bgColor: {
            type: String,
            default: '#ffafa0'
        },
        //Header 高度
        height: {
            type: Number,
            default: 122
        },
        // 中間LOGO 高度
        centerLogoHeight: {
            type: Number,
            default: 80
        },
        // 中間LOGO 圖片來源
        centerLogoImg: {
            type: String,
            default: 'https://assets.girlstyle.com/girlstyle-tw/images/girls/logo_TW.png'
        },
        // 中間LOGO 圖片連結
        centerLogoLink: {
            type: String,
            default: 'https://www.presslogic.com/'
        },
        //Header 下底線粗細
        borderBottomWidth: {
            type: Number,
            default: 4
        },
        //Header 下底線樣式
        borderBottomStyle: {
            type: String,
            default: 'solid'
        },
        //Header 下底線顏色
        borderBottomColor: {
            type: String,
            default: '#4faaac'
        },
        //DropdownSelect props
        // 客製化樣式(class name)
        customStyle: {
            type: String,
            default: ''
        },
        selected: {
            type: String,
            default: 'Hong Kong 香港'
        },
        //家族Logo 右邊間距
        groupLogoMargin: {
            type: Number,
            default: 20
        },
        //家族Logo 高度
        groupLogoHeight: {
            type: Number,
            default: 24
        },
        //家族Logo 圖片來源
        groupLogoImg: {
            type: String,
            default: 'https://assets.girlstyle.com/girlstyle-tw/static/images/presslogic-logo.png'
        },
        //家族Logo 連結
        groupLogoLink: {
            type: String,
            default: 'https://www.presslogic.com/'
        }
    },
    watch: {},
    computed: {},
    data () {
        return {
            options: [
                {
                    name: 'Hong Kong 香港',
                    value: 'hk'
                },
                {
                    name: 'Taiwan 台灣',
                    value: 'tw'
                },
                {
                    name: 'Singapore 新加坡',
                    value: 'sg'
                },
                {
                    name: 'India 印度',
                    value: 'in'
                },
                {
                    name: 'Korea 韓國',
                    value: 'kr'
                },
                {
                    name: 'Malaysia 馬來西亞',
                    value: 'my'
                }
            ],
            value: ''
        }
    },
    mounted () {

    },
    destroyed () {

    },
    methods: {
        valueShow (value) {
            this.value = value;
        }
    }
}
</script>

<style scoped>
body {
    padding: 0;
    margin: 0;
}
.container {
    position: relative;
    height: 100%;
}
#header {
    width: 100%;
    z-index: 99;
    cursor: pointer;
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    justify-content: center;
}
a {
    display: inline-block;
    text-decoration: none;
}
#logo-link img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
#logo-nav {
    position: absolute;
}
.social-link-nav {
    position: absolute;
    right: 0;
    top: 13px;
}
</style>