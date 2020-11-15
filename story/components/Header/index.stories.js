import { storiesOf } from '@storybook/vue';
import { withKnobs, color, number, boolean, text, object } from '@storybook/addon-knobs';
import Header from './Header';
import CollapsingHeader from './CollapsingHeader';
import DropdownSelect from './Select';

const stories = storiesOf('Presslogic | Header', module);
stories.addDecorator(withKnobs);

//範例資料
const options = [
    {
        name: 'Hong Kong 香港',
        value: 'hk'
    },
    {
        name: 'Taiwan 台灣',
        value: 'tw'
    },
    {
        name: 'Singapore 新加坡',
        value: 'sg'
    },
    {
        name: 'India 印度',
        value: 'in'
    },
    {
        name: 'Korea 韓國',
        value: 'kr'
    },
    {
        name: 'Malaysia 馬來西亞',
        value: 'my'
    }
];

stories.add(
    'Header',
    () => ({
        components: { Header },
        props: {
            containerWidth: {
                default: number('header 內容寬度', 1085)
            },
            top: {
                default: number('logo-nav Y軸顯示位置', 5)
            },
            left: {
                default: number('logo-nav X軸顯示位置', 1)
            },
            bgColor: {
                default: color('Header 背景色', '#ffafa0')
            },
            height: {
                default: number('Header 高度', 122)
            },
            centerLogoHeight: {
                default: number('中間LOGO 的高度', 80)
            },
            centerLogoImg: {
                default: text('中間LOGO 圖片來源', 'https://assets.girlstyle.com/girlstyle-tw/images/girls/logo_TW.png')
            },
            centerLogoLink: {
                default: text('中間LOGO 連結', 'https://www.presslogic.com/')
            },
            borderBottomWidth: {
                default: number('Header 下底線粗細', 4)
            },
            borderBottomStyle: {
                default: text('Header 下底線樣式', 'solid')
            },
            borderBottomColor: {
                default: color('Header 下底線顏色', '#4faaac')
            },
            groupLogoMargin: {
                default: number('家族Logo 右邊間距', 20)
            },
            groupLogoHeight: {
                default: number('家族Logo 高度', 24)
            },
            groupLogoImg: {
                default: text('家族Logo 圖片來源', 'https://assets.girlstyle.com/girlstyle-tw/static/images/presslogic-logo.png')
            },
            groupLogoLink: {
                default: text('家族Logo 連結', 'https://www.presslogic.com/')
            }
        },
        propsDescription: {
            Header: {
                containerWidth: 'header 內容寬度',
                top: 'logo-nav Y軸顯示位置',
                left: 'logo-nav X軸顯示位置',
                bgColor: 'Header 背景色',
                height: 'Header 高度',
                centerLogoHeight: '中間 Logo 高度',
                borderBottomWidth: 'Header 下底線粗細',
                borderBottomStyle: 'Header 下底線樣式',
                borderBottomColor: 'Header 下底線顏色',
                centerLogoImg: '正中間Logo 圖片來源',
                centerLogoLink: '正中間Logo 連結',
                groupLogoMargin: '家族Logo 右邊間距',
                groupLogoHeight: '家族Logo 高度',
                groupLogoImg: '家族Logo 圖片來源',
                groupLogoLink: '家族Logo 連結'
            }
        },
        template: `
        <div>
        <Header
            :containerWidth='containerWidth'
            :top='top'
            :left='left'
            :bgColor='bgColor'
            :height='height'
            :centerLogoHeight='centerLogoHeight'
            :centerLogoImg="centerLogoImg"
            :centerLogoLink="centerLogoLink"
            :borderBottomWidth="borderBottomWidth"
            :borderBottomStyle="borderBottomStyle"
            :borderBottomColor="borderBottomColor"
            :groupLogoMargin="groupLogoMargin"
            :groupLogoHeight="groupLogoHeight"
            :groupLogoImg="groupLogoImg"
            :groupLogoLink="groupLogoLink"
        /></div>`
    }),
    {
        notes: 'Header for PressLogic',
        info: {
            summary: 'Header for PressLogic'
        }
    }
);

