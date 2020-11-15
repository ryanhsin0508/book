<template>
    <div 
        class="copyright"
        :style="{ 
            color: copyrightColor
        }"
    >Copyright &copy; {{ new Date().getFullYear() }} {{ magazineName }}. All rights reserved.</div>
</template>

<script>
export default {
    props:{
        copyrightColor: {
            type: String,
            default: 'white'
        },
        magazineName: {
            type: String,
            default: 'Magazine Name'
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
.copyright {
    text-align: center;
}
</style>