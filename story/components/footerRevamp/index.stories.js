import { storiesOf } from '@storybook/vue';
import { withKnobs, text, color, number, boolean } from '@storybook/addon-knobs';
import footerRevamp from './footerRevamp.vue';
import goBeautyButton from './goBeautyButton.vue';

const stories = storiesOf('Presslogic|Revamp BeautyBee/footerRevamp', module);
stories.addDecorator(withKnobs);
stories.add(
    'footerRevamp',
    () => ({
        components: { footerRevamp },
        props: {
            txt: {
                default: text('txt', '發稿撰文，快下載BeautyBee')
            },
            txtColor: {
                default: color('txtColor', '#fff')
            },
            txtSize: {
                default: number('btnTxtSize', 16)
            },
            background: {
                default: color('txtColor', '#4a4a4a')
            },
            show: {
                default: boolean('show', true)
            },
            iconScrollX: {
                default: number('iconScrollX', 15)
            }
        },
        propsDescription: {
            footerRevamp: {
                txt: '顯示文字',
                txtColor: '文字顏色',
                txtSize: '文字大小',
                show: '是否顯示',
                iconScrollX: 'icon 右邊距離'
            }
        },
        template: `<div style="height: 900px"><footerRevamp :txt="txt" :txtColor="txtColor" :txtSize="txtSize" :show="show" :iconScrollX="iconScrollX"/></div>`
    }),
    {
        notes: 'Footer Revamp for BeautyBee',
        info: {
            summary: 'Footer Revamp for BeautyBee'
        }
    }
);
stories.add(
    'goBeautyButton',
    () => ({
        components: { goBeautyButton },
        props: {
            url: {
                default: text('url', 'https://beautybee.com/')
            },
            btnTxt: {
                default: text('btnTxt', '前往BeautyBee')
            },
            btnBackground: {
                default: color('btnBackground', '#ff5a5a')
            },
            btnTxtColor: {
                default: color('btnTxtColor', '#fff')
            },
            btnTxtSize: {
                default: number('btnTxtSize', 15)
            }
        },
        propsDescription: {
            goBeautyButton: {
                url: '按鈕連結',
                btnTxt: '按鈕文字',
                btnBackground: '按鈕背景顏色',
                btnTxtColor: '按鈕文字顏色',
                btnTxtSize: '按鈕文字大小'
            }
        },
        template: `<goBeautyButton :url="url" :btnTxt="btnTxt" :btnBackground="btnBackground" :btnTxtColor="btnTxtColor" :btnTxtSize="btnTxtSize"/>`
    }),
    {
        notes: 'Footer Revamp for BeautyBee',
        info: {
            summary: 'Footer Revamp for BeautyBee'
        }
    }
);
