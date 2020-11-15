<template>
    <div>
        <svg style="transform: rotate(90deg)" :width="width" :height="width" xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="10%" :stop-color="colorStart" />
                <stop offset="50%" :stop-color="colorEnd" />
            </linearGradient>
            <circle :r="(width-radius)/2" :cy="width/2" :cx="width/2" :stroke-width="radius" :stroke="backgroundColor" fill="none" />
            <circle ref="$bar" :r="(width-radius)/2" :cy="width/2" :cx="width/2" stroke="url(#bg)" :stroke-width="radius" :stroke-linecap="isRound ? 'round' : 'square'" :stroke-dasharray="(width-radius)*3.14" :stroke-dashoffset="isAnimation ? (width-radius) * 3.14 : (width - radius) * 3.14 * (100 - progress) / 100" fill="none" />
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        width: {
            type: [Number, String],
            default: 200
        }, // 圓形大小
        radius: {
            type: [Number, String],
            default: 10
        }, // 進度條厚度
        progress: {
            type: [Number, String],
            default: 70
        }, // 百分比
        colorStart: {
            type: String,
            default: '#ffc16f'
        }, // 進度條色
        colorEnd: {
            type: String,
            default: '#ffe191'
        }, // 進度條色
        backgroundColor: {
            type: String,
            default: '#ededed'
        }, // 背景颜色
        isAnimation: {
            type: Boolean,
            default: true,
        }, // 是否是帶動畫
        isRound: {
            type: Boolean,
            default: true,
        },
        id: { 
            type: [String, Number],
            default: 1,
        }, // 組件 id，多次使用時確保 id 不同
        duration: {
            type: [String, Number],
            default: 1000,
        }, // 動畫時間
        delay: {
            type: [String, Number],
            default: 200,
        }, // 延遲多久執行
        timeFunction: {
            type: String,
            default: 'cubic-bezier(0.99, 0.01, 0.22, 0.94)',
        }, // 動畫緩動函數
    },
    data () {
        return {
            idStr: `circle_progress_keyframes_${this.id}`
        }
    },
    beforeDestroy () {
        // 清除舊組件的樣式
        document.getElementById(this.idStr) && document.getElementById(this.idStr).remove()
    },
    mounted () {
        if (this.isAnimation) {
            // 重複定義判斷
            if (document.getElementById(this.idStr)) {
                console.warn('vue-circle-progress should not have same id style')
                document.getElementById(this.idStr).remove()
            }
            // 動態加入 style
            let style = document.createElement('style')
            style.id = this.idStr
            style.type = 'text/css'
            style.innerHTML = `
                @keyframes circle_progress_keyframes_name_${this.id} {
                from {stroke-dashoffset: ${(this.width - this.radius) * 3.14}px;}
                to {stroke-dashoffset: ${(this.width - this.radius) * 3.14 * (100 - this.progress) / 100}px;}}
                .circle_progress_bar${this.id} {animation: circle_progress_keyframes_name_${this.id} ${this.duration}ms ${this.delay}ms ${this.timeFunction} forwards;}`
            document.getElementsByTagName('head')[0].appendChild(style)
            this.$refs.$bar.classList.add(`circle_progress_bar${this.id}`)
        }
    },
}
</script>