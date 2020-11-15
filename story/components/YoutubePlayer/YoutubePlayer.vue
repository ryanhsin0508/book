<template>
    <div>
        <youtube
        width="700" 
        :video-id="videoId" 
        :player-vars="options"
        @playing="playing($event)"
        @ended="ended($event)"
        @paused="paused($event)"
        ></youtube>
    </div>
</template>
<script>
import getYouTubeID from 'get-youtube-id';
export default {
    props: {
        url: {
            type: String,
            default: ''
        },
        options: {
            type: Object
        }
    },
    data () {
        return {
            videoId: '',
        }
    },
  methods: {
    getId(url){
        this.videoId = getYouTubeID(url);
    },
    playing(player) {
            this.$emit('onPlayerPlay', player);
    },
    ended(player) {
            this.$emit('onPlayerEnded', player);
    },
    paused(player) {
            this.$emit('onPlayerPause', player);
    },
  },
      mounted() {
        this.getId(this.url)
    }

}
</script>
<style scoped>

</style>
