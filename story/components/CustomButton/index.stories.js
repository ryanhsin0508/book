import { storiesOf } from '@storybook/vue';
import { withKnobs, object, text , number, boolean } from '@storybook/addon-knobs';
import CustomButton from './CustomButton.vue';

const stories = storiesOf('Presslogic|element/CustomButton', module);
stories.addDecorator(withKnobs);
stories.add(
    'CustomButton',
    () => ({
        components: { CustomButton },
        props: {
            url:{
                default: text('url', 'https://www.facebook.com/sharer.php?u=https://girlstyle.com/twundefined&amp;display=popup&amp;ref=plugin&amp;src=like&amp;app_id=1686107568269712')
            },
            text:{
                default: text('text', 'Share to Facebook')
            },
            title: {
                default: text('title', '分享')
            },
            hover: {
                default: boolean('hover', false)
            },
            btnStyleProps: {
                default: object('btnStyleProps', {
                    width: '700px',
                    height: '50px',
                    backgroundColor: '#3b5998',
                    borderRadius: '50px',
                    color: '#fff',
                })
            },
            imgShow: {
                default: boolean('imgShow', true)
            },
            imgSrc: {
                default: text('imgSrc', 'https://assets.girlstyle.com/girlstyle-tw/static/images/facebook-white.png')
            },
            imgStyleProps: {
                default: object('imgStyleProps', {
                    width: '18px',
                    height: '18px',
                    marginRight: '10px'
                })
            },
            iconShow: {
                default: boolean('iconShow', true)
            },
            icon: {
                default: text('icon', 'el-icon-arrow-right')
            },
            iconStyleProps: {
                default: object('iconStyleProps', {
                    fontWeight: 'bold',
                    order: '3',
                    marginLeft: '10px'
                })
            },
            textStyleProps: {
                default: object('textStyleProps', {
                    fontWeight: 'bold'
                })
            }
        },
        propsDescription: {
            CustomButton: {
                url: '按鈕點擊後的連結',
                text: '按鈕裡面文字',
                titㄌle: '按鈕連結title',
                hover: '按鈕是否hover',
                btnStyleProps:'按鈕自定義style',
                imgShow: '按鈕裡面圖片是否顯示',
                imgSrc: '按鈕裡面圖片連結',
                imgStyleProps: '按鈕裡面圖片自定義style',
                iconShow: '按鈕裡面icon是否顯示',
                icon: '按鈕裡面icon的class',
                imgStyleProps: '按鈕裡面icon自定義style',
                textStyleProps: '按鈕裡面文字自定義style'
            }
        },
        template: `<CustomButton :url="url" :text="text" :title="title" :btnStyleProps="btnStyleProps" :imgShow="imgShow" :imgSrc="imgSrc" :imgStyleProps="imgStyleProps" :iconShow="iconShow" :icon="icon" :iconStyleProps="iconStyleProps" :textStyleProps="textStyleProps" />`
    }),
    {
        notes: '自定義大按鈕，可自訂icon使用img 或是 i ，使用order 可以調整icon出現的順序',
        info: {
            summary: '自定義大按鈕，可自訂icon使用img 或是 i ，使用order 可以調整icon出現的順序'
        }
    }
);