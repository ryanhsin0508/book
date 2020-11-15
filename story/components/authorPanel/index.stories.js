import { storiesOf } from '@storybook/vue';
import { withKnobs, number, text, boolean, object, select } from '@storybook/addon-knobs';
import myComponent from './authorPanel.vue';

const stories = storiesOf('Presslogic|AuthorPanel', module);
const OPTIONS = {
    'General (default)': '',
    'GS-TW': '/tw',
    'GS-SG': '/sg',
    'GS-IN': '/in',
    'GS-KR': '/kr',
    'GS-MY': '/my',
    'GS-US': '/us'
};
const DEFAULT_REGION = '/tw';
const author = {
    id: 326,
    display_name: "easontsai",
    user_nicename: "easontsai",
    description: "你好我是 Eason Tsai，請多指教。",
    image: "https://girls-image.presslogic.com/wp-content/uploads/2019/11/12688296_10205811693956238_5046543595808452320_n.jpg",
    email: "eason.tsai@presslogic.com",
    job_title: "專案經理",
    is_blogger: false
}
stories.addDecorator(withKnobs);
stories.add(
    'AuthorPanel',
    () => ({
        components: { myComponent },
        props: {
            author: {
                default: object('編輯資訊', author)
            },
            date: {
                default: text('date', '2019/11/11')
            },
            articlePage: {
                default: boolean('articlePage', true)
            },
            width: {
                default: text('欄位寬度', '700px')
            },
            regionPath: {
                default: select('GirlStyle 區域路徑', OPTIONS, DEFAULT_REGION)
            }
        },
        methods: {

        },
        propsDescription: {
            myComponent: {
                author: '編輯資訊',
                date: '文章日期',
                width: '欄位寬度',
                mobile: '是否為行動裝置',
            }
        },
        template: `<myComponent 
                        :author="author"
                        :date="date"
                        :width="width"
                        :articlePage="articlePage"
                        :regionPath="regionPath"
                     />`
    }),
    {
        notes: '作者文章列表上方的作者資訊，呈現『作者頭像/作者名稱/作者介紹』等資訊',
        info: {
            summary: '作者資訊模板：可放置作者頭像、作者名稱及作者介紹等。'
        }
    }
);
