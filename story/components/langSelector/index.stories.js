import { storiesOf } from '@storybook/vue';
import langSelector from './langSelector.vue';
import { withKnobs, object, text, boolean } from '@storybook/addon-knobs';

const stories = storiesOf('Beautybee|langSelector', module);
stories.addDecorator(withKnobs);

// 假資料
const language = [
    {
        name: 'English',
        code: 'en',
        active: false
    },
    {
        name: '繁體',
        code: 'zh-TW',
        active: false
    },
    {
        name: '简体',
        code: 'zh-CN',
        active: false
    },
    {
        name: '한국어',
        code: 'ko',
        active: false
    }
];

stories.add(
    'langSelector',
    () => ({
        components: { langSelector },
        props: {
            type: {
                default: text('type', 'button')
            },
            lang: {
                default: text('lang', 'en')
            },
            language: {
                default: object('language', language)
            },
            isAuth: {
                default: boolean('isAuth', true)
            }
        },
        data() {
            return {
                currentLang: this.lang
            };
        },

        propsDescription: {
            langSelector: {
                type: '（非必填）預設為 button 樣式, button / dropList',
                lang: '（必填）目前語系',
                language: '（必填）所有語系列表資料',
                isAuth: '若為 true，表示用戶已登入狀態，切換語系時將會調用 updateProfile 方法, 否則調用 updateLanguage 方法'
            }
        },
        methods: {
            async updateProfile(lang) {
                console.log('send updateProfile api');

                // 發送 api, 更新完時同步更新 vuex
                this.updateLanguage(lang);

                // api demo ...
                // await axios
                //     .patch(`${process.env.MIX_API_URL}/api/v2/user/profile`, {
                //         headers: { Authorization: `Bearer${user.auth_token}`, 'API-MIN-NO': 9 },
                //         data: { language: lang }
                //     })
                //     .then(({ data }) => {
                //         if (data.code === 100) {
                //             // 更新成功，同步更新 vuex 語系
                //             this.updateLanguage(data.language);
                //         }
                //     });
            },
            // 將當前語系儲存到 vuex
            updateLanguage(lang) {
                console.log('selected lang', lang);
                this.currentLang = lang;
            },
            // 未登入用戶, 將當前所選語系資料儲存到 cookie, 並保存 365 天
            setLangToCookie(lang) {
                console.log('save lang to cookie', lang);
                this.setCookie('language', lang, 365);
            },
            setCookie(cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
                var expires = 'expires=' + d.toUTCString();
                document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
            }
        },
        template: `
          <div class="box" style="color: #4a4a4a; font-size: 15px; line-height: 15px;">
            <langSelector :type="type" :isAuth="isAuth" :language="language" :lang="currentLang" @updateProfile="updateProfile" @updateLanguage="updateLanguage" @setLangToCookie="setLangToCookie" />
            <br />
            <langSelector :type="'dropList'" :isAuth="isAuth" :language="language" :lang="currentLang" @updateProfile="updateProfile" @updateLanguage="updateLanguage" @setLangToCookie="setLangToCookie" />
          </div>`
    }),
    {
        notes: `
          [ 版本紀錄 ]
          1.0.0 版

          [ 作者 ]
          Mars
        `,
        info: {
            summary: '語系切換：提供所有語系列表資料，將自動產生語系列表，並於語系切換時依據 isAuth 狀態觸發對應方法，並回傳所選語系 id, 提供兩款樣式 [button | dropList], 可傳遞 type props 參數設置'
        }
    }
);
