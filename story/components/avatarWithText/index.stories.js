import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, number, text, object } from '@storybook/addon-knobs';
import myComponent from './avatarWithText.vue';

const stories = storiesOf('Beautybee|AvatarWithText', module);
stories.addDecorator(withKnobs);
const profileData = {
    "_id":"5c74df7fdfd6fd514d19dfae",
    "display_name":"anne","real_name":"anne8355",
    "about":"hello",
    "fol_count":4,
    "post_count":0,
    "cover":["https://beautybee.imgix.net/girlstyle/posts/images/15520188186276SynBoUsoQe.jpg"],
    "avatar":["https://beautybee.imgix.net/girlstyle/posts/images/15520197892668Y5T7jTODBM.jpg"],
    "about_tag_user_collection":[],
    "followed":false
};
stories.add(
    'AvatarWithText',
    () => ({
        components: { myComponent },
        props: {
            isHandleLogin: {
                default: boolean('isHandleLogin', false)
            },
            avatarWidth: {
                default: number('size', 45)
            },
            profile: {
                default: object('profile', profileData)
            },
            hasPopover: {
                default: boolean('hasPopover', true)
            },
            isLazyLoad: {
                default: boolean('isLazyLoad', false)
            },
            language: {
                default: text('language', 'zh-TW')
            },
            isRow: {
                default: boolean('isRow', true)
            }
        },
        methods: {
            handleLogin () {
                alert('請先登入');
            }
        },
        propsDescription: {
            myComponent: {
                // These description will appear in `description` column in props table
                isHandleLogin: '是否彈出登入提醒視窗,預設false（不管是否登入都不會出現提醒彈窗）',
                avatarWidth: '頭像大小',
                profile: '個人資料（必填）',
                hasPopover: '是否有個人資料懸浮頁,預設true',
                isLazyLoad: '是否加入圖片懶預載,預設true',
                language: '選擇語系,預設"en", 填入選項：en/zh-TW/ko/zh-CN',
                detail: '個人詳細資訊,可為 一般文字 或 具有自訂樣式的html',
                isRow: '是否為橫向排列,預設true（false: 直向）'
            }
        },
        template: `<div style="display: flex;flex-direction: column;">
                    <myComponent style="font-size: 15px;color: #9b9b9b;" :isHandleLogin="isHandleLogin" :avatarWidth="avatarWidth" :profile="profile" :hasPopover="hasPopover" :isLazyLoad="isLazyLoad" :language="language" :detail="'<span>anne ． 4 粉絲</span>'" :isRow="isRow" @handleLogin="handleLogin" />
                    <myComponent :isHandleLogin="isHandleLogin" :avatarWidth="avatarWidth" :profile="profile" :hasPopover="hasPopover" :isLazyLoad="isLazyLoad" :language="language" :isRow="isRow" @handleLogin="handleLogin" />
                    </div>`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 注意事項 ]

        1. 安裝此元件前須確認該專案已有‘vue-lazyload’ 和‘element-ui’的Popover套件
        2. detail屬性傳入的字串可為 一般文字 或 具有自訂樣式的html    
        
        [ 作者 ]
        Anne
    `,
        info: {
            summary: '個人頭像和名字,並選擇是否懸浮個人資料卡片功能：可自訂頭像大小,直向或橫向排列,個人名稱下方是否要有其他資訊文字detail,和處理未登入狀態的＠handleLogin事件'
        }
    }
);
