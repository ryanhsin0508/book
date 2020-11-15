import {
    storiesOf
} from '@storybook/vue';
import {
    withKnobs,
    select,
    text,
    number,
    object,
    array,
    boolean
} from '@storybook/addon-knobs';
import channelListNavigationBar from './channelListNavigationBar.vue';
import channelNavigationBar from './channelNavigationBar.vue';

const stories = storiesOf('Beautybee|channelNavigationBar', module);
stories.addDecorator(withKnobs);
const channelList = [{
        _id: '5b4c6aa20832663e0b23cad5',
        thumbnail: 'https://images.girlstyle.com/girlstyle/channel/images/thumbnail_beauty.jpg',
        icon: "https://images.girlstyle.com/girlstyle/system/images/ic_channel_beauty_off.jpg",
        icon_on: "https://images.girlstyle.com/girlstyle/system/images/ic_channel_beauty_on.jpg",
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
        icon: "https://images.girlstyle.com/girlstyle/system/images/ic_channel_fashion_off.jpg",
        icon_on: "https://images.girlstyle.com/girlstyle/system/images/ic_channel_fashion_on.jpg",
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
        icon: "https://images.girlstyle.com/girlstyle/system/images/ic_channel_hottopic_off.jpg",
        icon_on: "https://images.girlstyle.com/girlstyle/system/images/ic_channel_hottopic_on.jpg",
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
        icon: "https://images.girlstyle.com/girlstyle/system/images/ic_channel_food_off.jpg",
        icon_on: "https://images.girlstyle.com/girlstyle/system/images/ic_channel_food_on.jpg",
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
        thumbnail: 'https://images.girlstyle.com/girlstyle/channel/images/thumbnail_travel.jpg',
        icon: "https://images.girlstyle.com/girlstyle/system/images/ic_channel_travel_off.jpg",
        icon_on: "https://images.girlstyle.com/girlstyle/system/images/ic_channel_travel_on.jpg",
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
stories.add(
    'channelListNavigationBar',
    () => ({
        components: {
            channelListNavigationBar
        },
        props: {
            channelList: {
                default: object('channelList', channelList)
            },
            lang: {
                default: select('language', lang)
            },
            isDesktop: {
                default: boolean('isDesktop', true)
            },
            hasIcon: {
                default: boolean('hasIcon', false)
            },
            hasArrowButton: {
                default: boolean('hasArrowButton', false)
            },
            arrowButtonClass: {
                default: text('arrowButtonStyle', 'barBtn')
            },
            totalChannelWidth: {
                default: number('totalChannelWidth', 980)
            },
            movePosition: {
                default: number('movePosition', 200)
                // },
                // ensPosition: {
                //     default: number('ensPosition', 0)
            }
        },
        methods: {},
        template: `
            <channelListNavigationBar :channelList="channelList" :lang="lang" :isDesktop="isDesktop" :hasIcon="hasIcon" :hasArrowButton="hasArrowButton" :arrowButtonClass="arrowButtonClass" :totalChannelWidth="totalChannelWidth" :movePosition="movePosition" />
        `
    }), {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 事件方法 ]


        作者：Agnes Kao
    `,
        info: {
            summary: '頻道選單'
        }
    }
);
stories.add(
    'channelNavigationBar',
    () => ({
        components: {
            channelNavigationBar
        },
        props: {
            channelList: {
                default: object('channelList', channelList)
            },
            lang: {
                default: select('language', lang)
            },
            isDesktop: {
                default: boolean('isDesktop', true)
            },
            hasIcon: {
                default: boolean('hasIcon', false)
            },
            hasArrowButton: {
                default: boolean('hasArrowButton', false)
            },
            arrowButtonClass: {
                default: text('arrowButtonStyle', 'barBtn')
            },
            totalChannelWidth: {
                default: number('totalChannelWidth', 980)
            },
            movePosition: {
                default: number('movePosition', 200)
                // },
                // ensPosition: {
                //     default: number('ensPosition', 0)
            }
        },
        methods: {},
        template: `
            <channelNavigationBar :class="[isDesktop ? 'channelBar' : 'mChannelBar']" :channelList="channelList" :lang="lang" :isDesktop="isDesktop" :hasIcon="hasIcon" :hasArrowButton="hasArrowButton" :arrowButtonClass="arrowButtonClass" :totalChannelWidth="totalChannelWidth" :movePosition="movePosition" />
        `
    }), {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 事件方法 ]


        作者：Agnes Kao
    `,
        info: {
            summary: '頻道選單'
        }
    }
);