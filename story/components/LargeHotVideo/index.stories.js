import { storiesOf } from '@storybook/vue';
import { withKnobs, text, color, number, boolean, object, select } from '@storybook/addon-knobs';
import LargeHotVideo from './LargeHotVideo.vue';

const stories = storiesOf('Presslogic|video/LargeHotVideo', module);
const posts = {
    "id": 291144,
    "post_date": "2019-06-03T07:59:22Z",
    "description": "drjmsdfsdlfihsjdlfsdfjksdfjsdfskdjfks",
    "video_link": "https://www.youtube.com/watch?v=Qbp7_IPbugI",
    "title": "Eason - 2019-06-04 15:00 post",
    "guid": "https://pretty.presslogic.com/?p=291144",
    "image": "https://pretty.imgix.net/wp-content/uploads/2019/04/KFC_featured11.jpg",
    "url": "/article/291144/eason-2019-06-04-15-00-post",
    "terms": [
      1,
      22,
      13039
    ],
    "video_type": "youtube"
}

const youtubetype = {
    autoplay: 1,
    controls: 0,
}

const videotype = {
    autoplay: false,
    controls: true,
    width: '700',
};

const deviceType = ['desktop','mobile']

stories.addDecorator(withKnobs);
stories.add(
    'LargeHotVideo',
    () => ({
        components: { LargeHotVideo },
        props: {
            device: {
                default: select('device', deviceType)
            },
            post: {
                default: object('post', posts)
            },
            youtubeProps: {
                default: object('youtubeProps', youtubetype)
            },
            videoProps: {
                default: object('videoProps', videotype)
            },
            active: {
                default: boolean('active', false)
            },
            color: {
                default: color('color', '#ffafa0')
            },
            maxWidth: {
                default: number('maxWidth', 700)
            },
            host: {
                default: text('host', 'https://girlstyle.com/tw')
            },
            headerShow: {
                default: boolean('headerShow', true)
            },
            index: {
                default: text('index', '1')
            }
        },
        propsDescription: {
            LargeHotVideo: {
                host: ' host url, ex: https://girlstyle.com/tw',
                youtubeProps: 'youtube 設定參數',
                videoProps: 'video 設定參數',
                active: ' 滑鼠是否 hover',
                color: '網站主要色系',
                maxWidth: 'video 最大寬度',
                device: '使用裝置 （只能 desktop 或 mobile )',
                headerShow: 'header是否顯示',
                post: `video object, ex:
                {
                    "id": 291144,
                    "post_date": "2019-06-03T07:59:22Z",
                    "description": "drjmsdfsdlfihsjdlfsdfjksdfjsdfskdjfks",
                    "video_link": "https://www.youtube.com/watch?v=Qbp7_IPbugI",
                    "title": "Eason - 2019-06-04 15:00 post",
                    "guid": "https://pretty.presslogic.com/?p=291144",
                    "image": "https://pretty.imgix.net/wp-content/uploads/2019/04/KFC_featured11.jpg",
                    "url": "/article/291144/eason-2019-06-04-15-00-post",
                    "terms": [
                      1,
                      22,
                      13039
                    ],
                    "video_type": "youtube"
                }`,
            }
        },
        template: `<LargeHotVideo :device="device" :post="post" :youtubeProps="youtubeProps" :videoProps="videoProps" :active="active" :color="color" :maxWidth="maxWidth" :host="host" :headerShow="headerShow" :index="index" />`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 注意事項 ]

        1. 安裝此元件前須確認該專案已有‘video.js’,‘videojs-youtube’,‘moment’,'html-truncate',套件
        `,
        info: {
            summary: 'LargeHotVideo for Presslogic'
        }
    }
);
