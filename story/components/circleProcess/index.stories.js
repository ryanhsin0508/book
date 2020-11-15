import { storiesOf } from '@storybook/vue';
import { withKnobs, color, number } from '@storybook/addon-knobs';
import myComponent from './circleProgressBar.vue';

const stories = storiesOf('Presslogic|ProgressBar', module);
stories.addDecorator(withKnobs);
stories.add(
    'Circle-ProgressBar',
    () => ({
        components: { myComponent },
        props: {
            width: {
                default: number('width', 200)
            },
            radius: {
                default: number('radius', 10)
            },
            progress: {
                default: number('progress', 70)
            },
            duration: {
                default: number('duration', 1000)
            },
            delay: {
                default: number('delay', 20)
            },
            colorStart: {
                default: color('colorStart', '#ffc16f')
            },
            colorEnd: {
                default: color('colorEnd', '#ffe191')
            },
            backgroundColor: {
                default: color('backgroundColor', '#ededed')
            }
        },
        propsDescription: {
            myComponent: {
                // These description will appear in `description` column in props table
                width: '進度條的大小',
                radius: '進度條的粗細',
                progress: '進度條的百分比',
                duration: '動畫時間',
                delay: '延遲多久後執行',
                colorStart: '漸層的初始色',
                colorEnd: '漸層的尾色',
                backgroundColor: '圓圈的底色',
                id: '如有兩個以上的進度條時，請給一個不重複的數字，如: 2',
                isAnimation: '是否需要動畫'
            }
        },
        template: `<myComponent :width="width" :radius="radius" :progress="progress" :duration="duration" :delay="delay" :colorStart="colorStart" :colorEnd="colorEnd" :backgroundColor="backgroundColor" />`
    }),
    {
        notes: 'vue 版圓形進度條，自帶進度動畫，各項可動式調整 ver 1.0.0',
        info: {
            summary: 'vue 圓形進度條，漸層顏色的變化率 linearGradient - stop offset 為 10% 及 50%，目前為固定值，如需客製化這些變化請洽作者'
        }
    }
);
