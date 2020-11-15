import { storiesOf } from '@storybook/vue';
import { withKnobs, color, object, select, boolean, number, text } from '@storybook/addon-knobs';
import PinnedPostCarousel from './PinnedPostCarousel/PinnedPostCarousel';
import ArticleCarousel from './ArticleCarousel/ArticleCarousel';
import ArticleCarouselFlexible from './ArticleCarouselFlexible/ArticleCarouselFlexible';
import CarouselForMainArticle from './CarouselForMainArticle/CarouselForMainArticle';
import CarouselTextAbove from './CarouselTextAbove/CarouselTextAbove';
import { string } from 'prop-types';

const stories = storiesOf('Presslogic | Carousel', module);
stories.addDecorator(withKnobs);

const OPTIONS = {
    'General (default)': '',
    'GS-TW': '/tw',
    'GS-SG': '/sg',
    'GS-IN': '/in',
    'GS-KR': '/kr',
    'GS-MY': '/my',
    'GS-US': '/us'
};
const DEFAULT_REGION = '';
const videoPosts = [{
    src: "443511013041192",
    title: "國民女神喬喬時裝周好夥伴 CHARLES & KEITH復古風與未來感大融合",
    url: "https://www.facebook.com/girlstyle.taiwan/videos/443511013041192/"
},
{
    src: "489786141843764",
    title: "孟耿如暢談內在美 爆出閨蜜瑤瑤大方送整套",
    url: "https://www.facebook.com/girlstyle.taiwan/videos/489786141843764/"
},
{
    src: "2408877379190511",
    title: "H&M STUDIO 19AW 時尚KOL Molly帶你逛",
    url: "https://www.facebook.com/girlstyle.taiwan/videos/2408877379190511/"
}
]
const POSTS = [{
    src: "428061614464366",
    title: "不怕冬日發福的飲料系唇膏！ NYX 專業彩妝皮革絨光霧感唇膏新色「草莓奶昔」超美 ，光聽色號每個都想嚐一口！",
    ratio: 16 / 9,
    url:
        "https://www.facebook.com/girlstyle.taiwan/videos/428061614464366/"
},
    {
        src: "550576192373187",
        title: "2019聖誕彩妝！MAC閃耀星塵12色迷你唇膏必收，蘭蔻冰雪奇蹟#06玫瑰奶酒美翻～",
        ratio: 4 / 3,
        url:
            "https://www.facebook.com/girlstyle.taiwan/videos/550576192373187/"
    },
    {
        cats: [
            {
                id: 20,
                name: "女生物。语",
                slug: "items"
            }
        ],
        guid: "http://girlstyle.com/my/?p=15372",
        id: 15372,
        image: "https://girlstyle-my.imgix.net/wp-content/uploads/2019/06/中国-starbucks-草泥马系列.jpg",
        post_date: "2019-06-15T16:07:27Z",
        terms: [20, 342, 662, 1042, 1702, 3479, 3480, 3490],
        title: "星爸爸又来抢钱啦！中国 Starbucks 第二波巨萌「草泥马」夏季系列 ，可爱逗趣的萌样瞬间融化你心赶走艳阳天 ♡",
        url: "/article/15372/星爸爸又来抢钱啦-中国-starbucks-第二波巨萌-草泥马-夏季系列-可爱逗趣的萌样瞬间融化你心赶走艳阳天"
    },
    {
        cats: [
            {
                id: 23,
                name: "流行热话",
                posts: [],
                slug: "hottopics"
            }
        ],
        guid: "http://girlstyle.com/my/?p=15022",
        id: 15022,
        image: "https://girlstyle-my.imgix.net/wp-content/uploads/2019/06/何炅语录0625.jpg",
        post_date: "2019-06-25T11:39:41Z",
        terms: [23, 2377, 2477],
        title: "「人总要学着穿过迷雾，独自长大」，成为光芒万丈的你！何炅老师的8句「治愈系语录」，让你那疲惫的身心感受温暖力量～",
        url: "/article/15022/人总要学着穿过迷雾-独自长大-成为光芒万丈的你-何炅老师的8句-治愈系语录-让你那疲惫的身心感受温暖力量"
    },
    {
        cats: [
            {
                id: 20,
                name: "女生物。语",
                slug: "items"
            }
        ],
        guid: "http://girlstyle.com/my/?p=15372",
        id: 12345,
        image: "https://girlstyle-my.imgix.net/wp-content/uploads/2019/06/中国-starbucks-草泥马系列.jpg",
        post_date: "2019-06-15T16:07:27Z",
        terms: [20, 342, 662, 1042, 1702, 3479, 3480, 3490],
        title: "星爸爸又来抢钱啦！中国 Starbucks 第二波巨萌「草泥马」夏季系列 ，可爱逗趣的萌样瞬间融化你心赶走艳阳天 ♡",
        url: "/article/15372/星爸爸又来抢钱啦-中国-starbucks-第二波巨萌-草泥马-夏季系列-可爱逗趣的萌样瞬间融化你心赶走艳阳天"
    },
    {
        cats: [
            {
                id: 23,
                name: "流行热话",
                posts: [],
                slug: "hottopics"
            }
        ],
        guid: "http://girlstyle.com/my/?p=15022",
        id: 12346,
        image: "https://girlstyle-my.imgix.net/wp-content/uploads/2019/06/何炅语录0625.jpg",
        post_date: "2019-06-25T11:39:41Z",
        terms: [23, 2377, 2477],
        title: "「人总要学着穿过迷雾，独自长大」，成为光芒万丈的你！何炅老师的8句「治愈系语录」，让你那疲惫的身心感受温暖力量～",
        url: "/article/15022/人总要学着穿过迷雾-独自长大-成为光芒万丈的你-何炅老师的8句-治愈系语录-让你那疲惫的身心感受温暖力量"
    },
    {
        cats: [
            {
                id: 20,
                name: "女生物。语",
                slug: "items"
            }
        ],
        guid: "http://girlstyle.com/my/?p=15372",
        id: 13265,
        image: "https://girlstyle-my.imgix.net/wp-content/uploads/2019/06/中国-starbucks-草泥马系列.jpg",
        post_date: "2019-06-15T16:07:27Z",
        terms: [20, 342, 662, 1042, 1702, 3479, 3480, 3490],
        title: "星爸爸又来抢钱啦！中国 Starbucks 第二波巨萌「草泥马」夏季系列 ，可爱逗趣的萌样瞬间融化你心赶走艳阳天 ♡",
        url: "/article/15372/星爸爸又来抢钱啦-中国-starbucks-第二波巨萌-草泥马-夏季系列-可爱逗趣的萌样瞬间融化你心赶走艳阳天"
    },
    {
        cats: [
            {
                id: 23,
                name: "流行热话",
                posts: [],
                slug: "hottopics"
            }
        ],
        guid: "http://girlstyle.com/my/?p=15022",
        id: 65022,
        image: "https://girlstyle-my.imgix.net/wp-content/uploads/2019/06/何炅语录0625.jpg",
        post_date: "2019-06-25T11:39:41Z",
        terms: [23, 2377, 2477],
        title: "「人总要学着穿过迷雾，独自长大」，成为光芒万丈的你！何炅老师的8句「治愈系语录」，让你那疲惫的身心感受温暖力量～",
        url: "/article/15022/人总要学着穿过迷雾-独自长大-成为光芒万丈的你-何炅老师的8句-治愈系语录-让你那疲惫的身心感受温暖力量"
    },
]
const carouselTextAbovePosts = [
    {
        image: "https://assets.girlstyle.com/girlstyle-tw/static/images/event/201910_tw/20190912%20-6919-j.jpg",
        images: [
            "https://assets.girlstyle.com/girlstyle-tw/static/images/event/201910_tw/20190912%20-6919-j.jpg",
            "https://assets.girlstyle.com/girlstyle-tw/static/images/event/201910_tw/img_02.jpg"
        ],
        label: "06.Oct.2019",
        title:
            "《與惡》李大芝化身仙女！注目新銳演員「陳妤」用 3 種「色彩穿搭」，訴說最真誠的感情觀與秋冬趨勢",
        text:
            "從台劇《我們與惡的距離》李大芝一角翻紅，大眾對陳妤的印象，似乎大都停留在戲劇中那個嬌小卻充滿韌性的堅強形象，一直帶給人中性印象的她，這次配合女生日常 10 月份的大主題「100種說愛」，不僅分享了她內心最真誠的感情觀，我們也透過象徵對愛勇往直前的「紅色」、對感情抱有單純浪漫的「白色」，以及像是愛中溫暖陪伴...",
        caption: "Caption",
        url:
            "https://girlstyle.com/tw/article/127246/%E8%88%87%E6%83%A1-%E6%9D%8E%E5%A4%A7%E8%8A%9D%E5%8C%96%E8%BA%AB%E4%BB%99%E5%A5%B3-%E6%B3%A8%E7%9B%AE%E6%96%B0%E9%8A%B3%E6%BC%94%E5%93%A1-%E9%99%B3%E5%A6%A4-%E7%94%A8-3-%E7%A8%AE-%E8%89%B2%E5%BD%A9%E7%A9%BF%E6%90%AD-%E8%A8%B4%E8%AA%AA%E6%9C%80%E7%9C%9F%E8%AA%A0%E7%9A%84%E6%84%9F%E6%83%85%E8%A7%80%E8%88%87%E7%A7%8B%E5%86%AC%E8%B6%A8%E5%8B%A2"
    },
    {
        image: "https://assets.girlstyle.com/girlstyle-tw/static/images/event/201910_tw/img_02.jpg",
        label: "01.Oct.2019",
        title:
            "《與惡》陳妤最大膽告白：「你什麼事都不用做，只要做你正在努力的事情，我會愛著你。」",
        text:
            "陳妤，妳是知道她的。《我們與惡的距離》的李大芝、《戀愛沙塵暴》的巴柔萌妹，23歲就奪金被封新進演員，在《與惡》加持下一夕爆紅，卻與今年的金鐘擦肩而過。失落總是有，但陳妤決定不走紅毯、不爭鏡頭，靜靜恭賀、跟劇組同享殊榮。但她絕對不是那種願意甘心後退的人，她腦袋中總在想、隨時在想，怎麼樣持續前進。",
        url:
            "https://girlstyle.com/tw/article/125186/%E8%88%87%E6%83%A1-%E9%99%B3%E5%A6%A4%E6%9C%80%E5%A4%A7%E8%86%BD%E5%91%8A%E7%99%BD-%E4%BD%A0%E4%BB%80%E9%BA%BC%E4%BA%8B%E9%83%BD%E4%B8%8D%E7%94%A8%E5%81%9A-%E5%8F%AA%E8%A6%81%E5%81%9A%E4%BD%A0%E6%AD%A3%E5%9C%A8%E5%8A%AA%E5%8A%9B%E7%9A%84%E4%BA%8B%E6%83%85-%E6%88%91%E6%9C%83%E6%84%9B%E8%91%97%E4%BD%A0"
    }
]
stories.add(
    'PinnedPostCarousel',
    () => ({
        components: { PinnedPostCarousel },
        props: {
            // Data
            device: {
                default: select('選擇裝置', { '桌機': 'desktop', '手機': 'mobile' }, 'desktop')
            },
            regionPath: {
                default: select('GirlStyle 區域路徑', OPTIONS, DEFAULT_REGION)
            },
            posts: {
                default: object('文章內容', POSTS)
            },

            // Style
            mainColor: {
                default: color('識別色', '#ffafa0')
            },
            isSwiperPaginationShowing: {
                default: boolean('顯示頁籤', true)
            },

            // Animate
            isInfiniteLoop: {
                default: boolean('無窮循環', true)
            },
            isAutoplay: {
                default: boolean('自動播放', true)
            },
            autoplayDelay: {
                default: number('自動播放延遲（ms）', 5000)
            },
            speedWhenSwitchView: {
                default: number('分頁切換速度延遲（ms）', 1000)
            }
        },
        propsDescription: {
            PinnedPostCarousel: {
                // These description will appear in `description` column in props table
                device: '裝置',
                regionPath: 'GirlStyle 區域路徑',
                posts: '文章內容',
                mainColor: '識別色',
                isSwiperPaginationShowing: '顯示頁籤',
                isInfiniteLoop: '無窮循環',
                isAutoplay: '自動播放',
                autoplayDelay: '自動播放延遲（ms）',
                speedWhenSwitchView: '分頁切換速度延遲（ms）'
            }
        },
        template:
            `<PinnedPostCarousel
                :device="device"
                :regionPath="regionPath"
                :posts="posts"
                :mainColor="mainColor"
                :isSwiperPaginationShowing="isSwiperPaginationShowing"
                :isInfiniteLoop="isInfiniteLoop"
                :isAutoplay="isAutoplay"
                :autoplayDelay="autoplayDelay"
                :speedWhenSwitchView="speedWhenSwitchView"
            />`,
    }),
    {
        notes: `
            [ 版本紀錄 ]
            1.0.0 版

            [ 注意事項 ]
            1. 安裝此元件前須確認該專案已有 'vue-awesome-swiper' 並從 vue-awesome-swiper/dist/ssr import VueAwesomeSwiper

            [ 事件方法 ]
            
            作者：Tim
        `,
        info: {
            summary: 'PinnedPostCarousel for index'
        }
    }
);

