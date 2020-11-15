import { storiesOf } from '@storybook/vue';
import { withKnobs, text, color, number, boolean } from '@storybook/addon-knobs';
import headerRevamp from './headerRevamp.vue';

const stories = storiesOf('Presslogic|Revamp BeautyBee/headerRevamp', module);
stories.addDecorator(withKnobs);
stories.add(
    'headerRevamp',
    () => ({
        components: { headerRevamp },
        props: {
            show: {
                default: boolean('show', true)
            },
            barHeight: {
                default: number('barHeight', 54)
            },
            src: {
                default: text('src', 'https://assets.girlstyle.com/uat/girlstyle-tw/static/images/beautybee/logo_ic_beautybee.png')
            },
            srcWidth: {
                default: number('srcWidth', 28)
            },
            firstBtnTxt: {
                default: text('firstBtnTxt', '下載')
            },
            secondBtnTxt: {
                default: text('secondBtnTxt', '開啟')
            },
            btnBackground: {
                default: color('btnBackground', '#ff5a5a')
            },
            btncolor: {
                default: color('btncolor', '#ffffff')
            }
        },
        propsDescription: {
            footerRevamp: {
                txt: ''
            }
        },
        template: `<headerRevamp :show="show" :src="src" :srcWidth="srcWidth" :barHeight="barHeight" :firstBtnTxt="firstBtnTxt" :secondBtnTxt="secondBtnTxt" :btnBackground="btnBackground" :btncolor="btncolor" />`
    }),
    {
        notes: 'Footer Revamp for BeautyBee',
        info: {
            summary: 'Footer Revamp for BeautyBee'
        }
    }
);
