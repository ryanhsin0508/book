<template>
  <div v-if="profile">
    <div :class="['avatarText', {blockCenter: !detail}, {columnBlock: !isRow}]" v-if="isHandleLogin" v-popover:user_data @click="login()" style="cursor: pointer;">
      <template v-if="isLazyLoad">
        <div class="avatarImg" :style="{ minHeight: avatarWidth + 'px', minWidth: avatarWidth + 'px', marginRight: isRow ? '12px':''}" v-if="profile.avatar && profile.avatar.length> 0" v-lazy:background-image="(profile.avatar && profile.avatar.length > 0) ? `${profile.avatar[0]}?w=${avatarWidth+100}` : ``"></div>
      </template>
      <template v-else>
        <div class="avatarImg" :style="{ minHeight: avatarWidth + 'px', minWidth: avatarWidth + 'px', marginRight: isRow ? '12px':'', backgroundImage: (profile.avatar && profile.avatar.length > 0) ? `url(${profile.avatar[0]})` : `` }" v-if="profile.avatar && profile.avatar.length> 0"></div>
      </template>
      <div :class="['avatarInfo', {columnInfo: !isRow} ]">
        {{ profile.display_name }}
      </div>
    </div>
    <nuxt-link :class="['avatarText', {blockCenter: !detail}, {columnBlock: !isRow}]" v-else :to="'/profile/' + profile.real_name" v-popover:user_data>
      <template v-if="isLazyLoad">
        <div class="avatarImg" :style="{ minHeight: avatarWidth + 'px', minWidth: avatarWidth + 'px', marginRight: isRow ? '12px':'' }" v-if="profile.avatar && profile.avatar.length> 0" v-lazy:background-image="(profile.avatar && profile.avatar.length > 0) ? `${profile.avatar[0]}?w=${avatarWidth+100}` : ``"></div>
      </template>
      <template v-else>
        <div class="avatarImg" :style="{ minHeight: avatarWidth + 'px', minWidth: avatarWidth + 'px', marginRight: isRow ? '12px':'', backgroundImage: (profile.avatar && profile.avatar.length > 0) ? `url(${profile.avatar[0]})` : `` }" v-if="profile.avatar && profile.avatar.length> 0"></div>
      </template>
      <div :class="['avatarInfo', {columnInfo: !isRow} ]">
        {{ profile.display_name }}
      </div>
    </nuxt-link>
    <div v-html="detail" :class="['avatarInfo', {columnInfo: !isRow} ]"></div>
    <el-popover ref="user_data" placement="bottom-start" width="300" trigger="hover" popper-class="b_user_popover" :open-delay="1000" :visible-arrow="false" v-if="hasPopover" style="padding: 0;">
      <div class="avatarInfoBox">
        <template v-if="isLazyLoad">
            <div v-if="profile.cover && profile.cover.length > 0" class="cover" v-lazy:background-image="(profile.cover && profile.cover.length > 0) ? `${profile.cover[0]}?w=400` : ``">
                <div v-if="profile.avatar && profile.avatar.length > 0" class="post_avatar" v-lazy:background-image="(profile.avatar && profile.avatar.length > 0) ? `${profile.avatar[0]}?w=180` : ``"></div>
            </div>
        </template>
        <template v-else>
            <div v-if="profile.cover && profile.cover.length > 0" class="cover" :style="{backgroundImage: (profile.cover && profile.cover.length > 0) ? `url(${profile.cover[0]})` : ``}">
                <div v-if="profile.avatar && profile.avatar.length > 0" class="post_avatar" :style="{backgroundImage: (profile.avatar && profile.avatar.length > 0) ? `url(${profile.avatar[0]})` : ``}"></div>
            </div>
        </template>
        <div class="info">
          <h4>{{ profile.display_name }}</h4>
          <p v-if="profile.about">{{profile.about}}</p>
          <hr>
          <div class="count">
            <div class="posts_count">
              {{ profile.post_count }} <span>{{ title[language].profile_userinfo_display_posts }}</span>
            </div>
            <div class="followers_count">
              {{ profile.fol_count }} <span>{{ title[language].profile_userinfo_display_follower }}</span>
            </div>
            <div class="actions">
                <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </el-popover>
  </div>
</template>
<script>
export default {
    data () {
        return {
            title: {
                'en': {
                    'profile_userinfo_display_posts': 'Posts',
                    'profile_userinfo_display_follower': 'Follower'
                },
                'zh-TW': {
                    'profile_userinfo_display_posts': '帖文',
                    'profile_userinfo_display_follower': '粉絲'
                },
                'ko': {
                    'profile_userinfo_display_posts': '포스트',
                    'profile_userinfo_display_follower': '팔로워'
                },
                'zh-CN': {
                    'profile_userinfo_display_posts': '帖文',
                    'profile_userinfo_display_follower': '粉丝'
                }
            }

        };
    },
    props: {
        // 是否彈出登入提醒視窗
        isHandleLogin: {
            type: Boolean,
            default: false
        },
        // 頭像大小
        avatarWidth: {
            type: [Number, String],
            default: 50
        },
        // 個人資料（必填）
        profile: {
            type: Object
        },
        // 是否有個人資料懸浮頁
        hasPopover: {
            type: Boolean,
            default: true
        },
        // 是否加入圖片懶預載
        isLazyLoad: {
            type: Boolean,
            default: true
        },
        // 選擇語系
        language: {
            type: String,
            default: 'en'
        },
        // 個人詳細資訊
        detail: {
            type: String,
            default: ''
        },
        // 是否為橫向排列（false: 直向）
        isRow: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        login () {
            this.$emit('handleLogin');
        }
    }
};
</script>
<style scoped>
.blockCenter {
    display: flex;
    align-items: center;
}
.avatarImg {
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    float: left;
}
.avatarText {
    color: inherit;
    font-size: inherit;
}
.avatarInfo {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.avatarInfoBox .cover {
    width: 100%;
    height: 120px;
    background-size: cover;
    background-position: center;
    position: relative;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}
.avatarInfoBox .cover:before {
    content: '';
    display: block;
    background-color: rgba(25, 29, 62, 0.3);
    width: 100%;
    height: 120px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}
.avatarInfoBox .post_avatar {
    min-width: 80px;
    min-height: 80px;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    position: absolute;
    top: 80px;
    left: 20px;
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.1);
}
.avatarInfoBox .info h4 {
    font-size: 18px;
    font-weight: 600;
    text-align: right;
    margin: 10px 5% 0px 35%;
    display: inline-block;
    width: 60%;
    color: black;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.avatarInfoBox h4 + p {
    font-size: 12px;
    width: 60%;
    margin: 0px 5% 10px 35%;
    text-align: right;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #9b9b9b;
}
.avatarInfoBox .info hr {
    margin: 10px 15px 0px 20px;
    background-color: #eee;
    border-width: 0;
    height: 1px;
}
.avatarInfoBox .count {
    margin: 10px 15px 10px 20px;
    display: flex;
    position: relative;
}
.avatarInfoBox .posts_count,
.avatarInfoBox .followers_count {
    font-weight: 900;
    color: #4a4a4a;
    font-size: 12px;
    width: 30%;
    padding: 5px 0px;
}
.avatarInfoBox .count span {
    color: #9b9b9b;
    font-weight: normal;
}
.columnBlock {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.columnInfo {
    width: 100%;
    text-align: center;
}
.avatarInfoBox .actions {
    position: absolute;
    right: 0;
}
</style>
<style>
.el-popover.b_user_popover {
    padding: 0;
}
</style>