stories.add(
    'ArticleCarousel',
    () => ({
        components: { ArticleCarousel },
        props: {
            // Data
            device: {
                default: select('選擇裝置', { '桌機': 'desktop', '手機': 'mobile' }, 'desktop')
            },
            regionPath: {
                default: select('GirlStyle 區域路徑', OPTIONS, DEFAULT_REGION)
            },
            posts: {
                default: object('文章內容', POSTS)
            },
            isNavShowing: {
                default: boolean('顯示導覽按鈕', true)
            },

            // Style
            mainColor: {
                default: color('識別色', '#ffafa0')
            },
            spaceBetweenSlide: {
                default: number('Slide 的間距（px）', 20)
            },
            articleMaxWidth: {
                default: number('Article 寬度（px）', 270)
            },

            // Animate
            isInfiniteLoop: {
                default: boolean('無窮循環', false)
            },
            isAutoplay: {
                default: boolean('自動播放', false)
            },
            autoplayDelay: {
                default: number('自動播放延遲（ms）', 5000)
            },
            speedWhenSwitchView: {
                default: number('分頁切換速度延遲（ms）', 1000)
            }
        },
        propsDescription: {
            ArticleCarousel: {
                // These description will appear in `description` column in props table
                device: '裝置',
                regionPath: 'GirlStyle 區域路徑',
                posts: '文章內容',
                isNavShowing: '顯示導覽按鈕',
                mainColor: '識別色',
                spaceBetweenSlide: 'Slide 的間距（px）',
                maxWidth: 'Article 寬度',
                isInfiniteLoop: '無窮循環',
                isAutoplay: '自動播放',
                autoplayDelay: '自動播放延遲（ms）',
                speedWhenSwitchView: '分頁切換速度延遲（ms）'
            }
        },
        template:
            `<ArticleCarousel
                :device="device"
                :regionPath="regionPath"
                :posts="posts"
                :isNavShowing="isNavShowing"
                :mainColor="mainColor"
                :spaceBetweenSlide="spaceBetweenSlide"
                :maxWidth="articleMaxWidth"
                :isInfiniteLoop="isInfiniteLoop"
                :isAutoplay="isAutoplay"
                :autoplayDelay="autoplayDelay"
                :speedWhenSwitchView="speedWhenSwitchView"
            />`,
    }),
    {
        notes: `
            [ 版本紀錄 ]
            1.0.0 版

            [ 注意事項 ]
            1. 安裝此元件前須確認該專案已有 'vue-awesome-swiper' 並從 vue-awesome-swiper/dist/ssr import VueAwesomeSwiper

            [ 事件方法 ]
            無
            
            作者：Tim
        `,
        info: {
            summary: 'ArticleCarousel for 404 page'
        }
    }
);
stories.add(
    'ArticleCarouselFlexible',
    () => ({
        components: { ArticleCarouselFlexible },
        props: {
            // Data
            device: {
                default: select('選擇裝置', { '桌機': 'desktop', '手機': 'mobile' }, 'desktop')
            },
            type: {
                default: text('媒體類型 圖片or影片', 'image')
            },
            regionPath: {
                default: select('GirlStyle 區域路徑', OPTIONS, DEFAULT_REGION)
            },
            posts: {
                default: object('文章內容', POSTS)
            },
            isNavShowing: {
                default: boolean('顯示導覽按鈕', true)
            },

            // Style
            mainColor: {
                default: color('識別色', '#ffafa0')
            },
            spaceBetweenSlide: {
                default: number('Slide 的間距（px）', 20)
            },
            articleMaxWidth: {
                default: text('Article 寬度（px）', 360)
            },
            bgColor: {
                default: color('文字背景色', '#FFFFFF')
            },
            textColor: {
                default: color('文字顏色', '#AAAAAA')
            },
            frameRatio: {
                default: number('圖片/影片框比例', 4/3)
            },
            // Animate
            isInfiniteLoop: {
                default: boolean('無窮循環', false)
            },
            showPagination: {
                default: boolean('顯示點點', true)
            },
            isAutoplay: {
                default: boolean('自動播放', false)
            },
            autoplayDelay: {
                default: number('自動播放延遲（ms）', 5000)
            },
            speedWhenSwitchView: {
                default: number('分頁切換速度延遲（ms）', 1000)
            },
            slidesPerViewSlide: {
                default: number('一次顯示多少Slide (可小數點)', 2.5)
            },
            containerMaxWidth: {
                default: number('總寬度', 850)
            },
            shadow: {
                default: boolean('陰影設計', true)
            }
        },
        template:
            `<ArticleCarouselFlexible
                :device="device"
                :regionPath="regionPath"
                :posts="posts"
                :isNavShowing="isNavShowing"
                :mainColor="mainColor"
                :showPagination="showPagination"
                :spaceBetweenSlide="spaceBetweenSlide"
                :maxWidth="articleMaxWidth"
                :containerMaxWidth="containerMaxWidth"
                :isInfiniteLoop="isInfiniteLoop"
                :isAutoplay="isAutoplay"
                :autoplayDelay="autoplayDelay"
                :speedWhenSwitchView="speedWhenSwitchView"
                :slidesPerViewSlide="slidesPerViewSlide"
                :shadow="shadow"
                :type="type"
                :frameRatio="frameRatio"
                :button="'IconButton'"
            ><!--<template v-slot:default="slotProps">{{slotProps.post.id}}</template>--></ArticleCarouselFlexible>
            `,
    }), {
    notes: `
            [ 版本紀錄 ]
            1.0.0 版

            [ 注意事項 ]
            1. 安裝此元件前須確認該專案已有 'vue-awesome-swiper' 並從 vue-awesome-swiper/dist/ssr import VueAwesomeSwiper

            [ 事件方法 ]
            無
            
            作者：Tim
        `,
    info: {
        summary: 'ArticleCarousel for 404 page'
    }
}
),
    stories.add(
        'CarouselForMainArticle',
        () => ({
            components: { CarouselForMainArticle },
            props: {
                // Data
                device: {
                    default: select('選擇裝置', { '桌機': 'desktop', '手機': 'mobile' }, 'desktop')
                },
                regionPath: {
                    default: select('GirlStyle 區域路徑', OPTIONS, DEFAULT_REGION)
                },
                posts: {
                    default: object('文章內容', POSTS)
                },
                isNavShowing: {
                    default: boolean('顯示導覽按鈕', true)
                },

                // Style
                mainColor: {
                    default: color('識別色', '#ffafa0')
                },
                spaceBetweenSlide: {
                    default: number('Slide 的間距（px）', 20)
                },
                articleMaxWidth: {
                    default: number('Article 寬度（px）', 270)
                },

                // Animate
                isInfiniteLoop: {
                    default: boolean('無窮循環', false)
                },
                isAutoplay: {
                    default: boolean('自動播放', false)
                },
                autoplayDelay: {
                    default: number('自動播放延遲（ms）', 5000)
                },
                speedWhenSwitchView: {
                    default: number('分頁切換速度延遲（ms）', 1000)
                }
            },
            propsDescription: {
                CarouselForMainArticle: {
                    // These description will appear in `description` column in props table
                    device: '裝置',
                    regionPath: 'GirlStyle 區域路徑',
                    posts: '文章內容',
                    isNavShowing: '顯示導覽按鈕',
                    mainColor: '識別色',
                    spaceBetweenSlide: 'Slide 的間距（px）',
                    maxWidth: 'Article 寬度',
                    isInfiniteLoop: '無窮循環',
                    isAutoplay: '自動播放',
                    autoplayDelay: '自動播放延遲（ms）',
                    speedWhenSwitchView: '分頁切換速度延遲（ms）'
                }
            },
            template:
                `<CarouselForMainArticle
                :device="device"
                :regionPath="regionPath"
                :posts="posts"
                :isNavShowing="isNavShowing"
                :mainColor="mainColor"
                :spaceBetweenSlide="spaceBetweenSlide"
                :maxWidth="articleMaxWidth"
                :isInfiniteLoop="isInfiniteLoop"
                :isAutoplay="isAutoplay"
                :autoplayDelay="autoplayDelay"
                :speedWhenSwitchView="speedWhenSwitchView"
            />`,
        }),
        {
            notes: `
            [ 版本紀錄 ]
            1.0.0 版

            [ 注意事項 ]
            1. 安裝此元件前須確認該專案已有 'vue-awesome-swiper' 並從 vue-awesome-swiper/dist/ssr import VueAwesomeSwiper

            [ 事件方法 ]
            無
            
            作者：Tim
        `,
            info: {
                summary: 'Carousel For MainArticle'
            }
        }
    );
