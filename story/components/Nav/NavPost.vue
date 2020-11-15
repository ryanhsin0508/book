<template>
    <article
        class="post"
        itemtype="https://schema.org/Article"
    >
        <template v-if="isPostShowing">
            <meta
                itemprop="datePublished"
                :content="new Date(post.post_date).toLocaleString('en-GB',{ hour12: false })"
            >
            <meta
                itemprop="dateModified"
                :content="new Date(post.post_date).toLocaleString('en-GB',{ hour12: false })"
            >
            <div class="post-layer">
                <a
                    :href="`${regionPath}${post.url}`"
                    :title="post.title"
                    @mouseover="toggleHover" 
                    @mouseleave="toggleHover"
                    @click="$emit('setPost', post)"
                >
                    <div class="meta-image">
                        <img
                            itemprop="image"
                            :src="`${post.image}?w=300&auto=format`"
                            :alt="post.post_title"
                        >
                    </div>
                    <header class="entry-header">
                        <h2
                            class="entry-title"
                            itemprop="headline"
                            :style="{ color: active ? mainColor : '#000' }"
                        >
                            {{ post.title | truncate(30) }}
                        </h2>
                    </header>
                </a>
            </div>
        </template>
    </article>
</template>

<script>
export default {
    name: "NavPost",
    props: {
        post: {
            type: Object,
            default: function() {
                return {}
            }
        },
        regionPath: {
            type: String,
            dafault: ''
        },
        mainColor:{
            type: String,
            defualt: '#ffafa0'
        }
    },
    data () {
        return {
            active: false
        }
    },
    computed: {
        isPostShowing() {
            return Boolean(Object.keys(this.post).length)
        }
    },
    methods: {
        toggleHover() {
            this.active = !this.active
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}
article {
    width: 25%;
    float: left;
    padding: 0 5px 5px;
}
.meta-image {
    width: 100%;
    overflow: hidden;
    max-height: 131px;
}
.meta-image img {
    width: 100%;
}
h2.entry-title {
    font-size: 15px !important;
    color: #000;
    line-height: 22px;
    margin: 15px 0;
    font-weight: 400;
}
a {
    text-decoration: none !important;
}
</style>
