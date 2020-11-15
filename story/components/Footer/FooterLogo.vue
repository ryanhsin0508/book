<template>
    <div class="logo">
        <a  target="_blank"
            :href="companyLink"
            :style="{ 
                paddingRight: `${spacingBetweenLogoAndDividingline}px`,
                height: `${logoHeight}px`
            }"
        >
            <img
                :src="`${staticHost}/images/loading.png`"
                v-lazy="`${staticHost}${companyLogoReference}`"
                :style="{ height: `${logoHeight}px` }"
            >
        </a>
        <a  target="_blank"
            :href="magazineLink"
            :style="{ 
                paddingLeft: `${spacingBetweenLogoAndDividingline}px`,
                height: `${logoHeight}px`
            }"
        >
            <img
                :src="`${staticHost}/images/loading.png`"
                v-lazy="`${staticHost}${magazineLogoReference}`"
                :style="{ height: `${logoHeight}px` }"
            >
        </a>
    </div>
</template>

<script>
export default {
    props:{
        staticHost: {
            type: String,
            default: 'https://assets.presslogic.com/presslogic-hk-hd'
        },
        companyLogoReference: {
            type: String,
            default: '/images/presslogic_logo_PL_white.png'
        },
        companyLink: {
            type: String,
            default: 'https://www.presslogic.com/'
        },
        magazineLogoReference: {
            type: String
        },
        magazineLink: {
            type: String
        },
        logoHeight: {
            type: Number,
            default: 80
        },
        spacingBetweenLogoAndDividingline: {
            type: Number,
            default: 30
        }
    },
    watch: {},
    computed: {},
    data() {
        return {}
    },
    mounted () {},
    destroyed () {},
    methods: {}
}
</script>

<style scoped>
a {
    display: inline-block;
    text-decoration: none;
}
img {
    display: inline-block;
}
.logo {
    display: flex;
    justify-content: center;
}
.logo a:first-child {
    border-right: 1px solid white;
}
</style>