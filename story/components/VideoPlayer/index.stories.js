import { storiesOf } from '@storybook/vue';
import { withKnobs, text, color, number, boolean, object, select } from '@storybook/addon-knobs';
import VideoPlayer from './VideoPlayer.vue';

const stories = storiesOf('Presslogic|video/VideoPlayer', module);

const youtubeOptions = {
    autoplay: false,
    controls: true,
};

const MP4Options = {
    autoplay: true,
    controls: true,
    width: '700',
    someOption: true,
};

const devices = ['desktop','mobile'];

stories.addDecorator(withKnobs);
stories.add(
    'VideoPlayer',
    () => ({
        components: { VideoPlayer },
        props: {
            options: {
                default: object('post', youtubeOptions)
            },
            url: {
                default: text('url', 'https://www.youtube.com/embed/_aNpLsGksWU')
            },
            image: {
                default: text('image', 'https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg?w=400&auto=format') 
            },
            type: {
                default: text('type', 'youtube') 
            },
            index: {
                default: text('index', '1') 
            },
            active: {
                default: boolean('active', false)
            },
            device: {
                default: select('device', devices)
            },
        },
        propsDescription: {
            VideoPlayer: {
                options: 'video 設定參數',
                url: 'video url',
                image: 'video 封面圖片',
                type: '影片類型'
            }
        },
        template: `<VideoPlayer :options="options" :url="url" :image="image" :type="type" :index="index" :active="active" :device="device" />`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 注意事項 ]

        1. 安裝此元件前須確認該專案已有‘video.js’,套件
        `,
        info: {
            summary: 'VideoPlayer for Presslogic'
        }
    }
);
