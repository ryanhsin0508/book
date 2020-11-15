import { storiesOf } from '@storybook/vue';
import { withKnobs, text, color, number, boolean, object, select } from '@storybook/addon-knobs';
import ArticleVideoList from './ArticleVideoList.vue';


const data = {
    "articles": [
        {
            "id":1,
            "post_date":"2019-06-20T00:15:43Z",
            "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
            "title":"1一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
            "guid":"http://girlstyle.com/tw/?p=87717",
            "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
            "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
            "terms":[5,80,7470,7471,7472],
            "cats":[
                {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5}
            ]
        },
        {
            "id":2,
            "post_date":"2019-06-20T00:15:43Z",
            "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
            "title":"2一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
            "guid":"http://girlstyle.com/tw/?p=87717",
            "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
            "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
            "terms":[5,80,7470,7471,7472],
            "cats":[
                {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5}
            ]
        },
        {
            "id":3,
            "post_date":"2019-06-20T00:15:43Z",
            "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
            "title":"3一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
            "guid":"http://girlstyle.com/tw/?p=87717",
            "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
            "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
            "terms":[5,80,7470,7471,7472],
            "cats":[
                {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5}
            ]
        },
        {
            "id":4,
            "post_date":"2019-06-20T00:15:43Z",
            "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
            "title":"4一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
            "guid":"http://girlstyle.com/tw/?p=87717",
            "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
            "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
            "terms":[5,80,7470,7471,7472],
            "cats":[
                {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5}
            ]
        },
        {
            "id":5,
            "post_date":"2019-06-20T00:15:43Z",
            "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
            "title":"5一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
            "guid":"http://girlstyle.com/tw/?p=87717",
            "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
            "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
            "terms":[5,80,7470,7471,7472],
            "cats":[
                {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5}
            ]
        },
        {
            "id":6,
            "post_date":"2019-06-20T00:15:43Z",
            "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
            "title":"6一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
            "guid":"http://girlstyle.com/tw/?p=87717",
            "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
            "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
            "terms":[5,80,7470,7471,7472],
            "cats":[
                {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5}
            ]
        },
        {
            "id":7,
            "post_date":"2019-06-20T00:15:43Z",
            "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
            "title":"7一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
            "guid":"http://girlstyle.com/tw/?p=87717",
            "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
            "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
            "terms":[5,80,7470,7471,7472],
            "cats":[
                {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5}
            ]
        },
        {
            "id":8,
            "post_date":"2019-06-20T00:15:43Z",
            "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
            "title":"8一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
            "guid":"http://girlstyle.com/tw/?p=87717",
            "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
            "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
            "terms":[5,80,7470,7471,7472],
            "cats":[
                {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5}
            ]
        },
        {
            "id":9,
            "post_date":"2019-06-20T00:15:43Z",
            "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
            "title":"9一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
            "guid":"http://girlstyle.com/tw/?p=87717",
            "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
            "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
            "terms":[5,80,7470,7471,7472],
            "cats":[
                {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5}
            ]
        },
    ],
    "videos": [
        {
            "id": 291164,
            "post_date": "2019-07-02T07:45:04Z",
            "description": "rrrererererer",
            "video_link": "//vjs.zencdn.net/v/oceans.mp4",
            "title": "video test1",
            "guid": "https://pretty.presslogic.com/?p=291164",
            "image": "https://pretty.imgix.net/wp-content/uploads/2019/05/1557734034780420170124-011817_U3927_M241955_5f6e.png",
            "url": "/article/291164/video-test1",
            "terms": [
                22,
                3151
            ],
            "video_type": "mp4"
        },
        {
            "id": 291144,
            "post_date": "2019-06-03T07:59:22Z",
            "description": "drjmsdfsdlfihsjdlfsdfjksdfjsdfskdjfks",
            "video_link": "https://www.youtube.com/watch?v=_aNpLsGksWU",
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
        },
        {
            "id": 291126,
            "post_date": "2019-05-29T03:24:53Z",
            "description": "最新post測試",
            "video_link": "https://www.youtube.com/watch?v=LLgFyfYqKbs",
            "title": "最新post測試",
            "guid": "https://pretty.presslogic.com/?p=291126",
            "image": "https://pretty.imgix.net/wp-content/uploads/2019/05/1557734034780420170124-011817_U3927_M241955_5f6e.png",
            "url": "/article/291126/%E6%9C%80%E6%96%B0post%E6%B8%AC%E8%A9%A6",
            "terms": [
                1,
                22,
                13039
            ],
            "video_type": "youtube"
        }
    ]
}

const devices = ['desktop','mobile'];

const videoOption = {
                        autoplay: false,
                        controls: true,
                        width: '700',
                        rel: 0
                    }

const stories = storiesOf('PL-Theme|Index/ArticleVideoList', module);
stories.addDecorator(withKnobs);
stories.add(
    'ArticleVideoList',
    () => ({
        components: { ArticleVideoList },
        props: {
            hotPosts:{
                default: object('hotPosts', data)
            },
            device: {
                default: select('device', devices)
            },
            videoOption: {
                default: object('videoOptions', videoOption)
            }
        },
        propsDescription: {
            ArticleVideoList: {
            }
        },
        template: `<div style="max-width: 700px;"><ArticleVideoList :hotPosts="hotPosts" :device="device" :videoOption="videoOption"  /></div>`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 注意事項 ]

        1. 安裝此元件前須確認該專案已有‘vue-moment’,'html-truncate',‘vue-lazyload’套件
        `,
        info: {
            summary: 'LargeArticle for Presslogic'
        }
    }
);