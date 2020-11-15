<template>
    <transition
        name="custom-classes-transition"
        enter-active-class="animated fadeInDown faster"
        leave-active-class="animated fadeOutUp faster"
    >
        <div
            v-show="show"
            id="header-small"
            :class="{'shadow': headerShadow}"
            :style="{
            background: bgColor,
            boxShadow: bgColor,
            height: `${height}px`,
            }"
        >
            <div
                class="container"
                :style="{
                width:`${containerWidth}px`,
            }"
            >
                <div class="top-header">

                    <div id="logo-nav">
                        <a
                            :href="groupLogoLink"
                            target="_blank"
                        >
                            <img
                                id="presslogic-logo"
                                :src="groupLogoImg"
                                :style="{ 
                                    height: `${groupLogoHeight}px`,
                                    marginRight: `${groupLogoMargin}px`
                                }"
                            >
                        </a>
                        <a
                            id="logo-link"
                            :href="magazineLogoLink"
                        >
                            <img
                                :src="magazineLogoImg"
                                id="logo"
                                alt=""
                            >
                        </a>
                    </div>

                    <div class="menu">
                        <navmenu :categories="categories" />
                    </div>

                    <div id="searchIcon">
                        <slot></slot>
                    </div>

                </div>

            </div>

        </div>
    </transition>
</template>

<script>
import navmenu from './Menu'
export default {
    components: {
        navmenu
    },
    props: {
        //Header 是否顯示
        show: {
            type: Boolean,
            default: false
        },
        //Header 內容寬度
        containerWidth: {
            type: Number,
            default: 1085
        },
        //捲軸滑動多少時顯示 Header
        scroll: {
            type: Number,
            default: 122
        },
        //Header 下方是否要陰影
        headerShadow: {
            type: Boolean,
            default: false
        },
        //家族LOGO 圖片來源
        groupLogoImg: {
            type: String,
            default: 'https://assets.presslogic.com/uat/presslogic-hk-hd/static/images/presslogic-logo.png'
        },
        //家族LOGO 連結
        groupLogoLink: {
            type: String,
            default: 'https://www.presslogic.com/'
        },
        //家族LOGO 高度
        groupLogoHeight: {
            type: Number,
            default: 24
        },
        //家族LOGO 右邊間距
        groupLogoMargin: {
            type: Number,
            default: 20
        },
        //雜誌圖片來源
        magazineLogoImg: {
            type: String,
            default: 'https://assets.girlstyle.com/girlstyle-tw/static/images/girls/logo-small.png?v=1'
        },
        //雜誌圖片連結
        magazineLogoLink: {
            type: String,
            default: '/'
        },
        //Header 背景色
        bgColor: {
            type: String,
            default: '#ffafa0'
        },
        //Header 高度
        height: {
            type: Number,
            default: 56
        },
        //Menu 資料
        categories: {
            type: Array,
            default: []
        }
    },
    watch: {},
    computed: {},
    data () {
        return {
            show: false
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll (event) {
            if (window.scrollY > this.scroll) {
                this.show = true
            } else {
                this.show = false
            }
        }
    }
}
</script>

<style scoped>
#header-small .menu {
    margin-left: 220px;
    margin-right: 50px;
    /* background: #ecf5ff87; */
}

#header-small {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    cursor: pointer;
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    justify-content: center;
}
#header-small .container {
    position: relative;
    margin: auto;
    height: 100%;
    /* background: #ccc; */
}

#header-small .top-header {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

#header-small #logo-nav {
    /* width: 150px; */
    height: 35px;
    position: absolute;
    left: 0;
}

#header-small #logo-nav > a > #presslogic-logo {
    top: 0;
}

#presslogic-logo {
    float: left;
    padding: 0 0;
    position: relative;
    top: 10px;
}
#header-small #logo-link {
    right: inherit;
    line-height: 52px;
    left: 145px;
}

#header-small #logo-link #logo {
    width: 85px;
}
a {
    text-decoration: none;
}
.shadow {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
}
#searchIcon {
    position: absolute;
    top: 14px;
    right: 7px;
    width: 100px;
    height: 50px;
}
</style>