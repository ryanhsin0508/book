<template>
    <div>
        <video
        v-if="type == 'youtube'"
        class="video-js vjs-styles"
        ref="videoPlayer"
        :poster="image"
        :width="[device == 'desktop'? '700' :'350']"
        :data-setup='`{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "${url}"}] }`'
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
    >
    </video>

    <video
        v-else
        class="video-js vjs-default-skin"
        ref="videoPlayer"
        :poster="image"
        :width="[device == 'desktop'? '700' :'350']"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
    > 
        <source :src="url" :type="`video/${type}`" />
    </video>
    </div>
</template>
<script>
import videojs from 'video.js'
import 'videojs-youtube'
export default {
    props: {
        options: {
            type: Object
        },
        url: {
            type: String,
            default: ''
        },
        image: {
           type: String,
            default: '' 
        },
        type: {
            type: String,
            default: ''
        },
        index: {
            type: String,
            default: ''
        },
        device: {
            type: String,
            default: 'desktop'
        },
    },
    data () {
        return {
            player: null,
            hover: this.active
        }
    },
    methods: {
        videoOptions() {
            this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
                this.on('mouseenter', function() {
                    this.currentTime(0);
                    this.muted(true);
                    this.play();
                } )
                this.on('mouseleave', function() {
                    this.muted(false);
                    this.pause();
                    this.currentTime(0);
                    } )
        })
        },
        onPlayerPlay(player) {
            this.$emit('onPlayerPlay', player);
        },
        onPlayerPause(player) {
            this.$emit('onPlayerPause', player);
        },
        onPlayerEnded(player) {
            this.$emit('onPlayerEnded', player);
        }
    },
    mounted () {
        this.videoOptions();
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>
<style scoped>
.video-js >>> .vjs-big-play-button {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    line-height: 60px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    background-color: red;
}

.video-js:hover >>> .vjs-big-play-button {
    background-color: #ff7676;
}
</style>
