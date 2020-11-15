import { storiesOf } from '@storybook/vue';
import { withKnobs, object, text, boolean, number } from '@storybook/addon-knobs';
const stories = storiesOf('Beautybee|popupConfirm', module);

// 宣告全域組件
import Vue from 'vue';
import PopupConfirm from './index.js';
import popupConfirmComponent from './popupConfirm.vue';
Vue.use(PopupConfirm);

stories.addDecorator(withKnobs);
stories.add(
    'popupConfirmComponent',
    () => ({
        components: { popupConfirmComponent },
        props: {
            title: {
                default: text('title', '這是標題...')
            },
            desc: {
                default: text('desc', '這是內文這是內文這是內文...')
            },
            confirmBtnText: {
                default: text('confirmBtnText', '確認')
            },
            cancelBtnText: {
                default: text('cancelBtnText', '取消')
            },
            closeOnClickBg: {
                default: boolean('closeOnClickBg', true)
            },
            lockBody: {
                default: boolean('lockBody', true)
            },
            hiddeConfirmBtn: {
                default: boolean('hiddeConfirmBtn', false)
            },
            hiddeCancelBtn: {
                default: boolean('hiddeCancelBtn', false)
            },
            zIndex: {
                default: number('zIndex', 3000)
            },
            width: {
                default: text('width', '50vw')
            },
            contentStyle: {
                default: object('contentStyle', { borderRadius: '0px' })
            },
            titleStyle: {
                default: object('titleStyle', {})
            },
            descStyle: {
                default: object('descStyle', { textAlign: 'center' })
            },
            confirmStyle: {
                default: object('confirmStyle', {})
            },
            cancelStyle: {
                default: object('cancelStyle', {})
            }
        },

        methods: {
            // 彈窗實例方法
            openPopup() {
                this.$popupConfirm({
                    title: this.title,
                    desc: this.desc,
                    cancelBtnText: this.cancelBtnText,
                    confirmBtnText: this.confirmBtnText,
                    closeOnClickBg: this.closeOnClickBg,
                    lockBody: this.lockBody,
                    hiddeConfirmBtn: this.hiddeConfirmBtn,
                    hiddeCancelBtn: this.hiddeCancelBtn,
                    zIndex: this.zIndex,
                    width: this.width,
                    contentStyle: this.contentStyle,
                    titleStyle: this.titleStyle,
                    descStyle: this.descStyle,
                    confirmStyle: this.confirmStyle,
                    cancelStyle: this.cancelStyle,
                    onConfirm: this.onConfirm,
                    onCancel: this.onCancel
                });
            },
            // 點擊確認後要執行的方法
            onConfirm() {
                console.log('click 確認...');
                // to do ...
            },
            // 點擊取消後要執行的方法
            onCancel() {
                console.log('click 取消...');
                // to do ...
            }
        },
        propsDescription: {
            popupConfirmComponent: {
                visible: '調用時將會自動設定, 調用時可不用傳遞',
                title: '彈窗標題',
                desc: '彈窗內文',
                confirmBtnText: '確認按鈕文字，可傳入多語系變數, this.$translate("comment", "confirm")',
                cancelBtnText: '取消按鈕文字，可傳入多語系變數, this.$translate("comment", "cancel")',
                onConfirm: '點擊確認後調用的方法，可將點擊確認後要進行的操作包成 function 傳遞進來',
                onCancel: '點擊取消後調用的方法，可將點擊取消後要進行的操作包成 function 傳遞進來',
                closeOnClickBg: '若設定為 true 點擊背景時將會關閉彈窗並觸發取消onCancel方法',
                lockBody: '彈窗顯示時將鎖定背景滾動',
                hiddeConfirmBtn: '隱藏確認按鈕',
                hiddeCancelBtn: '隱藏取消按鈕',
                zIndex: '自訂彈窗 z-index',
                width: '彈窗寬度，接收為字串，可傳入 60px 60%, 60%, 若同時有使用 contentStyle 並設定到 width，此參數將會優先套用',
                contentStyle: '設定彈窗外框樣式，使用物件格式撰寫 style, 例如： { width: "200px", backgroundColor: "red"}',
                titleStyle: '設定標題樣式，使用物件格式撰寫 style, 例如： { color: "red", border: "red"}',
                descStyle: '設定內文樣式，同上',
                cancelStyle: '設定取消按鈕樣式，同上',
                confirmStyle: '設定確認按鈕樣式，同上'
            }
        },
        template: `<button style="padding: 10px 20px; background-color: #ff5a5a; color: #fff; font-size: 20px;" @click="openPopup">顯示彈窗</button>`
    }),
    {
        notes: `
            [ 版本紀錄 ]
            1.0.0 版

            [ 作者 ]
            Mars

            [ 使用教學 ]

            1. 安裝：
                npm install i -S git+https://gitlab.presslogic.online/andy.wang/beautyui.git

            2. 全域註冊：
                新增 plugins/popupConfirm.js
                import Vue from 'vue';
                import PopupConfirm from '@beautybee/beautyui/popupConfirm/index.js';
                Vue.use(PopupConfirm);

            3. 掛載：
                nuxt.config.js 中掛載 plugins/popupConfirm.js 並將 ssr:false

            4. 完成：於各組件中使用
                this.$popupConfirm({
                  title: '這是標題...',
                  desc: '這是內容...',
                  onConfirm: () => console.log('您點擊了確認'),
                  onCancel: () => console.log('您點擊了取消')
                });
        `,
        info: {
            summary: `確認彈窗功能：可自訂確認/取消事件方法，並傳遞到該組件進行調用，亦可自訂彈窗樣式
            <br><br>
            基礎用法：this.$popupConfirm()
            <br><br>
            自訂標題、內文、確認事件方法
            <br><br>
              this.$popupConfirm({
                title: '這是標題..',
                desc: '這是內文..',
                onConfirm: () => console.log('點擊了確認...')
              });
          `
        }
    }
);
