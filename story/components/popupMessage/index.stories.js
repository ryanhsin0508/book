import { storiesOf } from '@storybook/vue';
import myComponent from './popupMessage.vue';
import { withKnobs, select, text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
const stories = storiesOf('Beautybee|popupMessage', module);
stories.addDecorator(withKnobs);
stories.add(
    'popupMessage',
    () => ({
        components: { myComponent },
        props: {
            type: {
                default: select('狀態選擇', ['success', 'error', 'warning'], 'success')
            },
            content: {
                default: text('text', 'demo')
            },
            second: {
                default: number('second', 1)
            }
        },
        propsDescription: {
            myComponent: {
                type: '彈出訊息的狀態',
                content: '彈出的內容',
                second: '彈出幾秒後消逝'
            }
        },
        template: `<myComponent @click.native="action" :type="type" :content="content" :second="second" />`,
        methods: {
            action: action('clicked')
        }
    }),
    {
        notes: `
            [ 版本紀錄 ]

            1.0.1 版 - 加入 second 選項。
            1.0.0 版


            [ 使用教學 ]

            1. 安裝：
               npm install i -S git+https://gitlab.presslogic.online/andy.wang/beautyui.git
            2. 全域註冊：
               新增 plugins/popupMessage.js
               import Vue from 'vue';
               import popup from '@beautybee/beautyui/popupMessage/popupMessage.common.js';
               Vue.use(popup);
            3. 掛載：
               nuxt.config.js 中掛載 plugins/popupMessage.js 並將 ssr:false
               掛載入全域 CSS
            4. 完成：
               於各處使用 this.$popupMessage('type', 'content', 'second');
        `,
        info: {
            summary: `this.$popupMessage('type', 'content', 'second');`
        }
    }
);
