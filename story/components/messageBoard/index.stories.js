import { storiesOf } from '@storybook/vue';
import myComponent from './explam.vue';
import { withKnobs, select, text, number, object, array, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
const stories = storiesOf('Beautybee|messageBoard', module);
stories.addDecorator(withKnobs);
const userData = {
    about: 'Yes I do.',
    account_status: 1,
    auth_token: '"eyJ0eXAiOiJKV1QiLCJhbGciOiJTSEEyNTYifQ.eyJzdWIiOiI1Yjg4YzhlNTMzYzQ2ODBlZTczMTViNDciLCJnaXJsc3R5bGUiOiIkMnkkMTAkdkxJTEV4T1pVUlRTUFp5ZWJxWVRWdVwvbDN0OUxrRGRzdzgzSUFNUm40bFY5dnBSTVwvMHVaRyIsImlzcyI6Imh0dHA6XC9cL3VhcGkuYmVhdXR5YmVlLmNvbVwvYXBpXC92MlwvdXNlclwvaW5mbyIsImlhdCI6MTU1OTIxMDU2MywiZXhwIjoxNTU5Mjk2OTYzLCJuYmYiOjE1NTkyMTA1NjMsImp0aSI6ImJydUdOR2dyd1lkNDFrNWcifQ.-BCC2S5rpOS7qhMPLZOUW35_S9LrSJAkK-SIQyQRozo"',
    avatar: ['https://beautybee.imgix.net/girlstyle/posts/images/15591843533341HMF1FpTHTu.jpg'],
    cover: ['https://beautybee.imgix.net/girlstyle/posts/images/15591834936573G26m78vn5p.jpg'],
    display_name: '國魚',
    language: 'zh-TW',
    _id: '5b88c8e533c4680ee7315b47'
};
const allCommentList = [
    {
        _id: '5cd553b4dfd6fd42161f1a8d',
        parent_comment: false,
        parent_id: null,
        like_count: 0,
        user_id: '5c70c4d4dfd6fd503e183346',
        post_id: '5ccbcb1cdfd6fd42064fab95',
        content: '現在的年輕人，不像我們以前吃苦當吃補，22k 剛好而已',
        updated_at: '2019-05-10T10:34:28+00:00',
        created_at: '2019-05-10T10:34:28+00:00',
        id: '5cd553b4dfd6fd42161f1a8d',
        reply_user_list: {},
        content_tag_user_list: {},
        comment_time: '2019-05-01 18:00:00',
        timestamp: 1557484468,
        replies_num: 0,
        total_comments: 29,
        content_tag_user_collection: {},
        liked: false,
        user_collection: {
            _id: '5c70c4d4dfd6fd503e183346',
            first_name: '',
            last_name: '',
            display_name: '郭董生氣',
            real_name: '5c70c4d4dfd6fd503e183346',
            about: '媽祖托夢給我，所以我只好選一波',
            fol_count: 1,
            post_count: 0,
            avatar_path: ['girlstyle/posts/images/15591888712971bfxRu3Mrha.jpg'],
            cover_path: ['girlstyle/posts/images/15586876823664U39jn7QNWl.jpg'],
            followed: false,
            avatar: ['https://beautybee.imgix.net/girlstyle/posts/images/15592877056971Am4CWyuuus.jpg'],
            cover: ['https://beautybee.imgix.net/girlstyle/posts/images/15592881503105DcRqh9HsXl.jpg']
        },
        user: {
            _id: '5c70c4d4dfd6fd503e183346',
            first_name: '',
            last_name: '',
            display_name: 'guest123',
            real_name: '5c70c4d4dfd6fd503e183346',
            about: 'Hi~',
            fol_count: 1,
            post_count: 0,
            avatar_path: ['girlstyle/posts/images/15591888712971bfxRu3Mrha.jpg'],
            cover_path: ['girlstyle/posts/images/15586876823664U39jn7QNWl.jpg'],
            followed: false,
            avatar: ['https://beautybee.imgix.net/girlstyle/posts/images/15591888712971bfxRu3Mrha.jpg'],
            cover: ['https://beautybee.imgix.net/girlstyle/posts/images/15586876823664U39jn7QNWl.jpg']
        }
    },
    {
        _id: '5cd553a4dfd6fd42571312b8',
        parent_comment: false,
        parent_id: null,
        like_count: 0,
        user_id: '5c70c4d4dfd6fd503e183346',
        post_id: '5ccbcb1cdfd6fd42064fab95',
        content: '樓上你在大聲什麼啦',
        updated_at: '2019-05-10T10:34:12+00:00',
        created_at: '2019-05-10T10:34:12+00:00',
        id: '5cd553a4dfd6fd42571312b8',
        reply_user_list: {},
        content_tag_user_list: {},
        comment_time: '2019-05-10 12:00:00',
        timestamp: 1557484452,
        replies_num: 0,
        total_comments: 29,
        content_tag_user_collection: {},
        liked: false,
        user_collection: {
            _id: '5c70c4d4dfd6fd503e183346',
            first_name: '',
            last_name: '',
            display_name: '睏寶',
            real_name: '5c70c4d4dfd6fd503e183346',
            about: '我只是眼睛小好嗎? (白眼',
            fol_count: 1209,
            post_count: 0,
            avatar_path: ['girlstyle/posts/images/15591888712971bfxRu3Mrha.jpg'],
            cover_path: ['girlstyle/posts/images/15586876823664U39jn7QNWl.jpg'],
            followed: false,
            avatar: ['https://beautybee.imgix.net/girlstyle/posts/images/15592888735478T0uSj2ZGVM.jpg'],
            cover: ['https://beautybee.imgix.net/girlstyle/posts/images/15592888735478T0uSj2ZGVM.jpg']
        }
    }
];
const allReplyList = {
    commentId: '5cd553b4dfd6fd42161f1a8d',
    timestamp: 1559186966,
    total: 4,
    data: [
        {
            _id: '5cef4e16dfd6fd4289594a34',
            parent_comment: true,
            parent_id: '5cd553b4dfd6fd42161f1a8d',
            like_count: 0,
            dislike_count: 0,
            disable: false,
            reply_user_list: {},
            content_tag_user_list: {},
            user_id: '5b88c8e533c4680ee7315b47',
            post_id: '5ccbcb1cdfd6fd42064fab95',
            content: 'iii',
            created_at: '2019-05-30T03:29:26+00:00',
            comment_time: '2019-05-30T03:29:26+00:00',
            timestamp: 1559186966,
            replies_num: 0,
            total_comments: 29,
            content_tag_user_collection: {},
            liked: false,
            user_collection: {
                _id: '5b88c8e533c4680ee7315b47',
                fol_count: 3,
                post_count: 7,
                first_name: '',
                last_name: '',
                display_name: '國魚',
                real_name: 'Daddy',
                about: 'Yes I do.',
                avatar_path: ['girlstyle/posts/images/15591843533341HMF1FpTHTu.jpg'],
                cover_path: ['girlstyle/posts/images/15591834936573G26m78vn5p.jpg'],
                followed: true,
                avatar: ['https://beautybee.imgix.net/girlstyle/posts/images/15591843533341HMF1FpTHTu.jpg'],
                cover: ['https://beautybee.imgix.net/girlstyle/posts/images/15591834936573G26m78vn5p.jpg']
            },
            user: {
                _id: '5b88c8e533c4680ee7315b47',
                fol_count: 3,
                post_count: 7,
                first_name: '',
                last_name: '',
                display_name: '國魚',
                real_name: 'Daddy',
                about: 'Yes I do.',
                avatar_path: ['girlstyle/posts/images/15591843533341HMF1FpTHTu.jpg'],
                cover_path: ['girlstyle/posts/images/15591834936573G26m78vn5p.jpg'],
                followed: true,
                avatar: ['https://beautybee.imgix.net/girlstyle/posts/images/15591843533341HMF1FpTHTu.jpg'],
                cover: ['https://beautybee.imgix.net/girlstyle/posts/images/15591834936573G26m78vn5p.jpg']
            }
        },
        {
            _id: '5cef4e1bdfd6fd417b5292b5',
            parent_comment: true,
            parent_id: '5cd553b4dfd6fd42161f1a8d',
            like_count: 0,
            dislike_count: 0,
            disable: false,
            reply_user_list: {
                user: '5b88c8e533c4680ee7315b47'
            },
            content_tag_user_list: {},
            user_id: '5b88c8e533c4680ee7315b47',
            post_id: '5ccbcb1cdfd6fd42064fab95',
            content: 'uu',
            created_at: '2019-05-30T03:29:31+00:00',
            comment_time: '2019-05-30T03:29:31+00:00',
            timestamp: 1559186971,
            replies_num: 0,
            total_comments: 29,
            content_tag_user_collection: [
                {
                    _id: '5b88c8e533c4680ee7315b47',
                    avatar: ['https://images.girlstyle.com/girlstyle/posts/images/15591843533341HMF1FpTHTu.jpg'],
                    display_name: '國魚',
                    real_name: 'Daddy'
                }
            ],
            liked: false,
            user_collection: {
                _id: '5b88c8e533c4680ee7315b47',
                fol_count: 3,
                post_count: 7,
                first_name: '',
                last_name: '',
                display_name: '國魚',
                real_name: 'Daddy',
                about: 'Yes I do.',
                avatar_path: ['girlstyle/posts/images/15591843533341HMF1FpTHTu.jpg'],
                cover_path: ['girlstyle/posts/images/15591834936573G26m78vn5p.jpg'],
                followed: true,
                avatar: ['https://beautybee.imgix.net/girlstyle/posts/images/15591843533341HMF1FpTHTu.jpg'],
                cover: ['https://beautybee.imgix.net/girlstyle/posts/images/15591834936573G26m78vn5p.jpg']
            },
            user: {
                _id: '5b88c8e533c4680ee7315b47',
                fol_count: 3,
                post_count: 7,
                first_name: '',
                last_name: '',
                display_name: '國魚',
                real_name: 'Daddy',
                about: 'Yes I do.',
                avatar_path: ['girlstyle/posts/images/15591843533341HMF1FpTHTu.jpg'],
                cover_path: ['girlstyle/posts/images/15591834936573G26m78vn5p.jpg'],
                followed: true,
                avatar: ['https://beautybee.imgix.net/girlstyle/posts/images/15591843533341HMF1FpTHTu.jpg'],
                cover: ['https://beautybee.imgix.net/girlstyle/posts/images/15591834936573G26m78vn5p.jpg']
            }
        },
        {
            _id: '5cef4e44dfd6fd420f53f9cf',
            parent_comment: true,
            parent_id: '5cd553b4dfd6fd42161f1a8d',
            like_count: 0,
            dislike_count: 0,
            disable: false,
            reply_user_list: {
                user: '5b88c8e533c4680ee7315b47'
            },
            content_tag_user_list: {},
            user_id: '5b88c8e533c4680ee7315b47',
            post_id: '5ccbcb1cdfd6fd42064fab95',
            content: 'ii',
            created_at: '2019-05-30T03:30:12+00:00',
            comment_time: '2019-05-30T03:30:12+00:00',
            timestamp: 1559187012,
            replies_num: 0,
            total_comments: 29,
            content_tag_user_collection: [
                {
                    _id: '5b88c8e533c4680ee7315b47',
                    avatar: ['https://images.girlstyle.com/girlstyle/posts/images/15591843533341HMF1FpTHTu.jpg'],
                    display_name: '國魚',
                    real_name: 'Daddy'
                }
            ],
            liked: false,
            user_collection: {
                _id: '5b88c8e533c4680ee7315b47',
                fol_count: 3,
                post_count: 7,
                first_name: '',
                last_name: '',
                display_name: '國魚',
                real_name: 'Daddy',
                about: 'Yes I do.',
                avatar_path: ['girlstyle/posts/images/15591843533341HMF1FpTHTu.jpg'],
                cover_path: ['girlstyle/posts/images/15591834936573G26m78vn5p.jpg'],
                followed: true,
                avatar: ['https://beautybee.imgix.net/girlstyle/posts/images/15591843533341HMF1FpTHTu.jpg'],
                cover: ['https://beautybee.imgix.net/girlstyle/posts/images/15591834936573G26m78vn5p.jpg']
            },
            user: {
                _id: '5b88c8e533c4680ee7315b47',
                fol_count: 3,
                post_count: 7,
                first_name: '',
                last_name: '',
                display_name: '國魚',
                real_name: 'Daddy',
                about: 'Yes I do.',
                avatar_path: ['girlstyle/posts/images/15591843533341HMF1FpTHTu.jpg'],
                cover_path: ['girlstyle/posts/images/15591834936573G26m78vn5p.jpg'],
                followed: true,
                avatar: ['https://beautybee.imgix.net/girlstyle/posts/images/15591843533341HMF1FpTHTu.jpg'],
                cover: ['https://beautybee.imgix.net/girlstyle/posts/images/15591834936573G26m78vn5p.jpg']
            }
        },
        {
            _id: '5cef50a4dfd6fd41fe61eb6d',
            parent_comment: true,
            parent_id: '5cd553b4dfd6fd42161f1a8d',
            like_count: 0,
            dislike_count: 0,
            disable: false,
            reply_user_list: {},
            content_tag_user_list: {},
            user_id: '5b88c8e533c4680ee7315b47',
            post_id: '5ccbcb1cdfd6fd42064fab95',
            content: '安安',
            created_at: '2019-05-30T03:40:20+00:00',
            comment_time: '2019-05-30T03:40:20+00:00',
            timestamp: 1559187620,
            replies_num: 0,
            total_comments: 29,
            content_tag_user_collection: {},
            liked: false,
            user_collection: {
                _id: '5b88c8e533c4680ee7315b47',
                fol_count: 3,
                post_count: 7,
                first_name: '',
                last_name: '',
                display_name: '國魚',
                real_name: 'Daddy',
                about: 'Yes I do.',
                avatar_path: ['girlstyle/posts/images/15591843533341HMF1FpTHTu.jpg'],
                cover_path: ['girlstyle/posts/images/15591834936573G26m78vn5p.jpg'],
                followed: true,
                avatar: ['https://beautybee.imgix.net/girlstyle/posts/images/15591843533341HMF1FpTHTu.jpg'],
                cover: ['https://beautybee.imgix.net/girlstyle/posts/images/15591834936573G26m78vn5p.jpg']
            },
            user: {
                _id: '5b88c8e533c4680ee7315b47',
                fol_count: 3,
                post_count: 7,
                first_name: '',
                last_name: '',
                display_name: '國魚',
                real_name: 'Daddy',
                about: 'Yes I do.',
                avatar_path: ['girlstyle/posts/images/15591843533341HMF1FpTHTu.jpg'],
                cover_path: ['girlstyle/posts/images/15591834936573G26m78vn5p.jpg'],
                followed: true,
                avatar: ['https://beautybee.imgix.net/girlstyle/posts/images/15591843533341HMF1FpTHTu.jpg'],
                cover: ['https://beautybee.imgix.net/girlstyle/posts/images/15591834936573G26m78vn5p.jpg']
            }
        }
    ]
};
stories.add(
    'message-board',
    () => ({
        components: { myComponent },
        props: {
            user: {
                default: object('user', userData)
            },
            commentTotal: {
                default: number('total', 2)
            },
            commentList: {
                default: array('commentList', allCommentList)
            },
            commentNum: {
                default: number('commentNum', 2)
            },
            loadMore: {
                default: boolean('loadMore', false)
            },
            postDisable: {
                default: boolean('postDisable', false)
            },
            loading: {
                default: boolean('loading', false)
            },
            reply: {
                default: object('reply', allReplyList)
            }
        },
        propsDescription: {
            myComponent: {
                user: '使用者資料',
                commentTotal: '回應總數',
                commentList: '留言列表',
                commentNum: '留言數',
                loadMore: '第一層回覆是否顯示載入更多按鈕',
                postDisable: '是否禁用留言恇',
                loading: '是否顯示 loading',
                reply: '回應列表',
                layer: '是否為彈出層用',
                lang: '語系',
                newReply: '新增回覆的值'
            }
        },
        template: `<myComponent :user="user" :commentTotal="commentTotal" :commentList="commentList" :commentNum="commentNum" :loadMore="loadMore" :postDisable="postDisable" :loading="loading" :reply="reply" @postComment="postComment" @loadReplyList="loadReplyList" />`,
        methods: {
            postComment(inputComment) {
                // 發布留言
                let self = this;
                let now = new Date();
                let newComment = {
                    comment_time: now.getFullYear() + '-' + now.getMonth() + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes(),
                    content: inputComment,
                    like_count: 0,
                    user_collection: {
                        real_name: this.user.real_name,
                        avatar: this.user.avatar,
                        display_name: this.user.display_name
                    }
                };
                self.commentList.splice(0, 0, newComment);
                this.commentNum++;
            },
            loadReplyList(params) {
                this.reply = allReplyList;
            }
        }
    }),
    {
        notes: `
            [ 版本紀錄 ]

            1.0.0 版 - 留言與回覆功能。

            作者：Daddy
        `,
        info: {
            summary: `留言板 - 測試第一版：實裝留言、回覆、檢舉、等功能。`
        }
    }
);
