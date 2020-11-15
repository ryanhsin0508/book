<template>
  <article
    :id="device"
    class="article"
  >
    <div v-html="articleStyles"></div>
    <div class="meta-image">
      <img
        :src="`${staticHost}/images/loading.png`"
        v-lazy="`${post.image}?auto=format&w=830`"
        :alt="post.title"
      />
    </div>
    <h1 class="title">{{ post.title }}</h1>
    <span class="meta-category">
      <a
        v-for="(cat, i) in post.cats"
        :key="i"
        :href="`${(page.country_code.toLowerCase() == 'hk' || page.country_code.toLowerCase() == '') ? '' : '/' + page.country_code.toLowerCase()}/category/${cat.slug}`"
        :style="{ color: color }"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ cat.name }}
        <span v-if="i !== post.cats.length - 1">．</span>
      </a>
    </span>
    <AuthorPanel
      class="pl-author-panel"
      :author="post.author"
      :regionPath="page.country_code.toLowerCase()"
      :date="post.post_date | date"
      :articlePage="true"
      :color="color"
    />

    <div class="meta-item">
      <div
        v-if="isAdShow"
        class="ad-block"
      >
        <GptAd
          v-if="isMobile"
          adUnit="blog-mobile-post-top-300x250"
          :size="[[300, 250], [1, 1]]"
          :page="page"
          :categories="categories"
          :article="article"
        ></GptAd>
      </div>
    </div>
    <div class="entry-content">
      <div v-html="firstLine"></div>
      <div
        v-if="isAdShow"
        class="ad-block"
      >
        <GptAd
          v-if="isMobile"
          ad-unit="presslogic-interscroller"
          :size="[1, 1]"
          :page="page"
          :categories="categories"
          :article="article"
        />
        <div id="inscroll-banner"></div>
      </div>
      <div v-html="top"></div>
      <div
        v-if="isAdShow"
        class="ad-block"
      >
        <!-- <div v-if="isDesktop && regionPath==='/tw'" style="height:250px; width:700px;">
            <GptAd
                ad-unit="presslogic-700x250-article-center"
                :size="[700, 250]"
                :page="page"
                :categories="categories"
                :article="article"
            ></GptAd>
        </div> -->

        <GptAd
          v-if="isDesktop && regionPath!=='/tw'"
          ad-unit="presslogic-300x250/presslogic-300x250-article-content-lrec-center"
          :size="[300, 250]"
          :page="page"
          :categories="categories"
          :article="article"
        />

        <GptAd
          v-if="isDesktop && regionPath!=='/tw'"
          ad-unit="presslogic-300x250/presslogic-300x250-article-content-lrec-center2"
          :size="[300, 250]"
          :page="page"
          :categories="categories"
          :article="article"
        />

        <GptAd
          v-if="isMobile"
          ad-unit="blog-mobile-post-middle-300x250-c"
          :size="[[300, 250], [1, 1]]"
          :page="page"
          :categories="categories"
          :article="article"
        />
      </div>
      <Carousel
        v-if="isCarouselShow"
        v-bind="{
            device,
            regionPath,
            posts: hottestPosts,
            mainColor: color,
            maxWidth: 218
        }"
      />
      <div v-html="bottom"></div>
      <div
        v-if="isAdShow"
        class="ad-block"
      >
        <GptAd
          v-if="isDesktop"
          ad-unit="presslogic-300x250/presslogic-300x250-article-content-lrec-bottom"
          :size="[300, 250]"
          :page="page"
          :categories="categories"
          :article="article"
        />
        <GptAd
          v-if="isDesktop"
          ad-unit="presslogic-300x250/presslogic-300x250-article-content-lrec-bottom2"
          :size="[300, 250]"
          :page="page"
          :categories="categories"
          :article="article"
        />
        <GptAd
          v-if="isMobile"
          ad-unit="blog-mobile-post-bottom-300x250-b"
          :size="[[300, 250], [1, 1]]"
          :page="page"
          :categories="categories"
          :article="article"
        />
      </div>
    </div>
    <slot name="credit-msg"></slot>
    <TagGroup v-bind="{
        device,
        labelIsEnglish,
        countryPath: regionPath,
        tagStyleProps: { background: tagColor, color:fontColor },
        tags: post.tags
    }" />
  </article>
