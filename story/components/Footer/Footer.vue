<template>
    <footer id="footer"
        :style="{
            background: bgColor,
            height: `${height}px`,
            fontStyle: isFontItalic ? 'italic' : 'static',
            fontSize: `${fontSize}px`
        }"
    >
        <Logo
            v-bind="{ 
                logoHeight,
                spacingBetweenLogoAndDividingline,
                staticHost,
                companyLogoReference,
                companyLink,
                magazineLogoReference,
                magazineLink
            }"
        />
        <Nav
            v-bind="{
                navLinkList,
                navLinkColor,
                spacingBetweenLogoAndNavlink,
                spacingBetweenNavlinkAndCopyright,
                spacingBetweenNavlinks
            }"
        />
        <Copyright
            v-bind="{
                magazineName,
                copyrightColor
            }"
        />
    </footer>
</template>

<script>
import Logo from './FooterLogo'
import Nav from './FooterNav'
import Copyright from './FooterCopyright'

export default {
    components: {
        Logo,
        Nav,
        Copyright
    },  
    props:{
        bgColor: {
            type: String,
            default: '#ffafa0'
        },
        height: {
            type: Number,
            default: 300
        },
        fontSize: {
            type: Number,
            default: 14
        },
        isFontItalic: {
            type: Boolean,
            default: true
        },
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
            type: String,
            default: 'https://pretty.presslogic.com/'
        },
        logoHeight: {
            type: Number,
            default: 80
        },
        spacingBetweenLogoAndDividingline: {
            type: Number,
            default: 30
        },
        navLinkList: {
            type: Array,
            default: []
        },
        navLinkColor: {
            type: String,
            default: 'white'
        },
        spacingBetweenLogoAndNavlink: {
            type: Number,
            default: 40
        },
        spacingBetweenNavlinkAndCopyright: {
            type: Number,
            default: 30
        },
        spacingBetweenNavlinks: {
            type: Number,
            default: 30
        },
        magazineName: {
            type: String,
            default: 'Magazine'
        },
        copyrightColor: {
            type: String,
            default: 'white'
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
#footer {
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    justify-content: center;
}
</style>