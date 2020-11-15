import { storiesOf } from '@storybook/vue';
import { withKnobs, text, color, number, boolean, object, select } from '@storybook/addon-knobs';
import SmallArticle from './SmallArticle.vue';

const post = {
    "id":87717,
    "post_date":"2019-06-20T00:15:43Z",
    "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
    "title":"一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
    "guid":"http://girlstyle.com/tw/?p=87717",
    "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
    "url":"https://girlstyle.com/tw/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
    "terms":[5,80,7470,7471,7472],
    "cats":[
        {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5},
        {"name":"帥哥","slug":"帥哥","id":4},
        {"name":"哥","slug":"哥","id":3},
        {"name":"帥","slug":"帥","id":2}
    ]
}

const deviceType = ['desktop','mobile']

const stories = storiesOf('Presslogic|Article/SmallArticle', module);
stories.addDecorator(withKnobs);
stories.add(
    'SmallArticle',
    () => ({
        components: { SmallArticle },
        props: {
            device: {
                default: select('device', deviceType)
            },
            host: {
                default: text('host', 'https://girlstyle.com/tw')
            },
            static_host: {
                default: text('static_host', 'https://girlstyle.com/')
            },
            active: {
                default: boolean('active', false)
            },
            color: {
                default: color('color',  '#ffafa0')
            },
            imgWidth: {
                default: number('imgWidth',  375) 
            },
            headerWidth: {
                default: number('headerWidth',  300) 
            },
            post: {
                default: object('post', post)
            },
            catShow: {
                default: boolean('catShow', true)
            }
        },
        propsDescription: {
            SmallArticle: {
                post: `文章 object, ex:
                {
                    "id":87717,
                    "post_date":"2019-06-20T00:15:43Z",
                    "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
                    "title":"一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
                    "guid":"http://girlstyle.com/tw/?p=87717",
                    "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
                    "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
                    "terms":[5,80,7470,7471,7472],
                    "cats":[
                        {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5}
                    ]
                }`,
                device: '使用裝置 （只能 desktop 或 mobile )',
                host: ' host url , ex:https://girlstyle.com/tw',
                active: ' 滑鼠是否 hover',
                color: '網站主要色系',
                static_host: 'static_host 參數',
                imgWidth: '圖片寬度',
                headerWidth: 'header 寬度',
                catShow: 'cat是否顯示'
            }
        },
        template: `<SmallArticle :post="post" :device="device" :host="host" :static_host="static_host" :active="active" :color="color" :imgWidth="imgWidth" :headerWidth="headerWidth" :catShow="catShow" />`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 注意事項 ]

        1. 安裝此元件前須確認該專案已有‘vue-moment’,'html-truncate',‘vue-lazyload’套件
        `,
        info: {
            summary: 'SmallArticle for Presslogic'
        }
    }
);