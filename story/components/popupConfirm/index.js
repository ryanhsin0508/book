import PopupConfirm from './popupConfirm.vue';
import popup from './function';

// 宣告全域組件
export default Vue => {
    Vue.component(PopupConfirm.name, PopupConfirm);
    Vue.prototype.$popupConfirm = popup;
};
