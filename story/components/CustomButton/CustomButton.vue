<template>
    <a 
        :href="url" 
        :title="title" 
        class="custom-button"
        :class="{'custom-button-hover': active}"
        @click="click()"
        @mouseover="mouseover()"
        @mouseleave="mouseleave()"
        :style="buttomStyle"
    >
        <img v-if="imgShow" :src="imgSrc" :alt="title" :style="imgStyle">
        <i v-if="iconShow" :class="icon" :style="iconStyle"></i>
        <span :style="textStyle">{{ text }}</span>
    </a>
</template>

<script>
const defaultBtnStyle = {
    width: '700px',
    height: '50px',
    backgroundColor: '#3b5998',
    borderRadius: '50px',
    color: '#fff',
};

const defaultImgStyle = {
    width: '18px',
    height: '18px',
};
const defaultIconStyle = {
    fontSize: '18px',  
};
const defaultTextStyle = {
    fontWeight: 'bold',  
};
export default {
    props:{
        url: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        hover: {
            type: Boolean,
            default: false
        },
        btnStyleProps: {
            type: Object
        },
        imgShow: {
            type: Boolean,
            default: false
        },
        imgSrc: {
            type: String,
            default: ''
        },
        imgStyleProps: {
            type: Object
        },
        iconShow: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: 'el-icon-arrow-right'
        },
        iconStyleProps: {
            type: Object
        },
        textStyleProps: {
            type: Object
        },
    },
    computed: {
        buttomStyle() {
            return Object.assign({}, defaultBtnStyle, this.btnStyleProps || {});
        },
        imgStyle() {
            return Object.assign({}, defaultImgStyle, this.imgStyleProps || {});
        },
        iconStyle() {
            return Object.assign({}, defaultIconStyle, this.iconStyleProps || {});
        },
        textStyle() {
            return Object.assign({}, defaultTextStyle, this.textStyleProps || {});
        },
    },
    data(){
        return {
            showIcon: this.show,
            active: this.hover
        }
    },
    methods:{
        click(){
            this.$emit('customButtonclick');
        },
        mouseover() {
            this.active = true;
            this.$emit('customButtonMouseOver', this.active);
        },
        mouseleave() {
            this.active = false;
            this.$emit('customButtonMouseLeave', this.active);
        },
    }
}
</script>

<style scoped>
.custom-button {
    text-align: center;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}
.custom-button img, .custom-button i, .custom-button span{
    display: flex;
}
</style>