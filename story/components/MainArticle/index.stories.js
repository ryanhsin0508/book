import { storiesOf } from '@storybook/vue';
import { withKnobs, color, number, boolean, text, object, select } from '@storybook/addon-knobs';
import MainArticle from './MainArticle';

const stories = storiesOf('Presslogic | Article / MainArticle', module);
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
const page = {
    id: "606485276170272",
    color: "#ffafa0",
    ga: "UA-75313505-1",
    name: "GirlStyle 女生日常",
    slug: "girls",
    url: "http://pretty.local.com:3000",
    metaUrl: "http://localhost:3000",
    s3: "http://dfi5wu8thl82p.cloudfront.net/",
    cdn: "https://girls-image.presslogic.com/",
    youtube: "https://www.youtube.com/channel/UCVfM2vFTKFEPwLAB1LELtFw",
    fb: "https://www.facebook.com/presslogic.girlstyle/",
    ig: "https://www.instagram.com/girlstyle.presslogic/",
    ig_name: "girlstyle.presslogic",
    title: "PressLogic - GirlStyle女生日常 | 最受女性歡迎的網上雜誌",
    description: "與妳們分享生活、美容、瘦身、時尚和戀愛等，一切妳愛看的資訊。",
    ogimage: "/images/girls/ogimage.png",
    group: 1,
    path: "",
    search: "girls",
    country_code: "HK",
    ad_slug: "girls",
    favicon: "favicon.png",
    author: "GirlStyle",
    copyright: "PressLogic GirlStyle",
    static_host: "",
    env: "production",
    subdomain: "localhost:3000",
    post_id: "",
    inskin_desktop_yes: "true",
    inskin_mobile_yes: "false",
    ad_demo_key: "ad-demo",
    ad_demo_val: " ",
    isCategories: false,
    category: null,
    enabledAD: true
}
const categories = [{
    name: "Trendy 人氣熱話",
    slug: "trendy",
    id: 2, subcategories: [], posts: [{
        id: 291050, post_date: "2019-04-09T08:27:37Z",
        title: "蘋果西打恐下市",
        guid: "https://pretty.presslogic.com/?p=291050",
        term: 2, url: "/article/291050/%E8%98%8B%E6%9E%9C%E8%A5%BF%E6%89%93%E6%81%90%E4%B8%8B%E5%B8%82",
        image: "https://pretty.imgix.net/wp-content/uploads/2019/04/039540a4b28099b091ac14b21bf701be.jpg"
    }, {
        id: 291045, post_date: "2019-04-09T07:37:27Z",
        title: "身高就是距離！常吃這兩類食物　當心小孩長不高",
        guid: "https://pretty.presslogic.com/?p=291045",
        term: 2, url: "/article/291045/%E8%BA%AB%E9%AB%98%E5%B0%B1%E6%98%AF%E8%B7%9D%E9%9B%A2-%E5%B8%B8%E5%90%83%E9%80%99%E5%85%A9%E9%A1%9E%E9%A3%9F%E7%89%A9%E3%80%80%E7%95%B6%E5%BF%83%E5%B0%8F%E5%AD%A9%E9%95%B7%E4%B8%8D%E9%AB%98",
        image: "https://pretty.imgix.net/wp-content/uploads/2019/04/1865596-XXL2.jpg"
    }, {
        id: 291041, post_date: "2019-04-09T06:06:47Z",
        title: "翻盤！每天小酌無法防中風，光這樣喝中風率就「暴增35%」",
        guid: "https://pretty.presslogic.com/?p=291041",
        term: 2, url: "/article/291041/%E7%BF%BB%E7%9B%A4-%E6%AF%8F%E5%A4%A9%E5%B0%8F%E9%85%8C%E7%84%A1%E6%B3%95%E9%98%B2%E4%B8%AD%E9%A2%A8-%E5%85%89%E9%80%99%E6%A8%A3%E5%96%9D%E4%B8%AD%E9%A2%A8%E7%8E%87%E5%B0%B1-%E6%9A%B4%E5%A2%9E35",
        image: "https://pretty.imgix.net/wp-content/uploads/2019/04/cbe2e0a931cc49b009a245380bf29004.jpg"
    }, {
        id: 290804, post_date: "2019-03-26T05:26:17Z",
        title: "18歲仲係小童？20多歲較易患各種精神病，劍橋教授：「到30歲先算係成年人！」",
        guid: "https://pretty.presslogic.com/?p=290804",
        term: 2, url: "/article/290804/18%E6%AD%B2%E4%BB%B2%E4%BF%82%E5%B0%8F%E7%AB%A5-20%E5%A4%9A%E6%AD%B2%E8%BC%83%E6%98%93%E6%82%A3%E5%90%84%E7%A8%AE%E7%B2%BE%E7%A5%9E%E7%97%85-%E5%8A%8D%E6%A9%8B%E6%95%99%E6%8E%88-%E5%88%B030%E6%AD%B2%E5%85%88%E7%AE%97%E4%BF%82%E6%88%90%E5%B9%B4%E4%BA%BA",
        image: "https://pretty.imgix.net/wp-content/uploads/2019/03/Cover__NEWLogotemplate_NEW_V2sssadult.jpg"
    }]
}, {
    name: "Beauty 美妝",
    slug: "beauty",
    id: 1, subcategories: [{
        name: "Hair 髮型",
        slug: "hair",
        id: 5
    }, {
        name: "Make Up 化妝",
        slug: "make-up",
        id: 3
    }, {
        name: "Nail 美甲",
        slug: "nail",
        id: 6
    }, {
        name: "Skincare 護膚",
        slug: "skincare",
        id: 4
    }]
}, {
    name: "Fashion 時尚",
    slug: "fashion",
    id: 7, subcategories: [{
        name: "Accessories 配件",
        slug: "accessories",
        id: 9
    }, {
        name: "Shoes 鞋",
        slug: "shoes",
        id: 10
    }, {
        name: "Styling 穿搭",
        slug: "styling",
        id: 8
    }, {
        name: "Tattoo 刺青",
        slug: "tattoo",
        id: 1569
    }]
}, {
    name: "Lifestyle 生活",
    slug: "lifestyle",
    id: 11, subcategories: [{
        name: "Girl's Talk 女生物。語",
        slug: "girls-talk",
        id: 13
    }, {
        name: "Living 家居",
        slug: "living",
        id: 14
    }, {
        name: "Travel 旅遊",
        slug: "travel",
        id: 12
    }, {
        name: "Food 吃貨",
        slug: "food",
        id: 24
    }, {
        name: "Photography 攝影",
        slug: "photography",
        id: 1567
    }, {
        name: "Bestie 閨蜜",
        slug: "bestie",
        id: 1568
    }]
}, {
    name: "Fitness 瘦身",
    slug: "fitness",
    id: 15, subcategories: []
}, {
    name: "Love 戀愛",
    slug: "love",
    id: 16, subcategories: []
}, {
    name: "Videos 影片",
    slug: "videos",
    id: 3151, subcategories: []
}, {
    name: "Bloggers 專欄",
    slug: "bloggers",
    id: 3286, subcategories: []
}, {
    name: "秋冬護膚攻略",
    slug: "aw-skincare",
    id: 13041, subcategories: []
}]
const HOTTEST = [
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



const POST = {
    id: 321152,
    post_date: '2019-07-10T04:43:14Z',
    post_content: '<p>ColourPop 的彩妝絕對是不少小資女的恩物！ 雖然價錢相當親民，不過內涵絕對不將就，而且每次的包裝都美到跟它的價錢不符啊～（太可惡）從經常賣到缺貨的眼影盤，到大獲好評的 Highlighters 和唇妝產品，顯色度持久度也非常不賴，可說是CP值最高、最值得入手的歐美彩妝品牌之一！</p>\n\n<p><img class="alignnone size-full wp-image-321204" src="https://pretty.imgix.net/wp-content/uploads/2019/07/224.jpg" alt="224" width="557" height="591" /></p>\n<p>早前才剛剛乘著夏天的熱浪推出全新「CALIFORNIA LOVE」眼影盤，以暖調的橘黃色、百搭大地色為主調（根本就是正中warm tone控的心臟吧！），齊集霧面、珠光及亮片三款不同的眼影質感，是實用度很高的一款 Palette！</p>\n<p><img class="alignnone size-full wp-image-321205" src="https://pretty.imgix.net/wp-content/uploads/2019/07/3244.jpg" alt="3244" width="595" height="594" /></p>\n<p>這次又來燒大家了！今次登場的是每個女生都不能抵抗的唇膏～先看看今次的包裝！！以充滿香甜氣息的夏日水果為靈感，分別有西瓜、甜石榴、櫻桃、火龍果、水蜜桃及椰子，走小清新包裝可愛之中又不失精緻感～</p>\n<p><img class="alignnone size-full wp-image-321167" src="https://pretty.imgix.net/wp-content/uploads/2019/07/65303115_857241581310927_7525661207618826319_n.jpg" alt="65303115_857241581310927_7525661207618826319_n" width="1000" height="1000" /></p>\n<p>一套入面有兩支新系列的 Just a tint 唇膏，童趣的蠟筆狀唇膏設計走簡約風，筆身以唇膏配色為主調，看起來絕對沒有廉價感～而且今次的配色多數以今年流行的紅棕調為主，變化出不同深淺的酒紅、棕紅、土色等配色，太燒了！</p>\n<p><img class="alignnone size-full wp-image-321165" src="https://pretty.imgix.net/wp-content/uploads/2019/07/66024323_209605423349027_3112068576065149640_n.jpg" alt="66024323_209605423349027_3112068576065149640_n" width="900" height="900" /></p>\n<h3><strong>#COCONUTS ABOUT YOU</strong></h3>\n<p>這個 Just A Tint 系列的妝效為 Sheer 質感，塗上後帶有微微的光澤感，輕盈透薄之餘顯色度卻出奇地好！小編最心心眼的就是這個COCONUTS ABOUT YOU配色，超美的帶棕感南瓜色調配得超有質感的好嗎～</p>\n<p><img class="alignnone size-full wp-image-321171" src="https://pretty.imgix.net/wp-content/uploads/2019/07/65894710_148072546259782_3085012059050642907_n.jpg" alt="65894710_148072546259782_3085012059050642907_n" width="1000" height="1000" /></p>\n<h3><strong>#YOU\'RE A PEACH</strong></h3>\n<p>來到水蜜桃款，同樣也是以混合了棕調的橘色為主調，一個偏橘、一個偏乾燥玫瑰調，絕對是CP值高的選擇！</p>\n<p><img class="alignnone size-full wp-image-321173" src="https://pretty.imgix.net/wp-content/uploads/2019/07/67123091_1083084451887175_2596754265384201491_n.jpg" alt="67123091_1083084451887175_2596754265384201491_n" width="1000" height="1000" /></p>\n<h3><strong>#CHERRY &amp; BRIGHT</strong></h3>\n<p>喜歡莓果色調的朋友，這盒CHERRY &amp; BRIGHT竟超適合你啦！配色就真的好像微燻的櫻桃莓紅色一般，浪漫又醉人～</p>\n<p><img class="alignnone size-full wp-image-321169" src="https://pretty.imgix.net/wp-content/uploads/2019/07/65865162_587436578326748_3876826077023577670_n.jpg" alt="65865162_587436578326748_3876826077023577670_n" width="1000" height="1000" /></p>\n<h3><strong>#GIMME A SLICE</strong></h3>\n<p>夏天當然要來一口冰涼的西瓜～西瓜紅向來也是一個超顯白的唇色，夏日的妝容只要塗上它就立馬顯氣息十倍！</p>\n<p><img class="alignnone size-full wp-image-321168" src="https://pretty.imgix.net/wp-content/uploads/2019/07/65564852_181018376262863_5735629958979114182_n.jpg" alt="65564852_181018376262863_5735629958979114182_n" width="1000" height="1000" /></p>\n<h3><strong>#DRAGON MY HEART AROUND</strong></h3>\n<p>只能說，這個配色真的很「火龍果」啦（笑）！特別是Treasure Island那個帶有紫紅調的配色，真的就好像是火龍果果肉一樣啊！同系統配上較低調THE STRAND淺裸粉色，拿來做咬唇或花瓣唇也OK！</p>\n<p><img class="alignnone size-full wp-image-321170" src="https://pretty.imgix.net/wp-content/uploads/2019/07/66476285_1034236710242475_4815710799687834566_n.jpg" alt="66476285_1034236710242475_4815710799687834566_n" width="1000" height="1000" /></p>\n<h3><strong>#GUAVA HAVE IT</strong></h3>\n<p>平時喜歡化淡妝的朋友，這盒GUAVA HAVE IT的甜美配色一定很合你口味！以淡淡櫻粉色搭配鮮艷桃紅色，看起來就是超適合夏日的啊！</p>\n<p><img class="alignnone size-full wp-image-321172" src="https://pretty.imgix.net/wp-content/uploads/2019/07/66419661_671762686675234_6257310433288520178_n.jpg" alt="66419661_671762686675234_6257310433288520178_n" width="1000" height="1000" /></p>\n<p>看！這排試色會不會太療癒了！重點是他們的定價一盒只是 $7 美元，相等於 54 港幣而已，根本就是佛心價啊～</p>\n<p><img class="alignnone size-full wp-image-321174" src="https://pretty.imgix.net/wp-content/uploads/2019/07/66376587_583402438733481_3595247587803401610_n.jpg" alt="66376587_583402438733481_3595247587803401610_n" width="1000" height="1000" /></p>\n<p>真的包色也不心痛就是這種！！開搶了啦～</p>\n<p><img class="alignnone size-full wp-image-321166" src="https://pretty.imgix.net/wp-content/uploads/2019/07/66959802_430104147838388_578938387754667889_n.jpg" alt="66959802_430104147838388_578938387754667889_n" width="900" height="900" /></p>\n<p>根據官方的消息，這個系列將會於 7 月 11 號 正式開賣，想入手的粉絲記得要留意好官網了！</p>\n<p><img class="alignnone size-full wp-image-321245" src="https://pretty.imgix.net/wp-content/uploads/2019/07/432521.jpg" alt="43252" width="593" height="592" /></p>\n<p><a href="https://pretty.presslogic.com/article/315561/%E5%BE%AE%E6%9A%96%E5%A4%95%E9%99%BD%E6%A9%98%E9%BB%83%E8%AA%BF-%E5%BF%85%E6%94%B6colourpop%E5%85%A8%E6%96%B0-%E5%8A%A0%E6%B4%B2%E7%8B%82%E7%86%B1-%E7%9C%BC%E5%BD%B1%E7%9B%A4-%E6%9A%88%E6%9F%93%E5%87%BA%E8%90%BD%E6%97%A5%E9%A4%98%E6%9A%89%E9%86%89%E4%BA%BA%E8%89%B2%E8%AA%BF" target="_blank">✨微暖夕陽橘黃調！必收ColourPop全新「加洲狂熱」眼影盤，暈染出落日餘暉醉人色調！</a></p>\n<p><a href="https://pretty.presslogic.com/article/315561/%E5%BE%AE%E6%9A%96%E5%A4%95%E9%99%BD%E6%A9%98%E9%BB%83%E8%AA%BF-%E5%BF%85%E6%94%B6colourpop%E5%85%A8%E6%96%B0-%E5%8A%A0%E6%B4%B2%E7%8B%82%E7%86%B1-%E7%9C%BC%E5%BD%B1%E7%9B%A4-%E6%9A%88%E6%9F%93%E5%87%BA%E8%90%BD%E6%97%A5%E9%A4%98%E6%9A%89%E9%86%89%E4%BA%BA%E8%89%B2%E8%AA%BF" target="_blank">✨</a><a href="https://pretty.presslogic.com/article/314361/%E7%B7%A0%E9%80%A0%E5%89%94%E9%80%8F%E7%8E%BB%E7%92%83%E5%94%87-%E5%BF%85%E8%B2%B7colourpop-fudg%E2%80%99d%E7%84%A6%E7%B3%96%E5%A5%B6%E8%8C%B6%E8%89%B2%E5%94%87%E8%9C%9C-%E7%B5%95%E7%BE%8E%E8%89%B2%E8%AA%BF%E7%94%A8%E9%81%8E%E9%83%BD%E5%A4%A7%E8%AE%9A" target="_blank">締造剔透玻璃唇！必買ColourPop「#Fudg’d焦糖奶茶色唇蜜」，絕美色調用過都大讚！</a></p>\n<p><a href="https://pretty.presslogic.com/article/315561/%E5%BE%AE%E6%9A%96%E5%A4%95%E9%99%BD%E6%A9%98%E9%BB%83%E8%AA%BF-%E5%BF%85%E6%94%B6colourpop%E5%85%A8%E6%96%B0-%E5%8A%A0%E6%B4%B2%E7%8B%82%E7%86%B1-%E7%9C%BC%E5%BD%B1%E7%9B%A4-%E6%9A%88%E6%9F%93%E5%87%BA%E8%90%BD%E6%97%A5%E9%A4%98%E6%9A%89%E9%86%89%E4%BA%BA%E8%89%B2%E8%AA%BF" target="_blank">✨</a><a href="https://pretty.presslogic.com/article/309399/%E5%8C%85%E8%A3%9D%E9%85%8D%E8%89%B2%E9%9D%9A%E5%88%B0%E7%99%B2-colourpop%E8%8A%B1%E7%B3%BB%E8%83%AD%E8%84%82stick%E5%A5%97%E8%A3%9D-%E6%B3%B0%E5%A5%B6%E8%89%B2-%E4%B9%BE%E7%87%A5%E7%8E%AB%E7%91%B0%E8%89%B2%E9%80%9A%E9%80%9A%E6%9C%89%E9%BD%8A" target="_blank">包裝配色靚到癲！Colourpop花系胭脂Stick套裝，泰奶色、乾燥玫瑰色通通有齊！</a></p>\n<p>Text: Girlstyle Editorial<br />\nPhoto Source: instagram</p>\n',
    video_link: '',
    title: '配色質感100分！Colourpop全新小清新「水果系染唇膏」，絕美楓糖紅棕、奶茶烏龍不搶對不起自己！',
    guid: 'https://pretty.presslogic.com/?p=321152',
    post_status: 'publish',
    post_date_gmt: '2019-07-10 04:43:14',
    video_type: '',
    image: 'https://pretty.imgix.net/wp-content/uploads/2019/07/５３４６2.jpg',
    terms: [1, 115, 1690],
    remove_ads: '0',
    remove_sidebar_ads: '0',
    fbia_status: 'published',
    url: '/article/321152/%E9%85%8D%E8%89%B2%E8%B3%AA%E6%84%9F100%E5%88%86-colourpop%E5%85%A8%E6%96%B0%E5%B0%8F%E6%B8%85%E6%96%B0-%E6%B0%B4%E6%9E%9C%E7%B3%BB%E6%9F%93%E5%94%87%E8%86%8F-%E7%B5%95%E7%BE%8E%E6%A5%93%E7%B3%96%E7%B4%85%E6%A3%95-%E5%A5%B6%E8%8C%B6%E7%83%8F%E9%BE%8D%E4%B8%8D%E6%90%B6%E5%B0%8D%E4%B8%8D%E8%B5%B7%E8%87%AA%E5%B7%B1',
    description: 'ColourPop 的彩妝絕對是不少小資女的恩物！ 雖然價錢相當親民，不過內涵絕對不將就，而且每次的包裝都美到跟它的價錢不符啊～（太可惡）從經常賣到缺貨的眼影盤，到大獲好評的 Highlighters 和唇妝產品，顯色度持久度也非常不賴，可說是CP值最高、最值得入手的歐美彩妝品牌之一！',
    tags: [
        { id: 115, name: '唇膏', slug: '唇膏' },
        { id: 1690, name: 'colourpop', slug: 'colourpop' }
    ],
    cats: [
        {
            name: 'Beauty 美妝',
            slug: 'beauty',
            id: 1,
            subcategories: []
        }
    ],
    author: {
        id: 85,
        display_name: 'Jojo Tseng',
        user_nicename: 'jojo-tseng',
        job_title: '美妝編輯',
        description: 'Jojo Tseng，天生反骨少女心，美食美景美的事物 = 人生宗旨',
        image: 'https://girls-image.presslogic.com/wp-content/uploads/2017/04/Screen-Shot-2017-04-19-at-5.11.23-PM.png'
    }
}

stories.add(
    'MainArticle',
    () => ({
        components: { MainArticle },
        methods:{
            lazyLoad(content){
                console.log(content)
            }
        },
        props: {
            device: {
                default: select('選擇裝置', { '桌機': 'desktop', '手機': 'mobile' }, 'desktop')
            },
            regionPath: {
                default: select('GirlStyle 區域路徑', OPTIONS, DEFAULT_REGION)
            },
            staticHost: {
                default: text('靜態資源路徑', 'https://pretty.presslogic.com/')
            },
            color: {
                default: color('識別色', '#ffafa0')
            },
            mainColor:{
                default: color('標籤背景色', '#ffafa0')
            },
            fontColor: {
                default: color('標籤文字色', '#ffffff')
            },
            defaultAuthor: {
                default: text('文章預設作者（雜誌名稱）', 'BusinessFocus')
            },
            isArticleAuthorIntroShow: {
                default: boolean('顯示作者介紹', true)
            },
            isCarouselShow: {
                default: boolean('顯示文章 Hottest Carousel', true)
            },
            post: {
                default: object('文章內容', POST)
            },
            hottestPosts: {
                default: object('熱門文章', HOTTEST)
            },
            page: {
                default: object('PAGE', page)
            },
            categories: {
                default: object('CATEGORIES', categories) 
            }
        },
        propsDescription: {
            MainArticle: {
                // These description will appear in `description` column in props table
                device: "裝置",
                regionPath: "GirlStyle 區域路徑",
                staticHost: "靜態資源路徑",
                color: "識別色",
                defaultAuthor: "文章預設作者（雜誌名稱）",
                isArticleAuthorIntroShow: "顯示作者介紹",
                post: "文章內容",
                hottestPosts: "熱門文章",
                isCarouselShow: "顯示文章 Hottest Carousel",
                page: "page",
                categories: "categories",
                article: "文章內容"
            }
        },
        template: `<MainArticle
            :device="device"
            :regionPath="regionPath"
            :staticHost="staticHost"
            :color="color"
            :defaultAuthor="defaultAuthor"
            :isArticleAuthorIntroShow="isArticleAuthorIntroShow"
            :post="post"
            :hottestPosts="hottestPosts"
            :isCarouselShow="isCarouselShow"
            :page="page"
            :categories="categories"
            :article="post"
            @lazyLoad="lazyLoad"
        />`,
    }),
    {
        notes: `
            [ 版本紀錄 ]
            1.0.0 版

            [ 注意事項 ]
            1. 需使用 v-lazy 和 moment 套件
            2. 需使用 GptAd module: npm install git+https://gptad:KsKEj7yU9EG2vYVsuyMN@gitlab.presslogic.online/andy.wang/gptad.git#develop

            [ 事件方法 ]
            無

            作者：Tim
        `,
        info: {
            summary: 'MainArticle for Article page'
        },
        knobs: {
            escapeHTML: false
        }
    }
);
