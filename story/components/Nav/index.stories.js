import { storiesOf } from '@storybook/vue';
import { withKnobs, color, object, select, boolean } from '@storybook/addon-knobs';
import Index from './Nav'
import NavPost from './NavPost';

const stories = storiesOf('Presslogic | Nav', module);
stories.addDecorator(withKnobs);

const OPTIONS = {
    'General (default)': '',
    'GS-TW': '/tw',
    'GS-SG': '/sg',
    'GS-IN': '/in',
    'GS-KR': '/kr',
    'GS-MY': '/my',
    'GS-US': '/us',
};
const DEFAULT_REGION = '';

const CATEGORIES = [
    {
        name: '流行热话',
        slug: 'hottopics',
        id: 23,
        subcategories: []
    },
    {
        name: '美妆',
        slug: 'beauty',
        id: 4,
        subcategories: [
            { name: '化妆', slug: 'makeup', id: 10 },
            { name: '发型', slug: 'hair', id: 9 },
            { name: '护肤', slug: 'skincare', id: 12 },
            { name: '美甲', slug: 'nails', id: 11 }
        ]
    },
    {
        name: '时尚',
        slug: 'fashion',
        id: 5,
        subcategories: [
            { name: '穿搭', slug: 'mixandmatch', id: 15 },
            { name: '鞋履', slug: 'footwear', id: 14 },
            { name: '配件', slug: 'accessories', id: 13 },
            { name: '刺青', slug: 'tattoo', id: 16 }
        ]
    },
    {
        name: '生活',
        slug: 'lifestyle',
        id: 6,
        subcategories: [
            { name: '旅游', slug: 'travel', id: 18 },
            { name: '家居', slug: 'living', id: 17 },
            { name: '吃货', slug: 'food', id: 19 },
            { name: '女生物。语', slug: 'items', id: 20 },
            { name: '摄影', slug: 'photography', id: 21 },
            { name: '闺蜜', slug: 'bff', id: 22 }
        ]
    },
    {
        name: '瘦身',
        slug: 'fitness',
        id: 7,
        subcategories: []
    },
    {
        name: '恋爱',
        slug: 'love',
        id: 8,
        subcategories: []
    }
]

stories.add(
    'Index',
    () => ({
        components: { Index },
        props: {
            mainColor: {
                default: color('識別色', '#ffafa0')
            },
            categories: {
                default: object('文章類別資料', CATEGORIES)
            },
            regionPath: {
                default: select('GirlStyle 區域路徑', OPTIONS, DEFAULT_REGION)
            },
            categoryIsEnglish: {
                default: boolean('類別只顯示英文', false)
            }
        },
        propsDescription: {
            Index: {
                // These description will appear in `description` column in props table
                mainColor: '識別色',
                categories: '文章類別',
                regionPath: 'GirlStyle 系列區域路徑',
                categoryIsEnglish: '類別只顯示英文'
            }
        },
        template: `<Index
            :mainColor="mainColor"
            :categories="categories"
            :regionPath="regionPath"
            :categoryIsEnglish="categoryIsEnglish"
        />`,
    }),
    {
        notes: `
            [ 版本紀錄 ]
            1.0.0 版

            [ 注意事項 ]

            1. 安裝此元件前須確認該專案已有 'vue-lazyload' 和 'element-ui' 套件
            2. 需要使用 animate.min.css

            [ 事件方法 ]
            無

            作者：Tim
        `,
        info: {
            summary: 'Nav'
        }
    }
);

stories.add(
    'NavPost',
    () => ({
        components: { NavPost },
        props: {
            mainColor: {
                default: color('文章標題顏色', '#ffafa0')
            },
            post: {
                default: object('文章內容', {
                    guid: "http://girlstyle.com/my/?p=10592",
                    id: 10592,
                    image: "https://images-my.girlstyle.com/wp-content/uploads/2019/03/nanafoodGirlStyle-tagline_1000x525.jpg",
                    post_date: "2019-03-21T12:02:52Z",
                    term: 19,
                    title: "「炒饭不要饭」？！欧阳娜娜分享的炒「饭」食谱爆红，网友试吃7天狂瘦5KG！",
                    url: "/article/10592/%E7%82%92%E9%A5%AD%E4%B8%8D%E8%A6%81%E9%A5%AD-%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E5%88%86%E4%BA%AB%E7%9A%84%E7%82%92-%E9%A5%AD-%E9%A3%9F%E8%B0%B1%E7%88%86%E7%BA%A2-%E7%BD%91%E5%8F%8B%E8%AF%95%E5%90%837%E5%A4%A9%E7%8B%82%E7%98%A65kg"
                })
            }
        },
        propsDescription: {
            NavPost: {
                // These description will appear in `description` column in props table
                post: "文章內容",
                mainColor: "文章標題顏色",
                regionPath: 'GirlStyle 系列區域路徑'
            }
        },
        template: `<NavPost
            :post="post"
            :mainColor="mainColor"
        />`,
    }),
    {
        notes: `
            [ 版本紀錄 ]
            1.0.0 版

            [ 事件方法 ]
            無

            作者：Tim
        `,
        info: {
            summary: 'NavPost'
        }
    }
);
