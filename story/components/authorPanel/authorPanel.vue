<template>
  <div
    :class="`meta-author ${specialAuthor ? 'special-author' : ''}`"
    :style="`maxWidth: ${width};border:${specialAuthor ? '1px solid #ffafa0' : 'none'}`"
  >
    <div class="left">
      <div
        class="author-img"
        :style="[authorImgStyle, !articlePage ? {width:'110px',height:'110px'} : '']"
      ><a
          v-if="articlePage"
          :href="`/${regionPath != '' ? regionPath + '/' : ''}author/${author.user_nicename}`"
        ></a></div>
    </div>
    <div class="right">
      <div
        class="top"
        style="display:flex;"
      >
        <template v-if="articlePage">
          <div class="meta-date">
            <span>By</span>
            <span>
              <a
                :href="`/${regionPath != '' ? regionPath + '/' : ''}author/${author.user_nicename}`"
                :style="{color}"
              >{{author.display_name}}</a>
            </span> <span>on</span> <span class="date">{{date}}</span> <span
              class="author-job"
              v-if="!specialAuthor"
              :style="{width:articlePage ? '100%':`auto`}"
            >{{author.job_title}}</span>
          </div>
        </template>
        <template v-else>
          <div class="author-name">
            <span>{{author.display_name}}</span>
          </div>
          <div class="author-job">
            <span>{{author.job_title}}</span>
          </div>
        </template>
      </div>
      <div
        class="author-description"
        v-if="!articlePage || specialAuthor"
      >
        <span>{{author.description}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        author: {
            type: Object,
            default: {}
        },
        color: {
            type: String,
            default: '#ffafa0'
        },
        date: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: '700px'
        },
        articlePage: {
            type: Boolean,
            required: true,
            default: false
        },
        regionPath: {
            type: String,
            default: ''
        }
    },
    data() {
        return {};
    },
    computed: {
        authorImgStyle() {
            return {
                backgroundImage: `url(${this.author.image})`
            };
        },
        specialAuthor() {
            let sp = ['misa'];
            console.log(this.author.user_nicename, sp[0], this.author.user_nicename == sp[0]);
            for (let i in sp) {
                if (this.author.user_nicename == sp[i]) {
                    return true;
                }
            }
            return false;
        }
    },
    methods: {}
};
</script>
<style scoped>
.meta-author {
    display: flex;
    min-height: 70px;
    padding: 20px;
    border-radius: 6px;
}

.meta-author .left {
    min-width: 70px;
    display: flex;
    justify-content: center;
    margin-right: 20px;
}

.meta-author .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
}
.meta-author .right .top {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.meta-author .right .top .meta-date {
    display: flex;
    flex-wrap: wrap;
    color: #b4b4b4;
    line-height: 1.5;
}
.meta-author .right .top .meta-date span {
    display: inline-block;
    margin-right: 5px;
    white-space: nowrap;
}
.meta-author .right .top .meta-date span:last-child {
    margin: 0;
}
.meta-author .right .top .meta-date a {
    color: #ffafa0;
}
.meta-author .author-img {
    flex-shrink: 0;
    position: relative;
    width: 70px;
    height: 70px;
    border-radius: 70px;
    background-size: cover;
    background-position: center;
}
.meta-author .author-img a {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50px;
    width: 100%;
    height: 100%;
}
.meta-author .author-name {
    font-weight: bold;
    color: #282828;
    margin-right: 10px;
}
.meta-author .author-job {
    /* font-size: 18px; */
}
.meta-author .author-description {
    color: #a1a1a1;
    font-weight: 300;
    word-break: break-all;
}

.meta-author-mobile {
    display: flex;
    max-width: 100%;
}

.meta-author-mobile .author-img {
    width: 100px;
    height: 100px;
    flex-shrink: 0;
    border-radius: 50px;
    background-size: cover;
    background-position: center;
    margin: 5px auto;
}

.meta-author-mobile .author-name {
    text-align: center;
    font-weight: bold;
    color: #282828;
    font-size: 20px;
    padding: 5px 0px;
}

.meta-author-mobile .author-description {
    color: #a1a1a1;
    font-weight: 300;
    font-size: 14px;
}
@media (max-width: 1000px) {
    .meta-author {
        font-size: 14px;
        min-height: 50px;
    }
    .meta-author .left {
        min-width: 50px;
    }
    .meta-author .author-img {
        width: 50px;
        height: 50px;
    }
}
</style>