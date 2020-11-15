import { storiesOf } from '@storybook/vue';
import { withKnobs, text, number, object } from '@storybook/addon-knobs';
import myComponent from './noticeMsg.vue';

const stories = storiesOf('Beautybee|noticeMsg', module);
stories.addDecorator(withKnobs);
stories.add(
    'noticeMsg',
    () => ({
        components: { myComponent },
        props: {
            txt: {
                default: text('文字', 'Thank you for your report that we will process as soon as possible.')
            },
            iconImg: {
                default: text('圖片路徑', './images/ic-prompt-tick.svg')
            },
            msgStyleProps: {
                default: object('外框style', {
                    width: '200px',
                    height: '200px'
                })
            },
            imgStyleProps: {
                default: object('icon style', {
                    width: '80px'
                })
            }
        },
        data() {
            return {
                isshow: false
            };
        },
        methods: {
            action() {
                // 可在此處控制元件的出現或消失
                let self = this;
                self.isshow = true;
                setTimeout(function() {
                    self.isshow = false;
                }, 2000);
            }
        },
        propsDescription: {
            myComponent: {
                // These description will appear in `description` column in props table
                txt: '提示文字',
                iconImg: 'icon 路徑',
                msgStyleProps: '外框樣式',
                imgStyleProps: 'icon樣式'
            }
        },
        template: `<div>
        <button @click="action">點按出現提示</button>
        <myComponent v-if="isshow" :txt="txt" :iconImg="iconImg" :msgStyleProps="msgStyleProps" :imgStyleProps="imgStyleProps" /></div>`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 事件方法 ]
        可在元件父層用method或eventBus控制組建的v-if 或 v-show

        [ 作者 ]
        Dora
    `,
        info: {
            summary: '動作結束後會出現的提示字，用v-if或v-show控制組建的出現或消失'
        }
    }
);
