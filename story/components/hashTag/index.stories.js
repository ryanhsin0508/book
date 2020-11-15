import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import myComponent from './hashTag.vue';

const stories = storiesOf('Beautybee|HashTag', module);
stories.addDecorator(withKnobs);
stories.add(
    'HashTag',
    () => ({
        components: { myComponent },
        props: {
            tagRouter: {
                default: text('tagRouter', '#')
            },
            tagName: {
                default: text('tagName', '標籤')
            },
            tagSymbol: {
                default: text('tagSymbol', '#')
            }
        },
        propsDescription: {
            myComponent: {
                // These description will appear in `description` column in props table
                tagRouter: '標籤頁超連結的路徑位置（必填,ex:/hashtag/）',
                tagName: '標籤名稱（必填）',
                tagSymbol: '標籤名稱前的特殊符號（ex:#)',
                iconSrc: '標籤小圖示的圖片路徑（無圖案則不填）',
                iconSize: '標籤小圖示寬高尺寸(px)',
                customStyle: '客製化樣式(class name)'
            }
        },
        template: `<div style="display: flex;"><myComponent style="cursor: pointer;" tagRouter="tagRouter" :tagName="tagName" :tagSymbol="tagSymbol" /></div>`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版
        
        [ 作者 ]
        Anne
    `,
        info: {
            summary: '標籤元素：可自訂標籤的樣式（在customStyle屬性寫自訂樣式的class name）以及標籤名字前的小圖示或特殊符號'
        }
    }
);
