<template>
        <div 
            class="icon-btn" 
            :class="{'icon-btn-hover': active }"
            @click="click()"
            @mouseover="mouseover()"
            @mouseleave="mouseleave()"
            :style="btnStyle" 
        >
            <i :class="direction"></i>
        </div>
</template>

<script>
const defaultStyle = {  // 外框default樣式
    width: '40px',
    height: '40px',
    backgroundColor: '#ffafa0',
    borderRadius: '50%',
    color: '#fff',
    fontSize: '20px'
};

export default {
    props:{
        customStyle: {
            type: Object
        },
        hover: {
            type: Boolean,
            default: false
        },
        direction: {
            type: String,
            default: 'el-icon-arrow-up'
        }
    },
    computed: {
        btnStyle () {
            return Object.assign({}, defaultStyle, this.customStyle || {})
        }
    },
    data(){
        return {
            showIcon: this.show,
            active: this.hover
        }
    },
    methods:{
        click(){
            this.$emit('IconBtnClick');
        },
        mouseover() {
            this.active = true;
            this.$emit('IconBtnMouseOver', this.active);
        },
        mouseleave() {
            this.active = false;
            this.$emit('IconBtnMouseLeave', this.active);
        },
    }
}
</script>

<style scoped>
    .icon-btn {
        position: relative;
        z-index: 99;
        cursor: pointer;
    }
    .icon-btn i {
        position: absolute; 
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-weight: bold;
    }
    .radius {
        border-radius: 50%;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>