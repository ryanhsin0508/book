<template>
    <div 
        class="pinned-post"
        :class="{ slide_left: index % 2===0, slide_right: index % 2===1 }"
    >
        <a 
            :href="`${regionPath}${post.url}`"
            class="link"
            @click="$emit('setPost', post)"
        >
            <div class="greyBg" />
            <img 
                class="image swiper-lazy"
                :data-src="`${post.image}?auto=format&w=830`"
            >
            <div class="swiper-lazy-preloader-white"></div>
            <div class="block">
                <h3 :style="{ background: mainColor }">{{ post.title }}</h3>
                <span 
                    class="meta-category"
                    :style="{ color: mainColor }"
                >
                    <span 
                        v-for="(category, i) in post.cats"
                        :key="category.id"
                        :href="`${regionPath}/category/${category.slug}`"
                    >
                        <span>{{ category.name }}</span>
                        <span v-if="i !== post.cats.length-1">．</span>
                    </span>
                </span>
            </div>
        </a>
        <div class="clearfix" />
    </div>
</template>

<script>
export default {
    name: 'PinnedPost',
    props: {
        post: {
            type: Object,
            default: () => {}
        },
        index: {
            type: Number
        },
        regionPath: {
            type: String
        },
        mainColor: {
            type: String
        }
    }
}
</script>

<style scoped>
.pinned-post {
    margin-top: 0;
    display: block;
    width:1058px;
}
.pinned-post .link {
    width: 100%;
    display: block;
}
.pinned-post .link .greyBg {
    width: 100%;
    height: 283px;
    background-color: #f8f8f8;
    position: absolute;
    top: 120px;
    z-index: 0;
}
.pinned-post .link .image {
    width: auto;
    height: 435px;
    position: relative;
}
.slide_left .link .block {
    position: absolute;
    top: 0;
    left: 0;
    width: 264px;
}
.pinned-post .link .block h3 {
    padding: 30px 15px;
    margin: 0;
    font-size: 24px;
    line-height: 38px;
    color: #fff;
    text-align: center;
    width: 224px;
    font-weight: 400;
}
.slide_right .link .block {
    position: absolute;
    top: 0;
    right: 0;
    width: 264px;
}
.pinned-post .link .block {
    margin: 20px 0px 0 0;
    padding: 20px;
}
.slide_left .link {
    text-align: right;
}
.slide_right .link {
    text-align: left;
}
.pinned-post .link .block .meta-category {
    font-size: 16px;
    display: block;
    text-align: center;
    width: 200px;
    background-color: #fff;
    font-weight: 500;
    padding: 5px;
    margin: 10px auto 0;
}
</style>