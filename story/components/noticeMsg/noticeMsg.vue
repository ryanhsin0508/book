<template>
  <div
    class="copyNotice"
    :style="msgStyle"
  >
    <img
      v-if="imgStyleProps"
      :src="`${iconSrc}`"
      :style="imgStyleProps"
    >
    <p>{{txt}}</p>
  </div>
</template>
<script>
const defaultStyle = {
    // 外框default樣式
    width: '150px',
    height: '150px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '10px',
    color: '#fff',
    zIndex: 1000000,
    padding: '15px',
    lineHeight: '1.2em',
    letterSpacing: '-0.4px',
    textAlign: 'center'
};
export default {
    props: {
        // 提示文字
        txt: {
            type: String,
            required: true
        },
        // icon 路徑
        iconImg: {
            type: String
        },
        // 外框style
        msgStyleProps: {
            type: Object
        },
        // 圖片icon style
        imgStyleProps: {
            type: Object
        }
    },
    computed: {
        msgStyle() {
            return Object.assign({}, defaultStyle, this.msgStyleProps || {});
        }
    },
    data() {
        return {
            iconSrc: !this.iconImg ? '' : require(`${this.iconImg}`)
        };
    }
};
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}
div {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    font-size: inherit;
    border-radius: inherit;
    color: inherit;
}
</style>
