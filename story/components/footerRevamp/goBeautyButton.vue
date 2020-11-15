<template>
<a class="go-to-url" :href="url" :style="{backgroundColor:btnBackground, color: btntxtColor,fontSize:`${btnTxtSize}px`}">{{ btnTxt }}</a>
</template>
<script>
export default {
  props:{
      url: {
        type: String,
        default: 'https://beautybee.com/'
      },
      btnTxt: {
        type: String,
        default: '前往BeautyBee'
      },
      btnBackground: {
				type: String,
				default: '#ff5a5a'
      },
      btntxtColor: {
				type: String,
				default: '#fff'
			},
			btnTxtSize: {
				type: Number,
				default: 15
			}
  },
  data(){
    return {
    }
  }
}
</script>
<style scoped>
.go-to-url{
	text-align: center;
    padding: 5px 17.5px;
    border-radius: 15px;
    text-decoration: none;
}
</style>