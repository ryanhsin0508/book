import { storiesOf } from '@storybook/vue';
import { withKnobs, text, color, number, boolean, object, select } from '@storybook/addon-knobs';
import YoutubePlayer from './YoutubePlayer.vue';

const stories = storiesOf('Presslogic|video/YoutubePlayer', module);
const playertype = {
    autoplay: 1,
    controls: 1
}

stories.addDecorator(withKnobs);
stories.add(
    'YoutubePlayer',
    () => ({
        components: { YoutubePlayer },
        props: {
            url: {
                default: text('url', 'https://www.youtube.com/watch?v=Qbp7_IPbugI')
            },
            options: {
                default: object('options', playertype)
            }
        },
        propsDescription: {
            YoutubePlayer: {
                options: 'Youtube 設定參數',
                url: 'Youtube url',
            }
        },
        template: `<YoutubePlayer :url="url" :options="options" />`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 注意事項 ]

        1. 安裝此元件前須確認該專案已有‘vue-youtube’,'get-youtube-id',套件
        `,
        info: {
            summary: 'YoutubePlayer for Presslogic'
        }
    }
);
