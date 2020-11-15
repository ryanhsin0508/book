import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, number } from '@storybook/addon-knobs';
import myComponent from './likeButton.vue';

const stories = storiesOf('Beautybee|LikeButton', module);
stories.addDecorator(withKnobs);
stories.add(
    'LikeButton',
    () => ({
        components: { myComponent },
        props: {
            liked: {
                default: boolean('liked', false)
            },
            size: {
                default: number('size', 18)
            },
            likeCount: {
                default: number('likeCount', 0)
            },
            isLogin: {
                default: boolean('isLogin', true)
            }
        },
        methods: {
            handleLogin () {
                alert('請先登入');
            },
            actionLike (likeStatus, likeCount) {
                if (likeStatus) {
                    console.log(`讚數：${likeCount};動作：喜歡`);
                    // 在此執行like API
                } else {
                    console.log(`讚數：${likeCount};動作：不喜歡`);
                    // 在此執行undoLike API
                }
            }
        },
        propsDescription: {
            myComponent: {
                // These description will appear in `description` column in props table
                liked: '是否點讚(目前按讚的狀態)',
                size: '讚的愛心大小',
                likeCount: '目前按讚數',
                isLogin: '[必填]是否為登入狀態(登入時才能進行按讚動作)'
            }
        },
        template: `<myComponent :liked="liked" :size="size" :likeCount="likeCount" :isLogin="isLogin" @handleLogin="handleLogin" @actionLike="actionLike" />`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 事件方法 ]

        1. handleLogin ()：
           處理未登入時按讚的反饋（例如：跳出登入提示彈窗）
        2. actionLike (likeStatus, likeCount)：
            回傳參數：執行按讚動作後的按讚狀態和按讚數
        ex:
            actionLike (likeStatus, likeCount) {
                if (likeStatus) {
                    // 在此執行like API
                } else {
                    // 在此執行undoLike API
                }
            }
        
        [ 作者 ]
        Anne
    `,
        info: {
            summary: '按讚功能：可自訂愛心大小,按讚後觸發的＠actionLike事件和處理未登入狀態的＠handleLogin事件'
        }
    }
);
