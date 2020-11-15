<template>
    <div 
        class="large-video" 
        :style="{maxWidth: device == 'desktop'? `${maxWidth}px` : ''}"
        :class="[device == 'desktop'? '' :'mobile']"
        @mouseover="mouseover()"
        @mouseleave="mouseleave()"
    >
        <VideoPlayer 
            :url="post.video_link" 
            :image="post.image" 
            :type="post.video_type" 
            :options="videoProps"
            :device="device"
            :index="index"
            @onPlayerPlay="playerPlay($event)"
            @onPlayerPause="playerPause($event)"
            @onPlayerEnded="playerEnded($event)"
        />
        <a v-if="headerShow" class="video-header" :href="`${host}${post.url}`" >
            <span :style="{color:hover? color :'#282828'}">{{ post.title }}</span>
            <p>{{ truncate( post.description , 45) }}</p>
            <div class="time-now">
                {{ moment(post.post_date).fromNow() }}
            </div>
        </a>
    </div>
</template>
<script>
import VideoPlayer from '../VideoPlayer/VideoPlayer.vue';
import moment from 'moment';
import truncate from 'html-truncate';
export default {
    props: {
        device: {
            type: String,
            default: 'desktop'
        },
        post: {
            type: Object
        },
        youtubeProps: {
            type: Object
        },
        videoProps: {
            type: Object
        },
        active: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: '#ffafa0'
        },
        maxWidth: {
            type: Number,
            default: 700
        },
        host:{
            type: String,
            default: ''
        },
        headerShow: {
            type: Boolean,
            default: true
        },
        index: {
            type: String,
            default: ''
        }
    },
    components: {
        VideoPlayer
    },
    data () {
        return {
            hover: this.active
        }
    },
  methods: {
    moment (time) {
        return moment(time);
    },
    truncate(string, length){
        return truncate(string, length)
    },
    mouseover() {
        this.hover = true;
        this.$emit('largeArticleMouseOver', this.hover);
    },
    mouseleave() {
        this.hover = false;
        this.$emit('largeArticleMouseLeave', this.hover);
    },
    playerPlay(player) {
        console.log('playerPlay',player)
        this.$emit('playerPlay', player);
    },
    playerPause(player) {
        console.log('playerPause',player)
        this.$emit('playerPause', player);
    },
    playerEnded(player) {
        console.log('playerEnded',player)
        this.$emit('playerEnded', player);
    },
  }
}
</script>
<style scoped>

.large-video {
    display: inline-block;
    margin-bottom: 20px;
}

.large-video .video-header {
    position: relative;
    display: block;
    height: 130px;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    border-bottom: 1px solid #f0f0f0;
}
.large-video .video-header span {
    display: inline-block;
    font-size: 21px;
    line-height: 29px;
    padding: 0 50px;
    font-weight: initial;
    margin-bottom: 15px;
}
.large-video .video-header p {
    font-size: 16px;
    color: #9c9c9c;
    line-height: 28px;
    margin: 7px 130px;
}
.large-video .video-header .time-now {
    text-align: right;
    font-size: 13px;
    color: #adadad;
}
.large-video.mobile{
    margin-bottom: 15px;
}

.large-video.mobile .video-header {
    height: initial;
}

.large-video.mobile .video-header span {
    text-align: left;
    font-size: 15px;
    line-height: 25px;
    overflow: hidden;
    padding: 15px 10px 0 3px;
    margin-bottom: 35px;
}
.large-video.mobile .video-header .time-now {
    position: absolute;
    right: 10px;
    bottom: 8px;
}
</style>