stories.add(
    'CarouselTextAbove',
    () => ({
        components: { CarouselTextAbove },
        props: {
            // Data
            device: {
                default: select('選擇裝置', { '桌機': 'desktop', '手機': 'mobile' }, 'desktop')
            },
            regionPath: {
                default: select('GirlStyle 區域路徑', OPTIONS, DEFAULT_REGION)
            },
            posts: {
                default: object('文章內容', carouselTextAbovePosts)
            },
            color: {
                default: text('文字顏色', '#ffffff')
            },
            bgcolor: {
                default: text('背景顏色', '#ffffff'/*'#d9ab82'*/)
            },
            textbgcolor: {
                default: text('文字背景顏色', '#af2d27')
            },
            textbgcolor2: {
                default: text('文字背景顏色2', '#1d0000')
            },
            buttonArrowColor: {
                default: text('箭頭顏色', '#ffffff')
            },
            labelColor:{
                default: text('標籤顏色', '#000000')
            },
            width: {
                default: text('文字方塊寬度', '600px')
            },
            height: {
                default: text('文字方塊高度', '480px')
            },
            floating: {
                default: text('滾動視差圖片', 'https://assets.girlstyle.com/girlstyle-tw/static/images/event/201910_tw/img_03.png')
            }
        },
        propsDescription: {
            CarouselTextAbove: {
                // These description will appear in `description` column in props table
                posts: '文章內容'
            }
        },
        template:
            `<CarouselTextAbove
                v-bind="{
                    posts,color,bgcolor,textbgcolor,textbgcolor2,buttonArrowColor,labelColor,width,height,floating
                }"
            />`,
    }),
    {
        notes: `
            [ 版本紀錄 ]
            1.0.0 版

            [ 注意事項 ]
            1. 安裝此元件前須確認該專案已有 'vue-awesome-swiper' 並從 vue-awesome-swiper/dist/ssr import VueAwesomeSwiper

            [ 事件方法 ]
            無
            
            作者：Tim
        `,
        info: {
            summary: 'Carousel For MainArticle'
        }
    }
);
