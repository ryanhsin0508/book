import { storiesOf } from '@storybook/vue';
import { withKnobs, number, text, object } from '@storybook/addon-knobs';
import myComponent from './bloggerPanel.vue';

const stories = storiesOf('Presslogic|BloggerPanel', module);
stories.addDecorator(withKnobs);
stories.add(
    'BloggerPanel',
    () => ({
        components: { myComponent },
        props: {
            panelWidth: {
                default: number('panelWidth', 100)
            },
            src: {
                default: text('src', 'https://mami-image.presslogic.com/wp-content/uploads/2018/03/29547272_10159988099130618_1813952574_n.jpg')
            },
            authorName: {
                default: text('author name', 'Mami')
            },
            authorNameStyle: {
                default: object('author name style', {
                    marginTop: '5px'
                })
            }
        },
        methods : {
            click () {
                console.log('click event');
            },
        },
        propsDescription: {
            myComponent: {
                panelWidth: '模板寬度',
                src: '圖片路徑',
                authorName: '作者名稱',
                authorNameStyle: '作者名稱樣式',
            }
        },
        template: `<myComponent 
                        :panelWidth="panelWidth"
                        :src="src"
                        :authorName="authorName"
                        :authorNameStyle="authorNameStyle"
                        @bloggerPanelClick="click"
                     />`
    }),
    {
        notes: 'blogger分類中的作者頭像，點選可連結至該作者文章列表',
        info: {
            summary: '作者頭像：可放置作者頭像及名稱。'
        }
    }
);
