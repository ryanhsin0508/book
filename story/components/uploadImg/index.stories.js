import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, number, text, object } from '@storybook/addon-knobs';
import myComponent from './uploadImg.vue';

const stories = storiesOf('Beautybee|uploadImg', module);
let img = 'https://beautybee.imgix.net/girlstyle/user/images/154095988057836F9DXcNPJa.jpg';
stories.addDecorator(withKnobs);
stories.add(
    'uploadImg',
    () => ({
        components: { myComponent },
        props: {
            edit: {
                default: boolean('edit', true)
            },
            imgSrc: {
                default: text('imgSrc', img)
            },
            text: {
                default: text('text', 'Add a cover photo')
            },
            hasCropShape: {
                default: boolean('hasCropShape', true)
            },
            limitSize: {
                default: number('limitSize', 300)
            },
            uploadHeader: {
                default: object('uploadHeader', { 'Authorization': 'Bearer' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJTSEEyNTYifQ.eyJzdWIiOiI1YzcwYzRkNGRmZDZmZDUwM2UxODMzNDYiLCJnaXJsc3R5bGUiOiIiLCJpc3MiOiJodHRwOlwvXC91YXBpLmJlYXV0eWJlZS5jb21cL2FwaVwvdjJcL3VzZXJcL2F1dG9fbG9naW4iLCJpYXQiOjE1NTk4MDE3MjIsImV4cCI6MTU1OTg4ODEyMiwibmJmIjoxNTU5ODAxNzIyLCJqdGkiOiJjRGtpOHpnRllvQXdvZE9nIn0.nBooBZyk7mI6lis9sNZHPt-DlY3JVKr7zQf3WIVPuck' })
            },
            uploadUrl: {
                default: text('uploadUrl', 'https://uapi.beautybee.com/api/v2/image/upload')
            },
            isCircle: {
                default: boolean('isCircle', true)
            }
        },
        data () {
            return {
                img: this.imgSrc
            };
        },
        methods: {
            upload (imgPath) {
                this.img = imgPath;
            }
        },
        propsDescription: {
            myComponent: {
                // These description will appear in `description` column in props table
                edit: '是否為可編輯圖片狀態',
                imgSrc: '圖片路徑位置',
                text: '可編輯圖片模式時,背景顯示的上傳圖片文字',
                hasCropShape: '是否顯示圖片裁切形狀',
                limitSize: '圖片上傳大小限制（寬=高px)***套件預設最小限制為200x200px',
                uploadHeader: `上傳圖片的api header(有登入則須加token,ex: getUser ? { 'Authorization': 'Bearer' + getUser.auth_token } : {})`,
                uploadUrl: '上傳圖片的api',
                isCircle: '圖片區塊是否為圓形'
            }
        },
        template: `<myComponent style="width: 168px;height: 168px;" :edit="edit" :imgSrc="img" :text="text" :hasCropShape="hasCropShape" :limitSize="limitSize" :uploadHeader="uploadHeader" :uploadUrl="uploadUrl" :isCircle="isCircle" @uploadSuccess="upload" />`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 注意事項 ]

        1.安裝此元件前須確認該專案已有‘vue-image-crop-upload’的圖片剪裁上傳套件
        2.uploadSuccess事件：上傳圖片成功後要做的事情（ex:將舊圖片更新為新圖片位置）
        
        [ 作者 ]
        Anne
    `,
        info: {
            summary: '圖片剪裁上傳元件,可選擇圖片區塊是否為圓形（頭像）'
        }
    }
);
