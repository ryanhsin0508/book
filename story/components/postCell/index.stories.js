import { storiesOf } from '@storybook/vue';
import { withKnobs, color, number, text, object } from '@storybook/addon-knobs';
import myComponent from './postCell.vue';

const stories = storiesOf('Presslogic|PostCell', module);
stories.addDecorator(withKnobs);
stories.add(
    'PostCell',
    () => ({
        components: { myComponent },
        props: {
            src: {
                default: text('src', 'https://d2hu9cc0x5vz48.cloudfront.net/wp-content/uploads/2016/08/sukeyotafumi-COVER2.jpg?w=300&auto=format')
            },
            title: {
                default: text('title', '不爽臉也可愛！喵喵不壞奴才不愛～超適合當表情包的兇兇臉總裁喵星人！')
            },
            mainColor: {
                default: color('mainColor', '#8c6239')
            },
            width: {
                default: number('width', 240)
            },
            category: {
                default: text('category', 'Funny News 貓趣聞')
            },
            postDate: {
                default: text('postDate', '2 days ago')
            },
            titleStyle: {
                default: object('title style設定', {
                    fontSize: '14px',
                })
            },
            categoryStyle: {
                default: object('category style設定', {
                    fontSize: '12px',
                })
            },
            postDateStyle: {
                default: object('postDate style設定', {
                    fontSize: '12px',
                })
            },
        },
        methods : {
            click () {
                alert('測試用點擊事件');
            },
            mouseover () {
                console.log('mouseover');
            },
            mouseleave () {
                console.log('mouseleave');
            },
        },
        propsDescription: {
            myComponent: {
                src: '圖片路徑',
                title: '文章標題',
                mainColor: '主色系(標題hover/文章分類)',
                width: '文章模板寬度(最低200px)',
                category: '文章分類',
                postDate: '發文時間',
                titleStyle: '標題css設定',
                categoryStyle: '文章分類css設定',
                postDateStyle: '發文時間css設定',
            }
        },
        template: `<myComponent 
                        :src="src"
                        :title="title"
                        :width="width"
                        :category="category"
                        :postDate="postDate"
                        :mainColor="mainColor"
                        :titleStyle="titleStyle"
                        :categoryStyle="categoryStyle"
                        :postDateStyle="postDateStyle"
                        @postCellMouseOver="mouseover"
                        @postCellMouseLeave="mouseleave"
                        @postCellClick="click"
                     />`
    }),
    {
        notes: '文章列表中的文章模板（小），提供『文章圖片/標題/文章分類/發文時間』等資訊',
        info: {
            summary: '文章連結模板：可放置文章代表圖片、標題、文章分類及發文時間等。'
        }
    }
);
