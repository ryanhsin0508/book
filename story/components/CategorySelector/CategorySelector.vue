<template>
    <div
        v-if="hasCategories"
        :style="deviceIsDesktop && 'margin-left: -10px'"
        class="category-selector"
    >
        <el-row>
            <span
                @click="changeCategory({ slug: 'page', id: 0 })"
                :class="{ active: active === 'page' }"
            >
                {{ latestArticles }}
            </span>
            <span 
                v-for="category in categoryOutOfLayer"
                :key="category.slug"
                @click="changeCategory(category)"
                :class="{ active: active === category.slug }"
            >
                {{ category.name }}
            </span>
            <el-button 
                class="down"
                icon="el-icon-arrow-down"
                @click="isLayerShowing=!isLayerShowing"
            ></el-button>
        </el-row>
        <el-row 
            v-show="isLayerShowing"
            class="layer"
        >
            <span 
                v-for="category in categoryInLayer"
                :key="category.slug"
                @click="changeCategory(category)"
                :class="{ active: active === category.slug }"
            >
                {{ category.name }}
            </span>
        </el-row>
    </div>
</template>

<script>

export default {
    name: "HomeCategorySelector",
    props:{
        device: {
            type: String,
            default: 'desktop'
        },
        categorySelectorIsEnglish: {
            type: Boolean,
            default: true
        },
        categories: {
            type: Array,
            default: []
        }
    },
    data(){
        return {
            active: 'page',
            isLayerShowing: false,
            categoryOutOfLayer : [],
            categoryInLayer : []
        }
    },
    watch: {},
    computed: {
        hasCategories() {
            return Boolean(this.categories.length)
        },
        deviceIsDesktop() {
            return this.device==='desktop'
        },
        latestArticles() {
            if (this.categorySelectorIsEnglish) {
                return 'Latest Articles'
            } else if (this.device==='desktop') {
                return 'Latest Articles 最新文章'
            } else if (this.device==='mobile') {
                return '最新文章'
            }
        }
    },
    created() {
        for(var i in this.categories){
            var j = this.deviceIsDesktop ? 2 : 1
            if (i < j) {
                this.categoryOutOfLayer.push(this.categories[i])
            } else {
                this.categoryInLayer.push(this.categories[i])
            }
        }
    },
    mounted () {},
    destroyed () {},
    methods: {
        changeCategory(category) {
            this.active = category.slug
            this.$emit('changeCategory', category.id)
        },
    }
}
</script>

<style scoped>
.category-selector {
    text-align: left;
    margin: 15px 0;
    font-size: 16px;
    color: #aaa;
    font-weight: 400;
    font-family: NotoSans-Regular,noto sans tc;
    font-display: swap;
    overflow: hidden;
}
.category-selector span {
    display: inline-block;
    margin: 0;
    cursor: pointer;
    font-family: noto sans,sans-serif;
    font-display: swap;
    font-size: 16px;
    color: #aaa;
    padding: 0 10px;
    border-right: 1px solid #f0f0f0;
    margin: 0 0 10px;
}
.down{
    display: inline-block;
    border: 0;
    padding: 2px;
    color:#adadad;
    font-size:18px;
}
.active {
    font-size: 17px;
    font-family: noto sans,sans-serif;
    font-display: swap;
    font-weight: 700;
}
</style>