<template>
    <div
        id="site-navigation"
        class="container"
    >
        <ul>
            <li
                v-for="(category, i) in categories"
                :key="i"
            >
                <a :href="category.url">
                    <span>{{ category.name }}</span>

                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        categories: {
            type: Array,
            default: []
        },
    },
    watch: {},
    computed: {
    },
    data () {
        return {}
    },
    mounted () { },
    destroyed () { },
    methods: {}
}
</script>


<style scoped>
#site-navigation {
    width: 100%;
    padding: 0 16px;
    margin-top: 0;
    height: 56px;
    overflow: hidden;
}
#site-navigation > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
    border-width: 2px 0 1px;
}
#site-navigation > ul > li {
    display: inline-block;
}
#site-navigation > ul > li > a {
    color: #fff;
    font-size: 16px;
    padding: 0px 15px;
    display: block;
    text-decoration: none;
    line-height: 52px;
}
#site-navigation .sub-menu {
    position: absolute;
    width: 1053px;
    margin: -1px auto 0;
    background: #f9f9f9;
    left: 0;
    right: 0;
    z-index: 100;
    height: 270px;
}
#site-navigation .sub-menu > ul {
    list-style: none;
    font-size: 0;
    height: 50px;
    overflow: hidden;
}
#site-navigation .sub-menu > ul > li {
    display: inline-block;
}
#site-navigation .sub-menu > ul > li > a {
    display: block;
    text-decoration: none;
    line-height: 20px;
    padding: 13px 20px;
    color: #c5c5c5;
    font-size: 15px;
    font-style: italic;
}
</style>
