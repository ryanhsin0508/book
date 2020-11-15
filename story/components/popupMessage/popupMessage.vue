<template>
    <div>
        <button type="button" @click="$popupMessage(type, content, second)">按我顯示提示</button>
    </div>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'success'
        },
        content: {
            type: String,
            default: '沒有文字'
        },
        second: {
            type: Number,
            default: 1
        }
    },
    data () {
        return {
            popup: false
        }
    }
}
</script>
<style scoped>
button {
    color: #fff;
    background-color: #ff5a5a;
    font-weight: 700;
    padding: 0 20px;
    border-radius: 30px;
    display: block;
    line-height: 40px;
    outline: none;
    cursor: pointer;
}
button:hover {
    opacity: 0.8;
}
button:disabled {
    background-color: #999;
    cursor: not-allowed;
}
</style>
