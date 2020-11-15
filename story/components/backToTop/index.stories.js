import { storiesOf } from '@storybook/vue';
import { withKnobs, color, number, boolean } from '@storybook/addon-knobs';
import myComponent from './backToTop.vue';

const stories = storiesOf('Presslogic|element/BackToTop', module);
stories.addDecorator(withKnobs);
stories.add(
    'Back-To-Top',
    () => ({
        components: { myComponent },
        props: {
            backgroundColor: {
                default: color('backgroundColor', '#ffafa0')
            },
            size: {
                default: number('size', 40)
            },
            arrowSize: {
                default: number('arrowSize', 20)
            },
            show: {
                default: boolean('show', false)
            },
            scroll: {
                default: number('scroll', 300)
            },
            circle: {
                default: boolean('circle', true)
            },
            xscroll: {
                default: number('xscroll', 5)
            },
            yscroll: {
                default: number('yscroll', 5)
            },
            hover: {
                default: boolean('hover', false)
            }
        },
        propsDescription: {
            myComponent: {
                // These description will appear in `description` column in props table
                backgroundColor: 'icon 背景顏色',
                size: 'icon 調整尺寸',
                arrowSize: 'icon 內箭頭調整尺寸',
                show: 'icon 一開始是否顯示',
                scroll: '捲軸滑動多少時顯示icon',
                circle: '是否顯示圓角',
                xscroll: 'icon X軸顯示位置',
                yscroll: 'icon Y軸顯示位置',
                hover: 'icon 是否 hover'
            }
        },
        template: `<div style="height: 900px"><myComponent :backgroundColor="backgroundColor" :size="size" :arrowSize="arrowSize" :show="show" :scroll="scroll" :circle="circle" :xscroll="xscroll" :yscroll="yscroll" :hover="hover"/></div>`
    }),
    {
        notes: '回到最上層按鈕',
        info: {
            summary: '回到最上層按鈕'
        }
    }
);