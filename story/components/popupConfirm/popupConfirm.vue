<template>
    <transition name="ms-transition" mode="out-in" appear>
        <div class="popupConfirm" v-show="visible" @click.self="handleClickBg" :style="popupConfirmIndex">
            <div class="popupConfirm__content" :style="[contentStyle, contentWidth]">
                <div class="popupConfirm__content__close" @click="handleClick(false)"></div>
                <div v-if="title" class="popupConfirm__content__title" :style="titleStyle">{{title}}</div>
                <div v-if="desc" class="popupConfirm__content__desc" :style="descStyle">{{desc}}</div>
                <div class="popupConfirm__content__btns" v-if="!hiddeCancelBtn || !hiddeConfirmBtn">
                    <button v-if="!hiddeCancelBtn" class="popupConfirm__btn popupConfirm__btn--cancel" :style="cancelStyle" @click="handleClick(false)">{{ cancelBtnText }}</button>
                    <button v-if="!hiddeConfirmBtn" class="popupConfirm__btn popupConfirm__btn--confirm" :style="confirmStyle" @click="handleClick(true)">{{ confirmBtnText }}</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'ui-popupConfirm',
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        desc: {
            type: String,
            default: '',
        },
        confirmBtnText: {
            type: String,
            default: '確認'
        },
        cancelBtnText: {
            type: String,
            default: '取消'
        },
        onConfirm: {
            type: [Function, Boolean],
            default: false
        },
        onCancel: {
            type: [Function, Boolean],
            default: false
        },
        // 是否開啟點擊背景關閉功能
        closeOnClickBg: {
            type: Boolean,
            default: true
        },
        lockBody: {
            type: Boolean,
            default: true
        },
        hiddeConfirmBtn: {
            type: Boolean,
            default: false
        },
        hiddeCancelBtn: {
            type: Boolean,
            default: false
        },
        zIndex: {
            type: Number,
            default: 3000
        },
        width: {
            type: [String, Boolean],
            default: false,
        },
        contentStyle: {
            type: Object
        },
        titleStyle: {
            type: Object,
        },
        descStyle: {
            type: Object
        },
        confirmStyle: {
            type: Object
        },
        cancelStyle: {
            type: Object
        },
    },
    computed: {
        // 判斷是否有傳遞 width, 若沒有將返回空值, 避免直接使用 props, 將 contentStyle 的 width 樣式覆蓋
        contentWidth () {
            if (!this.width) return {}
            return { width: this.width }
        },
        popupConfirmIndex () {
            if (!this.zIndex) return {}
            return { zIndex: this.zIndex }
        }
    },
    watch: {
        visible (val) {
            if (!val) {
                document.body.style.overflow = '';
            }
        }
    },
    methods: {
        handleClick (type) {
            this.visible = false;
            if (type) {
                if (this.onConfirm) this.onConfirm();
            } else {
                if (this.onCancel) this.onCancel();
            };
            this.onConfirm = false;
            this.onCancel = false;
        },
        handleClickBg () {
            if (!this.closeOnClickBg) return
            this.handleClick(false)
        },
        handleLockBody () {
            document.body.style.overflow = 'hidden'
        },
        handleRemoveLockBody () {
            document.body.style.overflow = ''
        }
    },
    mounted () {
        if (this.lockBody) {
            this.handleLockBody()
        }
    }
}
</script>
<style scoped>
.popupConfirm {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 3000;
    backface-visibility: hidden;
}

.popupConfirm__content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    box-sizing: border-box;
    width: 250px;
    max-width: 80%;
    min-height: 250px;
    padding: 59px 25px 50px 25px;
    transition: all 0.3s;
    border-radius: 5px;
    border: solid 1px #eeeeee;
    background-color: #fff;
}

.popupConfirm__content__close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 16px;
    height: 16px;
    transform: rotate(45deg);
    cursor: pointer;
}
.popupConfirm__content__close::before,
.popupConfirm__content__close::after {
    content: '';
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 13px;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.45);
}
.popupConfirm__content__close::after {
    transform: translate(-50%, -50%) rotate(90deg);
}

.popupConfirm__content__title {
    width: 100%;
    text-align: center;
    color: rgba(0, 0, 0, 0.85);
    font-size: 16px;
    line-height: 1.6;
    font-weight: 500;
}

.popupConfirm__content__desc {
    width: 100%;
    color: #9b9b9b;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: -0.4px;
    margin: 20px 0;
}

.popupConfirm__content__btns {
    display: flex;
    margin-top: 25px;
}

.popupConfirm__btn {
    padding: 0px 20px;
    min-width: 90px;
    height: 36px;
    line-height: 36px;
    border-radius: 200px;
    background-color: #ff5a5a;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    text-align: center;
    outline: none;
    border: none;
}

.popupConfirm__btn.popupConfirm__btn--confirm {
    box-shadow: 0 6px 6px 0 rgba(246, 160, 148, 0.3);
}
.popupConfirm__btn.popupConfirm__btn--cancel {
    background-color: #9b9b9b;
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.1);
}

.popupConfirm__btn + .popupConfirm__btn {
    margin-left: 16px;
}

@media only screen and (max-width: 568px) {
    .popupConfirm__content {
        width: 90%;
        max-width: 400px;
        padding: 10px 20px;
    }
}

/* 轉場動畫 */
.ms-transition-enter,
.ms-transition-leave-to {
    opacity: 0;
}

.ms-transition-enter-to,
.ms-transition-leave {
    opacity: 1;
}

.ms-transition-enter-active,
.ms-transition-leave-active {
    transition: opacity 0.3s;
}

.ms-transition-enter .popupConfirm__content,
.ms-transition-leave .popupConfirm__content {
    transform: translateY(-10%);
}
</style>
