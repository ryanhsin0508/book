import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, number, text, object } from '@storybook/addon-knobs';
import myComponent from './generalButton.vue';

const stories = storiesOf('Beautybee|generalButton', module);
stories.addDecorator(withKnobs);
stories.add(
    'generalButton',
    () => ({
        components: { myComponent },
        props: {
            disableBtn: {
                default: boolean('是否disaled', false)
            },
            text: {
                default: text('按鈕文字', 'Send')
            },
            disText: {
                default: text('按鈕disable文字', 'Send...')
            }
        },
        methods: {
            clickAction() {
                // 在此執行按下後按鈕的事件
                console.log('執行按下後按鈕的事件');
            }
        },
        propsDescription: {
            myComponent: {
                disableBtn: '按鈕狀態',
                text: '按鈕文字',
                disText: 'disabled時的按鈕文字',
                imgSrc: '按鈕圖示路徑',
                disImgSrc: 'disabled時按鈕圖示路徑(無圖示或disabled不換圖則不填)',
                imgStyleProps: 'img style(無圖示則不填)',
                disImgStyleProps: '按鈕diabled 時 img style(無圖示或disabled時style不變則不填)',
                hoverImgStyle: 'hover時img style(無圖示或不需要hover效果則不填)'
            }
        },
        template: `<myComponent :text="text" :disText="disText"  :disableBtn="disableBtn"  @clickAction="clickAction"/>`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 事件方法 ]

        1. clickAction()：
          處理按下按鈕後的事件
            
        ex:
        clickAction() {
                console.log('執行事件');
            }
        
    `,
        info: {
            summary: '按鈕：可自訂按鈕文字、圖示，預設為beautybee 常見的按鈕樣式，可在父層利用class或寫style覆蓋樣式，控制hover或disabled效果，子元素img各狀態style則用props傳入'
        }
    }
);