</template>

<script>
import Carousel from '../Carousel/CarouselForMainArticle/CarouselForMainArticle';
import AuthorPanel from '../authorPanel/authorPanel';
import TagGroup from '../TagGroup/TagGroup';
import moment from 'moment';

export default {
    name: 'MainArticle',
    components: {
        TagGroup,
        Carousel,
        AuthorPanel
    },
    props: {
        device: {
            type: String,
            default: 'desktop'
        },
        post: {
            type: Object,
            default: function() {
                return {};
            }
        },
        hottestPosts: {
            type: [Array, Object]
        },
        color: {
            type: String,
            default: '#ffafa0'
        },
        mainColor: {
            type: String
        },
        fontColor: {
            type: String,
            default: '#ffffff'
        },
        staticHost: {
            type: String,
            default: ''
        },
        regionPath: {
            type: String,
            default: ''
        },
        defaultAuthor: {
            type: String,
            default: 'PressLogic'
        },
        isArticleAuthorIntroShow: {
            type: Boolean,
            default: false
        },
        labelIsEnglish: {
            type: Boolean,
            default: true
        },
        isCarouselShow: {
            type: Boolean,
            default: false
        },
        page: {
            type: Object,
            required: true
        },
        categories: {
            type: Array,
            required: true,
            default: []
        },
        article: {
            type: Object,
            required: true
        }
    },
    data() {
        let that = this;
        return {
            articleStyles: '',
            firstLine: '',
            top: '',
            bottom: '',
            tagColor: that.mainColor || that.color
        };
    },
    watch: {
        post: function() {
            this.initPage();
        }
    },
    computed: {
        isDesktop() {
            return this.device === 'desktop';
        },
        isMobile() {
            return this.device === 'mobile';
        },
        hasPostAuthor() {
            return !!this.post.author && !!this.post.author.user_nicename && !!this.post.author.display_name;
        },
        isAdShow() {
            return this.post.remove_ads == 0;
        }
    },
    filters: {
        date: function(date) {
            return moment(date).format('DD MMM YYYY');
        },
        moment: function(date) {
            return moment(date).format();
        }
    },
    created() {
        this.initPage();
    },
    mounted() {
            this.appendScript();

            window.addEventListener('scroll', this.datasrcToSrc, { once: true, passive: true });

    },
    methods: {
        moment: function(date) {
            return moment(date);
        },
        initPage() {
            this.srcToDatasrc();
            this.splitPostContentIntoParagraph();
            this.articleStyles = `<style>
                a, h3 { 
                    color: ${this.color};
                }
                .article div.meta-author__intro, .article div.meta-author__intro a:first-child div {
                    border: 1px solid ${this.color};
                }
            </style>`;
        },
        appendScript() {
            if (!this.post.post_content) return;

            // const re = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
            const re = /<script type=\"presslogic\/form\">([\s\S]*?)<\/script>/gm;

            let match;
            const scripts = [];
            while ((match = re.exec(this.post.post_content))) {
                // full match is in match[0], whereas captured groups are in ...[1], ...[2], etc.
                //   console.log(match[1]);
                const sc = document.createElement('script');
                sc.innerHTML = match[1];
                scripts.push(sc);
            }

            this.$nextTick(() => {
                for (let i = 0; i < scripts.length; i++) {
                    this.$el.appendChild(scripts[i]);
                }
            });
        },
        srcToDatasrc() {
            // let newContent = this.post.post_content.replace(/\s{1}src=/g, ' data-src=');
            this.$emit('lazyLoad', this.post.post_content)
            // this.$store.commit('setPost', {...this.post, ...{post_content: newContent}})
        },
        datasrcToSrc() {
            let arr = [...document.querySelectorAll('.entry-content *')];
            arr.forEach(item => item.getAttribute('data-src') && item.setAttribute('src', item.getAttribute('data-src')));
        },
        splitPostContentIntoParagraph(lines = [], median = 0) {
            lines = this.post.post_content.split('\n');
            median = lines.length / 2;
            if (this.device === 'mobile') this.firstLine = lines.shift();
            lines.forEach((line, index) => (index < median ? (this.top += line) : (this.bottom += line)));
        }
    }
};
</script>

