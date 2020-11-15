<template>
    <nav :style="{ 
        marginTop: `${spacingBetweenLogoAndNavlink}px`,
        marginBottom: `${spacingBetweenNavlinkAndCopyright}px`
    }">
        <ul v-show="isNavlinklistShowing">
            <li v-for="(link, i) in navLinkList" :key='i'>
                <a 
                    :style="{ 
                        color: navLinkColor,
                        marginRight: (i < navLinkList.length-1) ? `${spacingBetweenNavlinks}px` : '0'
                    }"
                    :href="link.reference"
                    :rel="link.isExternalLink && 'noopener noreferrer'"
                    :target="link.isExternalLink ? '_blank': '_self'"
                >{{ link.name }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props:{
        navLinkList: {
            type: Array,
            default: []
        },
        navLinkColor: {
            type: String,
            default: 'white'
        },
        spacingBetweenNavlinks: {
            type: Number,
            default: 20
        },
        spacingBetweenLogoAndNavlink: {
            type: Number
        },
        spacingBetweenNavlinkAndCopyright: {
            type: Number
        },
    },
    watch: {},
    computed: {
        isNavlinklistShowing() {
            return Boolean(this.navLinkList.length)
        }
    },
    data() {
        return {}
    },
    mounted () {},
    destroyed () {},
    methods: {}
}
</script>

<style scoped>
nav {
    text-align: center;
}
ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
li {
    display: inline-block;
}
a {
    display: inline-block;
    text-decoration: none;
}
</style>