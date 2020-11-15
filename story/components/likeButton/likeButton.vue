<template>
    <div class="likeBlock">
        <div class="like" :class="{'liked': isLike}" :style="{ height: `${size}px`, width: `${size}px`, backgroundSize:  `${size}px ${size}px`}" @click="like()"></div>
        {{ count }}
    </div>
</template>
<script>
export default {
    props: {
        // 是否點讚
        liked: {
            type: Boolean,
            default: false
        },
        // 愛心大小
        size: {
            type: [Number, String],
            default: 18
        },
        // 按讚數
        likeCount: {
            type: Number,
            default: 0
        },
        // 是否為登入狀態
        isLogin: {
            type: Boolean,
            required: true
        }
    },
    data () {
        return {
            isLike: this.liked,
            count: this.likeCount < 0 ? 0 : this.likeCount
        }
    },
    methods: {
        like () {
            if (!this.isLogin) {
                this.$emit('handleLogin');
            } else {
                this.isLike = !this.isLike;
                if (this.isLike) {
                    // like
                    this.count ++;
                } else if (this.count > 0) {
                    // unlike
                    this.count --;
                }
                this.$emit('actionLike', this.isLike, this.count);
            }
        }
    }
}
</script>
<style scoped>
.likeBlock {
    display: flex;
    align-items: center;
}
.like {
    background-repeat: no-repeat;
    background-image: url('./images/ic-general-good-off.svg');
    cursor: pointer;
    margin-right: 5px;
}
.liked {
    background-image: url('./images/ic-general-good-on.svg');
}
.like:hover {
    background-image: url('./images/ic-general-good-on.svg');
    transition: all 0.3s;
}
</style>