<style scoped>
/* General */
article {
    word-break: break-word;
}

/* Desktop */
#desktop.article {
    padding-bottom: 10px;
    margin-top: 15px;
}
#desktop.article h1.title {
    line-height: 36px;
    margin: 0;
    padding: 30px 38px 20px;
    width: 100%;
    text-align: center;
    color: #000;
    font-size: 26px;
    font-family: NotoSans-Regular, noto sans tc;
    font-display: swap;
    font-weight: 400;
    box-sizing: border-box;
}
#desktop.article .meta-category {
    font-size: 18px;
    display: block;
    margin-bottom: 15px;
    text-align: center;
    font-family: NotoSans-Regular, noto sans tc, serif;
    font-display: swap;
    padding: 0 0 40px;
    border-bottom: 1px solid #f0f0f0;
}
#desktop.article .fb-like-button {
    height: 30px;
    padding: 5px 0;
}
#desktop.article .entry-content {
    line-height: 35px;
    font-size: 18px;
}
#desktop.article >>> .photo-credit {
    position: absolute;
    color: #000;
    right: 0;
    bottom: 10px;
    height: 38px;
    line-height: 35px;
    font-size: 13px;
    font-family: noto sans, sans-serif;
    font-display: swap;
    display: -webkit-flex;
    display: flex;
}
#desktop.article >>> .photo-credit-box {
    position: relative;
    max-width: 100% !important;
    background: #f6f7fb no-repeat center center;
    background: url(/images/loader.gif) #f6f7fb no-repeat center center;
}
#desktop.article >>> .photo-credit span {
    padding: 0 35px;
    background-color: #fff;
    display: inline-block;
}
#desktop.article >>> .photo-credit:before {
    content: ' ';
    width: 25px;
    height: 38px;
    display: inline-block;
    background: url(/images/photo-by.png) 0 0 no-repeat transparent;
}
#desktop.article .entry-content >>> img {
    width: 100%;
    height: auto;
    margin: 15px 0 30px;
}
#desktop.article .entry-content >>> p {
    margin-bottom: 10px;
}
#desktop.article .ad-block {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
#desktop .ad-block > div {
    margin: 15px auto;
}
/* Mobile */
#mobile.article {
    font-size: 17px;
    margin-top: 15px;
}
#mobile.article h1.title {
    font-size: 18px;
    line-height: 28px;
    margin: 15px 10px 10px;
    text-align: center;
    color: #000;
    padding: 15px 10px 0;
}
#mobile.article .meta-category {
    border-bottom: 1px solid #f0f0f0;
    display: block;
    text-align: center;
    padding-bottom: 15px;
    color: #adadad;
    margin: 0 20px;
    font-size: 16px;
}
#mobile .fb-like-button {
    height: 42px;
    text-align: left;
    padding: 5px 10px;
}
#mobile.article .entry-content {
    line-height: 35px;
    padding: 10px 0 0;
}
#mobile.article >>> .photo-credit {
    position: absolute;
    color: #000;
    right: 0;
    bottom: 5px;
    height: 30px;
    line-height: 30px;
    font-size: 13px;
    font-family: noto sans, sans-serif;
    font-display: swap;
    display: -webkit-flex;
    display: flex;
}
#mobile.article >>> .photo-credit-box {
    position: relative;
    max-width: 100% !important;
    background: #f6f7fb no-repeat center center;
    background: url(/images/loader.gif) #f6f7fb no-repeat center center;
}
#mobile.article >>> .photo-credit span {
    padding: 0 20px;
    background-color: #fff;
    display: inline-block;
}
#mobile.article >>> .photo-credit:before {
    content: ' ';
    width: 25px;
    height: 30px;
    display: inline-block;
    background: url(/images/photo-by.png) 0 0 no-repeat transparent;
}
#mobile.article .entry-content >>> img {
    height: auto;
    margin: 15px 0 30px;
}
#mobile.article .entry-content >>> p {
    margin-bottom: 10px;
    padding: 0 18px;
}
#mobile.article .ad-block {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
#mobile .ad-block > div {
    margin: 15px auto;
}
</style>
