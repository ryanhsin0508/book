<template>
    <div
        v-if="hasTag"
        class="tag__header"
        :class="device === 'desktop' ? 'tag__header--desktop' : 'tag__header--mobile'"
    >
        <p>
            <label>{{ labelIsEnglish ? 'Tag:' : '標籤:' }}</label>
            <Tag
                v-for="tag in tags"
                :key="tag.name"
                :style="`margin-right: ${spacingBetweenTags}px`"
                v-bind="{
                    tag,
                    countryPath,
                    tagStyleProps
                }"
            />
        </p>
    </div>
</template>

<script>
import Tag from './Tag'

export default {
    components: { Tag },  
    props:{
        device: {
            type: String,
            default: 'desktop',
        },
        labelIsEnglish: {
            type: Boolean,
            default: false
        },
        countryPath: {
            type: String,
            default: ''
        },
        tags: {
            type: Array,
        },
        spacingBetweenTags:{
            type: Number,
            default: 10
        },
        tagStyleProps: {
            type: Object
        },
    },
    watch: {},
    computed: {
        hasTag() {
            return Boolean(this.tags.length)
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
.tag__header {
    padding: 20px 0 0;
}
.tag__header--desktop {
    padding-bottom: 30px;
}
.tag__header--mobile {
    padding: 20px 20px 0;
}
.tag__header > p {
    margin: 0;
    line-height: 18px;
    letter-spacing: 4px;
    color: #aaa;
    font-family: NotoSans-Regular, noto sans tc, serif;
    font-display: swap;
    font-size: 18px;
    font-weight: 300;
}
.tag__header > p > label {
    font-weight: 400;
    margin-bottom: 10px;
}
</style>