// Menu 範例資料
const categories = [
    {
        name: '人氣熱話',
        url: '#'
    },
    {
        name: '美妝',
        url: '#'
    },
    {
        name: '時尚',
        url: '#'
    },
    {
        name: '生活',
        url: '#'
    },
    {
        name: '閨蜜',
        url: '#'
    },
    {
        name: '戀愛',
        url: '#'
    },
    {
        name: '瘦身',
        url: '#'
    },
    {
        name: '影片',
        url: '#'
    },
    {
        name: '專欄',
        url: '#'
    }
];
stories.add(
    'CollapsingHeader',
    () => ({
        components: { CollapsingHeader },
        props: {
            show: {
                default: boolean('show', false)
            },
            containerWidth: {
                default: number('Header 內容寬度', 1085)
            },
            scroll: {
                default: number('捲軸滑動多少時顯示 Header', 122)
            },
            headerShadow: {
                default: boolean('Header 下方是否要陰影', false)
            },
            groupLogoImg: {
                default: text('家族LOGO 圖片來源', 'https://assets.presslogic.com/uat/presslogic-hk-hd/static/images/presslogic-logo.png')
            },
            groupLogoLink: {
                default: text('家族LOGO 連結', 'https://www.presslogic.com/')
            },
            groupLogoHeight: {
                default: number('家族LOGO 高度', 24)
            },
            groupLogoMargin: {
                default: number('家族LOGO 右邊間距', 20)
            },
            magazineLogoImg: {
                default: text('雜誌圖片來源', 'https://assets.girlstyle.com/girlstyle-tw/static/images/girls/logo-small.png?v=1')
            },
            magazineLogoLink: {
                default: text('雜誌圖片連結', '/')
            },
            bgColor: {
                default: color('Header 背景色', '#ffafa0')
            },
            height: {
                default: number('Header 高度', 56)
            },
            categories: {
                default: object('導覽列內的連結內容', categories)
            }
        },
        propsDescription: {
            CollapsingHeader: {
                show: 'Header 一開始是否顯示',
                containerWidth: 'Header 內容寬度',
                scroll: '捲軸滑動多少時顯示 Header',
                headerShadow: 'Header 下方是否要陰影',
                groupLogoImg: '家族LOGO 圖片來源',
                groupLogoLink: '家族LOGO 連結',
                groupLogoHeight: '家族LOGO 高度',
                groupLogoMargin: '家族LOGO 右邊間距',
                magazineLogoImg: '雜誌圖片來源',
                magazineLogoLink: '雜誌圖片連結',
                bgColor: 'Header 背景色',
                height: 'Header 高度',
                categories: '導覽列內的連結內容'
            }
        },
        template: `
        <div style="height: 900px">
        <CollapsingHeader
            :show='show'
            :containerWidth='containerWidth'
            :scroll='scroll'
            :headerShadow='headerShadow'
            :groupLogoImg='groupLogoImg'
            :groupLogoLink='groupLogoLink'
            :groupLogoHeight='groupLogoHeight'
            :groupLogoMargin='groupLogoMargin'
            :magazineLogoImg='magazineLogoImg'
            :magazineLogoLink='magazineLogoLink'
            :bgColor='bgColor'
            :height='height'
            :categories='categories'
        /></div>`
    }),
    {
        notes: 'CollapsingHeader for PressLogic',
        info: {
            summary: 'CollapsingHeader for PressLogic'
        }
    }
);
stories.add(
    'DropdownSelect',
    () => ({
        components: { DropdownSelect },
        props: {
            options: {
                default: object('下拉選單資料', options)
            },
            selected: {
                default: text('預設顯示文字', 'Hong Kong 香港')
            },
            groupLogoMargin: {
                default: number('家族Logo 右邊間距', 20)
            },
            groupLogoHeight: {
                default: number('家族Logo 高度', 24)
            },
            groupLogoImg: {
                default: text('家族Logo 圖片來源', 'https://assets.girlstyle.com/girlstyle-tw/static/images/presslogic-logo.png')
            },
            groupLogoLink: {
                default: text('家族Logo 連結', 'https://www.presslogic.com/')
            }
        },
        data() {
            return {
                currentSelected: this.selected
            };
        },
        propsDescription: {
            DropdownSelect: {
                options: '下拉選單資料',
                selected: '預設選項',
                customStyle: '客製化樣式(class name)',
                groupLogoMargin: '家族Logo 右邊間距',
                groupLogoHeight: '家族Logo 高度',
                groupLogoImg: '家族Logo 圖片來源',
                groupLogoLink: '家族Logo 連結'
            }
        },
        methods: {
            clickOption(value) {
                console.log(`選取了${value}選項`);
            }
        },
        template: `
        <div >
        <DropdownSelect style="height: 100px; background: rgb(255, 175, 160);"
            :options='options'
            :selected="currentSelected"
            @clickOption="clickOption"
            :groupLogoMargin="groupLogoMargin"
            :groupLogoHeight="groupLogoHeight"
            :groupLogoImg="groupLogoImg"
            :groupLogoLink="groupLogoLink"
        />
        </div>`
    }),
    {
        notes: 'Select 選擇器',
        info: {
            summary: '當選項過多時，使用下拉選擇器展示並選擇其內容'
        }
    }
);
