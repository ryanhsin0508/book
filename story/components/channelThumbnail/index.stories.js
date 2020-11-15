import {
    storiesOf
} from '@storybook/vue';
import {
    withKnobs,
    select,
    text,
    number,
    object,
    array
} from '@storybook/addon-knobs';
import selectChannelThumbnail from './selectChannelThumbnail.vue';
import channelThumbnail from './channelThumbnail.vue';
import counterButton from './counterButton.vue';

const stories = storiesOf('Beautybee|channelThumbnail', module);
stories.addDecorator(withKnobs);
const channelList = [{
        _id: '5b4c6aa20832663e0b23cad5',
        thumbnail: 'https://images.girlstyle.com/girlstyle/channel/images/thumbnail_beauty.jpg',
        names: {
            en: 'Beauty',
            ko: '뷰티',
            'zh-CN': '美容',
            'zh-HK': '美容',
            'zh-TW': '美容'
        }
    },
    {
        _id: '5b4c6aa20832663e0b23cad7',
        thumbnail: 'https://images.girlstyle.com/girlstyle/channel/images/thumbnail_fashion.jpg',
        names: {
            en: 'Fashion',
            ko: '패션',
            'zh-CN': '时尚',
            'zh-HK': '時尚',
            'zh-TW': '時尚'
        }
    },
    {
        _id: '5b7f980633c4680f0d287ba2',
        thumbnail: 'https://images.girlstyle.com/girlstyle/channel/images/thumbnail_hot_topics.jpg',
        names: {
            en: 'Hot Topics',
            ko: '핫이슈',
            'zh-CN': '热话',
            'zh-HK': '熱話',
            'zh-TW': '熱話'
        }
    },
    {
        _id: '5b4c6aa20832663e0b23cada',
        thumbnail: 'https://images.girlstyle.com/girlstyle/channel/images/thumbnail_food.jpg',
        names: {
            en: 'Food',
            ko: '푸드',
            'zh-CN': '美食',
            'zh-HK': '美食',
            'zh-TW': '美食'
        }
    },
    {
        _id: '5b4c6aa20832663e0b23cad9',
        thumbnail: 'https://images.girlstyle.com/girlstyle/channel/images/thumbnail_trevel.jpg',
        names: {
            en: 'Travel',
            ko: '여행',
            'zh-CN': '旅游',
            'zh-HK': '旅遊',
            'zh-TW': '旅遊'
        }
    }
];
const lang = ['en', 'ko', 'zh-CN', 'zh-HK', 'zh-TW'];
const inputType = ['checkbox', 'radio'];
const channelThumb = {};
const channelEle = {
    width: '104px',
    height: '104px',
    margin: '0 7px 15px'
};
const channelBtn = {
    width: '200px',
    height: '44px'
};
const buttonText = ['Select', 'more', 'Done']
stories.add(
    'selectChannelThumbnail',
    () => ({
        components: {
            selectChannelThumbnail
        },
        props: {
            channelList: {
                default: object('channelList', channelList)
            },
            lang: {
                default: select('language', lang)
            },
            inputType: {
                default: select('inputType', inputType)
            },
            channelThumb: {
                default: object('channelThumb', channelThumb)
            },
            channelEle: {
                default: object('channelEle', channelEle)
            },
            channelBtn: {
                default: object('channelBtn', channelBtn)
            },
            getMount: {
                default: number('getMount', 3)
            },
            buttonText: {
                default: array('channelBtn', buttonText)
            }
        },
        methods: {
            actionSubChannel(channelIds) {
                if (channelIds) {
                    // 在此執行 Action_Channel - subscribe by IDs API
                    console.log(channelIds);
                }
            }
        },
        template: `
            <selectChannelThumbnail :channelList="channelList" :lang="lang" :inputType="inputType" :getMount="getMount" :channelThumb="channelThumb" :channelEle="channelEle" :buttonText="buttonText" @actionSubChannel="actionSubChannel" />
        `
    }), {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 事件方法 ]
        actionSubChannel (channelIds)：
        回傳參數：被選取的頻道 ID
        ex:
            getChoosenChannelIds (channelIds) {
                // 在此執行 Action_Channel - subscribe by IDs API
            }


        作者：Agnes Kao
    `,
        info: {
            summary: 'demo 頻道卡片 + 按鈕'
        }
    }
);
stories.add(
    'channelThumbnail',
    () => ({
        components: {
            channelThumbnail
        },
        props: {
            channelList: {
                default: object('channelList', channelList)
            },
            lang: {
                default: select('language', lang)
            },
            inputType: {
                default: select('inputType', ['checkbox', 'radio'])
            },
            getMount: {
                default: number('getMount', 3)
            },
            channelThumb: {
                default: object('channelThumb', {
                    width: text('channelThumbWidth', '100%'),
                    flexDirection: select('flexDirection', ['column', 'column-reverse', 'row', 'row-reverse']),
                    flexWrap: select('flexWrap', ['wrap', 'nowrap']),
                    justifyContent: select('justifyContent', ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'])
                })
            },
            nothing: {
                default: text('===== breakline ===== breakline ===== breakline ===== breakline ===== breakline ===== ', '')
            },
            channelEle: {
                default: object('channelEle', channelEle)
            }
        },
        methods: {
            getChoosenChannelIds(channelIds) {
                console.log(channelIds);
                // 在此執行 Action_Channel - subscribe by IDs API
            }
        },
        propsDescription: {
            channelThumbnail: {
                // These description will appear in `description` column in props table
                channelList: '（必填）頻道資料',
                lang: '（必填）目前語系，預設"en"',
                inputType: '單選或是複選，預設"複選"',
                getMount: '最少要選擇 N 個，預設"3"',
                channelThumb: `
                    width: '頻道卡片父層寬度，預設"100%"'，
                    flexDirection: '卡片排列方向，預設 row'，
                    flexWrap: '卡片是否需要斷行排列，預設 wrap'，
                    justifyContent: '卡片水平對齊方式'
                `,
                channelEle: `
                    width: '頻道卡片寬度，預設"104px"'，
                    height: '頻道卡片高度，預設"104px"'，
                    borderRadius: '頻道卡片圓角，預設"6px"'，
                    margin: '頻道卡片元素的間距，預設"0 7px 15px"'
                `
            }
        },
        template: `
            <div style="color: #fff; font-weight: bold; font-size: 12px;">
                <!-- ↑好孩子要養成好習慣，記得把樣式定義在 class 或是 id 裡面喔！ -->
                <channelThumbnail :channelList="channelList" :lang="lang" :inputType="inputType" :channelThumb="channelThumb" :channelEle="channelEle" />
            </div>
        `
    }), {
        notes: `
            [ 版本紀錄 ]
            1.0.0 版

            [ 事件方法 ]
            getChoosenChannelIds (channelIds)：
            回傳參數：被選取的頻道 ID
            ex:
                getChoosenChannelIds (channelIds) {
                    // 在此執行回傳給父層
                }

            作者：Agnes Kao
        `,
        info: {
            summary: '頻道卡片：可自訂單選或複選、卡片大小、圓角樣式、排版方式'
        }
    }
);

stories.add(
    'counterButton',
    () => ({
        components: {
            counterButton
        },
        props: {
            lang: {
                default: select('language', ['en', 'ko', 'zh-CN', 'zh-HK', 'zh-TW'])
            },
            selectChannels: {
                default: object('selectChannels', ['a', 'b', 'c'])
            },
            countNum: {
                default: number('countNum', 3)
            },
            buttonText: {
                default: array('buttonText', buttonText)
            },
            channelBtn: {
                default: object('channelBtn', {
                    width: text('channelBtnWidth', '200px'),
                    height: text('channelBtnHeight', '44px'),
                    fontWeight: text('channelBtnFontWeight', 'bold'),
                    fontSize: text('channelBtnFontSize', '14px'),
                    color: text('channelBtnFontColor', '#fff'),
                    borderRadius: text('channelBtnRadius', '44px')
                })
            }
        },
        methods: {
            actionSubChannel(channelIds) {
                if (channelIds) {
                    // 在此執行 Action_Channel - subscribe by IDs API
                    console.log(channelIds);
                }
            }
        },
        propsDescription: {
            counterButton: {
                // These description will appear in `description` column in props table
                lang: '（必填）目前語系，預設"en"',
                selectChannels: `被選擇的頻道ID，預設"['a', 'b', 'c']"`,
                countNum: '倒數開始數字，預設"3"',
                buttonText: `按鈕顯示文字，預設"['Select', 'more', 'Done']"`,
                channelBtn: `
                width: '按鈕寬度，預設"200px"'，
                height: '按鈕高度，預設"44px"'，
                fontWeight: '按鈕文字樣式，預設"粗體"'，
                fontSize: '按鈕文字樣式，預設"12px"'，
                color: '按鈕文字樣式，預設"#fff"'，
                borderRadius: '按鈕外觀樣式，圓角預設"44px"'

            `,
                channelEle: `
                width: '頻道卡片寬度，預設"104px"'，
                height: '頻道卡片高度，預設"104px"'，
                borderRadius: '頻道卡片圓角，預設"6px"'，
                margin: '頻道卡片元素的間距，預設"0 7px 15px"'
            `
            }
        },
        template: `
        <counterButton :lang="lang" :selectChannels="selectChannels" :countNum="countNum" :buttonText="buttonText" :channelBtn="channelBtn" @actionSubChannel="actionSubChannel" />
    `
    }), {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 事件方法 ]
        actionSubChannel (channelIds)：
        回傳參數：被選取的頻道 ID
        ex:
            getChoosenChannelIds (channelIds) {
                // 在此執行 Action_Channel - subscribe by IDs API
            }

        作者：Agnes Kao
    `,
        info: {
            summary: '倒數按鈕：可自訂倒數數字、按鈕外觀（包含大小、顏色、圓角樣式）'
        }
    }
);