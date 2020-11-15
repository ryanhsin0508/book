<template>
    <a
        :href="`${countryPath}/tag/${encodeURIComponent(tag.slug)}`"
        :style="tagStyle"
        target="_blank"
        rel="noopener noreferrer"
        v-html="tag.name"
    >
    </a>
</template>

<script>
export default {
    props:{
        countryPath: {
            type: String,
            default: ''
        },
        tagStyleProps: {
            type: Object
        },
        tag: {
            type: Object,
            default: function() {
                return  {}
            }
        },
    },
    watch: {},
    computed: {
        tagStyle () {
            return Object.assign({}, this.tagStyleProps);
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
a {
    display: inline-block;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    background: #ffafa0;
    border-radius: 5px;
    margin: 0 10px 7px 0;
    padding: 7px 15px;
    line-height: 16px;
    letter-spacing: 2px;
    font-size: 16px;
    text-decoration: none;
    color: #fff;
}
</style>