import Vue from 'vue';
import Component from './popupConfirm.vue';

const PopupConfirmConstructor = Vue.extend(Component);

let popupInstance = {};
let isInstance = false;

const popup = options => {
    if (Vue.prototype.$isServer) return;

    // 若已經實例過, 需先銷毀之前實例與 dom 元素
    if (isInstance) destroy();

    // 插件 init
    function init() {
        // 解構外部所有自訂參數
        const { ...rest } = options || {}; ;

        popupInstance = new PopupConfirmConstructor({
            // 外部自訂參數帶入
            propsData: {
                ...rest
            }
        });

        // 註冊到 vm
        popupInstance.vm = popupInstance.$mount();

        // 渲染到 body 上
        document.body.appendChild(popupInstance.vm.$el);

        // 顯示 popup
        popupInstance.vm.visible = true;

        isInstance = true;
    }
    init();

    // 銷毀實例, 移除 dom
    function destroy() {
        document.body.removeChild(popupInstance.vm.$el);
        popupInstance.vm.$destroy();
        popupInstance = null;
    }

    return popupInstance.vm;
};

export default popup;
