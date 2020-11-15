import { storiesOf } from '@storybook/vue';
import { withKnobs, color, number, boolean, text, object, select } from '@storybook/addon-knobs';
import Index from './CategorySelector';

const stories = storiesOf('Presslogic | CategorySelector', module);
stories.addDecorator(withKnobs);

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

const DEVICE = {
    '桌機': 'desktop',
    '手機': 'mobile',
};
const DEVICE_VALUE = 'desktop';

stories.add(
    'Index',
    () => ({
        components: { Index },
        props: {
            categorySelectorIsEnglish: {
                default: boolean('CategorySelector 是英文', false)
            },
            device: {
                default: select('選擇裝置', DEVICE, DEVICE_VALUE)
            },
            categories: {
                default: object('文章類別資料', CATEGORIES)
            }
        },
        propsDescription: {
            Index: {
                // These description will appear in `description` column in props table
                categorySelectorIsEnglish: 'CategorySelector 是英文',
                device: '選擇裝置',
                categories: '文章類別資料',
            }
        },
        template: `<Index
            :categorySelectorIsEnglish="categorySelectorIsEnglish"
            :device="device"
            :categories="categories"
        />`,
    }),
    {
        notes: `
            [ 版本紀錄 ]
            1.0.0 版

            [ 事件方法 ]
            無

            記得裝 Element-UI

            作者：Tim
        `,
        info: {
            summary: '我只是個單純的 CategorySelector'
        }
    }
);
