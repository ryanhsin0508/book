import { storiesOf } from '@storybook/vue';
import { withKnobs, text, array, number, boolean, object, select } from '@storybook/addon-knobs';
import ArticleList from './ArticleList.vue';

const devices = ['desktop', 'mobile'];

const categoriesData = [
    {"name":"HOT新訊","slug":"hot","id":7506,"subcategories":[]},{"name":"Trendy人氣熱話","slug":"%e4%ba%ba%e6%b0%a3%e7%86%b1%e8%a9%b1","id":3,"subcategories":[]},{"name":"Beauty美妝","slug":"%e7%be%8e%e5%a6%9d","id":4,"subcategories":[{"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5},{"name":"彩妝","slug":"%e5%8c%96%e5%a6%9d","id":6},{"name":"美甲","slug":"%e7%be%8e%e7%94%b2","id":7},{"name":"保養","slug":"%e8%ad%b7%e8%86%9a","id":8},{"name":"香氛","slug":"%e9%a6%99%e6%b0%9b","id":7507}],"posts":[{"id":88514,"post_date":"2019-07-08T08:56:26Z","title":"Eason 2019-07-08-1","guid":"http://uat.girlstyle.com/tw/?p=88514","term":4,"url":"/article/88514/eason-2019-07-08-1","image":"https://images.girlsdaily.com/wp-content/uploads/2019/04/1000-x-525-無印良品飯店.jpg"},{"id":88423,"post_date":"2019-03-26T07:29:14Z","title":"美出新高度！日本AfternoonTea推出超夢幻「花瓣系列」彩妝，有花香味的透明花瓣唇膏也太療癒♡","guid":"http://girlstyle.com/tw/?p=88423","term":6,"url":"/article/88423/%E7%BE%8E%E5%87%BA%E6%96%B0%E9%AB%98%E5%BA%A6-%E6%97%A5%E6%9C%ACafternoontea%E6%8E%A8%E5%87%BA%E8%B6%85%E5%A4%A2%E5%B9%BB-%E8%8A%B1%E7%93%A3%E7%B3%BB%E5%88%97-%E5%BD%A9%E5%A6%9D-%E6%9C%89%E8%8A%B1%E9%A6%99%E5%91%B3%E7%9A%84%E9%80%8F%E6%98%8E%E8%8A%B1%E7%93%A3%E5%94%87%E8%86%8F%E4%B9%9F%E5%A4%AA%E7%99%82%E7%99%92","image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/模板032010.jpg"},{"id":88088,"post_date":"2019-03-24T09:19:16Z","title":"「粉底鮮奶茶」太萌！植村秀「無極限粉底」打造專屬樂園～滿額贈限量「柔瑰粉帆布包」♡","guid":"http://girlstyle.com/tw/?p=88088","term":4,"url":"/article/88088/%E7%B2%89%E5%BA%95%E9%AE%AE%E5%A5%B6%E8%8C%B6-%E5%A4%AA%E8%90%8C-%E6%A4%8D%E6%9D%91%E7%A7%80-%E7%84%A1%E6%A5%B5%E9%99%90%E7%B2%89%E5%BA%95-%E6%89%93%E9%80%A0%E5%B0%88%E5%B1%AC%E6%A8%82%E5%9C%92-%E6%BB%BF%E9%A1%8D%E8%B4%88%E9%99%90%E9%87%8F-%E6%9F%94%E7%91%B0%E7%B2%89%E5%B8%86%E5%B8%83%E5%8C%85","image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/植村秀粉底奶茶02.jpg"},{"id":87717,"post_date":"2019-03-24T04:15:43Z","title":"一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡","guid":"http://girlstyle.com/tw/?p=87717","term":5,"url":"/article/87717/%E4%B8%80%E7%A7%92%E8%AE%8A%E8%BA%AB%E6%B5%AA%E6%BC%AB%E8%8A%B1%E7%A5%9E-%E5%94%AF%E7%BE%8E%E6%98%A5%E5%AD%A3%E5%A4%A7%E5%8B%A2%E8%89%B2-%E5%A5%B6%E8%9C%9C%E8%A3%B8%E6%A3%95-%E5%86%B7%E7%B2%B9%E5%92%96%E5%95%A1-%E8%BC%95%E6%9F%94%E5%85%89%E7%B7%9A%E7%A9%BF%E9%80%8F%E6%84%9F%E8%87%AA%E5%B8%B6%E4%BB%99%E6%B0%A3","image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg"}]},{"name":"Fashion時尚","slug":"%e6%99%82%e5%b0%9a","id":9,"subcategories":[{"name":"配件","slug":"%e9%85%8d%e4%bb%b6","id":10},{"name":"包包","slug":"%e5%8c%85%e5%8c%85","id":7508},{"name":"潮鞋","slug":"%e9%9e%8b","id":11},{"name":"穿搭","slug":"%e7%a9%bf%e6%90%ad","id":12},{"name":"刺青","slug":"%e5%88%ba%e9%9d%92","id":13}]},{"name":"Lifestyle消費生活","slug":"%e7%94%9f%e6%b4%bb","id":14,"subcategories":[{"name":"藝文展覽","slug":"%e8%97%9d%e6%96%87%e5%b1%95%e8%a6%bd","id":7509},{"name":"吃貨日常","slug":"%e5%90%83%e8%b2%a8","id":17},{"name":"旅遊打卡","slug":"%e6%97%85%e9%81%8a","id":16},{"name":"女生選物","slug":"%e5%a5%b3%e7%94%9f%e9%81%b8%e7%89%a9","id":7510},{"name":"家居佈置","slug":"%e5%ae%b6%e5%b1%85","id":15}],"posts":[{"id":88319,"post_date":"2019-03-26T03:45:29Z","title":"給最特別的妳！迪士尼推限定「小熊維尼母親節花籃」～維尼＋大學熊的組合超療癒♡","guid":"http://girlstyle.com/tw/?p=88319","term":208,"url":"/article/88319/%E7%B5%A6%E6%9C%80%E7%89%B9%E5%88%A5%E7%9A%84%E5%A6%B3-%E8%BF%AA%E5%A3%AB%E5%B0%BC%E6%8E%A8%E9%99%90%E5%AE%9A-%E5%B0%8F%E7%86%8A%E7%B6%AD%E5%B0%BC%E6%AF%8D%E8%A6%AA%E7%AF%80%E8%8A%B1%E7%B1%83-%E7%B6%AD%E5%B0%BC%EF%BC%8B%E5%A4%A7%E5%AD%B8%E7%86%8A%E7%9A%84%E7%B5%84%E5%90%88%E8%B6%85%E7%99%82%E7%99%92","image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/小熊維尼花束.jpg"},{"id":88240,"post_date":"2019-03-26T02:55:00Z","title":"日本星巴克「富士山」限定商品再一波！配上粉色浪漫櫻花雨～根本是轟炸大家的少女心啊♡","guid":"http://girlstyle.com/tw/?p=88240","term":208,"url":"/article/88240/%E6%97%A5%E6%9C%AC%E6%98%9F%E5%B7%B4%E5%85%8B-%E5%AF%8C%E5%A3%AB%E5%B1%B1-%E9%99%90%E5%AE%9A%E5%95%86%E5%93%81%E5%86%8D%E4%B8%80%E6%B3%A2-%E9%85%8D%E4%B8%8A%E7%B2%89%E8%89%B2%E6%B5%AA%E6%BC%AB%E6%AB%BB%E8%8A%B1%E9%9B%A8-%E6%A0%B9%E6%9C%AC%E6%98%AF%E8%BD%9F%E7%82%B8%E5%A4%A7%E5%AE%B6%E7%9A%84%E5%B0%91%E5%A5%B3%E5%BF%83%E5%95%8A","image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/0325星巴克.jpg"},{"id":88317,"post_date":"2019-03-26T02:43:18Z","title":"錢包警報注意！卡娜赫拉化身超萌冰棒～兔兔草莓牛奶＋P助可爾必思根本捨不得咬啊","guid":"http://girlstyle.com/tw/?p=88317","term":17,"url":"/article/88317/%E9%8C%A2%E5%8C%85%E8%AD%A6%E5%A0%B1%E6%B3%A8%E6%84%8F-%E5%8D%A1%E5%A8%9C%E8%B5%AB%E6%8B%89%E5%8C%96%E8%BA%AB%E8%B6%85%E8%90%8C%E5%86%B0%E6%A3%92-%E5%85%94%E5%85%94%E8%8D%89%E8%8E%93%E7%89%9B%E5%A5%B6%EF%BC%8Bp%E5%8A%A9%E5%8F%AF%E7%88%BE%E5%BF%85%E6%80%9D%E6%A0%B9%E6%9C%AC%E6%8D%A8%E4%B8%8D%E5%BE%97%E5%92%AC%E5%95%8A","image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/卡娜赫拉冰棒.jpg"},{"id":88210,"post_date":"2019-03-25T07:31:26Z","title":"米奇控要發瘋了！日本推出期間限定「米奇魔法色彩」商店，滿滿的彩色米奇公仔真的好療癒啊♡","guid":"http://girlstyle.com/tw/?p=88210","term":208,"url":"/article/88210/%E7%B1%B3%E5%A5%87%E6%8E%A7%E8%A6%81%E7%99%BC%E7%98%8B%E4%BA%86-%E6%97%A5%E6%9C%AC%E6%8E%A8%E5%87%BA%E6%9C%9F%E9%96%93%E9%99%90%E5%AE%9A-%E7%B1%B3%E5%A5%87%E9%AD%94%E6%B3%95%E8%89%B2%E5%BD%A9-%E5%95%86%E5%BA%97-%E6%BB%BF%E6%BB%BF%E7%9A%84%E5%BD%A9%E8%89%B2%E7%B1%B3%E5%A5%87%E5%85%AC%E4%BB%94%E7%9C%9F%E7%9A%84%E5%A5%BD%E7%99%82%E7%99%92%E5%95%8A","image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/模板03206.jpg"}]},{"name":"3C攝影","slug":"%e6%94%9d%e5%bd%b1","id":18,"subcategories":[{"name":"拍照技巧","slug":"%e6%8b%8d%e7%85%a7%e6%8a%80%e5%b7%a7","id":7511},{"name":"手機APP","slug":"%e6%89%8b%e6%a9%9fapp","id":7512},{"name":"桌布控","slug":"%e6%a1%8c%e5%b8%83%e6%8e%a7","id":7513},{"name":"電玩遊戲","slug":"%e9%9b%bb%e7%8e%a9%e9%81%8a%e6%88%b2","id":7514}]},{"name":"Love女生心事","slug":"love%e5%a5%b3%e7%94%9f%e5%bf%83%e4%ba%8b","id":7515,"subcategories":[{"name":"單身萬歲","slug":"%e5%96%ae%e8%ba%ab%e8%90%ac%e6%ad%b2","id":7516},{"name":"戀愛蜜糖","slug":"%e6%88%80%e6%84%9b%e8%9c%9c%e7%b3%96","id":7517},{"name":"閨蜜私Talk","slug":"%e9%96%a8%e8%9c%9c","id":19},{"name":"心靈熱可可","slug":"%e5%bf%83%e9%9d%88%e7%86%b1%e5%8f%af%e5%8f%af","id":7518},{"name":"星座","slug":"%e6%98%9f%e5%ba%a7","id":7519}]},{"name":"Fitness瘦身","slug":"%e7%98%a6%e8%ba%ab","id":20,"subcategories":[]},{"name":"Videos影片","slug":"%e5%bd%b1%e7%89%87","id":22,"subcategories":[]},{"name":"Bloggers專欄","slug":"%e5%b0%88%e6%ac%84","id":23,"subcategories":[]}
]

const articleData = [
    {
        "id":87717,
        "post_date":"2019-06-20T00:15:43Z",
        "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
        "title":"一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
        "guid":"http://girlstyle.com/tw/?p=87717",
        "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
        "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
        "terms":[5,80,7470,7471,7472],
        "cats":[
            {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5},
            {"name":"帥哥","slug":"帥哥","id":4},
            {"name":"哥","slug":"哥","id":3},
            {"name":"帥","slug":"帥","id":2}
        ]
    },
    {
        "id":87717,
        "post_date":"2019-06-20T00:15:43Z",
        "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
        "title":"一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
        "guid":"http://girlstyle.com/tw/?p=87717",
        "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
        "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
        "terms":[5,80,7470,7471,7472],
        "cats":[
            {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5},
            {"name":"帥哥","slug":"帥哥","id":4},
            {"name":"哥","slug":"哥","id":3},
            {"name":"帥","slug":"帥","id":2}
        ]
    },
    {
        "id":87717,
        "post_date":"2019-06-20T00:15:43Z",
        "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
        "title":"一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
        "guid":"http://girlstyle.com/tw/?p=87717",
        "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
        "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
        "terms":[5,80,7470,7471,7472],
        "cats":[
            {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5},
            {"name":"帥哥","slug":"帥哥","id":4},
            {"name":"哥","slug":"哥","id":3},
            {"name":"帥","slug":"帥","id":2}
        ]
    },
    {
        "id":87717,
        "post_date":"2019-06-20T00:15:43Z",
        "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
        "title":"一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
        "guid":"http://girlstyle.com/tw/?p=87717",
        "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
        "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
        "terms":[5,80,7470,7471,7472],
        "cats":[
            {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5},
            {"name":"帥哥","slug":"帥哥","id":4},
            {"name":"哥","slug":"哥","id":3},
            {"name":"帥","slug":"帥","id":2}
        ]
    },
    {
        "id":87717,
        "post_date":"2019-06-20T00:15:43Z",
        "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
        "title":"一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
        "guid":"http://girlstyle.com/tw/?p=87717",
        "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
        "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
        "terms":[5,80,7470,7471,7472],
        "cats":[
            {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5},
            {"name":"帥哥","slug":"帥哥","id":4},
            {"name":"哥","slug":"哥","id":3},
            {"name":"帥","slug":"帥","id":2}
        ]
    },
    {
        "id":87717,
        "post_date":"2019-06-20T00:15:43Z",
        "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
        "title":"一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
        "guid":"http://girlstyle.com/tw/?p=87717",
        "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
        "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
        "terms":[5,80,7470,7471,7472],
        "cats":[
            {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5},
            {"name":"帥哥","slug":"帥哥","id":4},
            {"name":"哥","slug":"哥","id":3},
            {"name":"帥","slug":"帥","id":2}
        ]
    },
    {
        "id":87717,
        "post_date":"2019-06-20T00:15:43Z",
        "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
        "title":"一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
        "guid":"http://girlstyle.com/tw/?p=87717",
        "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
        "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
        "terms":[5,80,7470,7471,7472],
        "cats":[
            {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5},
            {"name":"帥哥","slug":"帥哥","id":4},
            {"name":"哥","slug":"哥","id":3},
            {"name":"帥","slug":"帥","id":2}
        ]
    },
    {
        "id":87717,
        "post_date":"2019-06-20T00:15:43Z",
        "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
        "title":"一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
        "guid":"http://girlstyle.com/tw/?p=87717",
        "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
        "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
        "terms":[5,80,7470,7471,7472],
        "cats":[
            {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5},
            {"name":"帥哥","slug":"帥哥","id":4},
            {"name":"哥","slug":"哥","id":3},
            {"name":"帥","slug":"帥","id":2}
        ]
    },
    {
        "id":87717,
        "post_date":"2019-06-20T00:15:43Z",
        "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
        "title":"一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
        "guid":"http://girlstyle.com/tw/?p=87717",
        "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
        "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
        "terms":[5,80,7470,7471,7472],
        "cats":[
            {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5},
            {"name":"帥哥","slug":"帥哥","id":4},
            {"name":"哥","slug":"哥","id":3},
            {"name":"帥","slug":"帥","id":2}
        ]
    },
    {
        "id":87717,
        "post_date":"2019-06-20T00:15:43Z",
        "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
        "title":"一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
        "guid":"http://girlstyle.com/tw/?p=87717",
        "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
        "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
        "terms":[5,80,7470,7471,7472],
        "cats":[
            {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5},
            {"name":"帥哥","slug":"帥哥","id":4},
            {"name":"哥","slug":"哥","id":3},
            {"name":"帥","slug":"帥","id":2}
        ]
    },
    {
        "id":87717,
        "post_date":"2019-06-20T00:15:43Z",
        "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
        "title":"一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
        "guid":"http://girlstyle.com/tw/?p=87717",
        "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
        "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
        "terms":[5,80,7470,7471,7472],
        "cats":[
            {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5},
            {"name":"帥哥","slug":"帥哥","id":4},
            {"name":"哥","slug":"哥","id":3},
            {"name":"帥","slug":"帥","id":2}
        ]
    },
    {
        "id":87717,
        "post_date":"2019-06-20T00:15:43Z",
        "description":"最近天氣已經慢慢的步入春天啦！涼爽舒適的溫度讓人心情都莫名跟著好起來～而換季除了衣服跟妝容要改變之外...",
        "title":"一秒變身浪漫花神！唯美春季大勢色「奶蜜裸棕、冷粹咖啡」～輕柔光線穿透感自帶仙氣♡",
        "guid":"http://girlstyle.com/tw/?p=87717",
        "image":"https://images.girlsdaily.com/wp-content/uploads/2019/03/奶蜜.jpg",
        "url":"/article/87717/一秒變身浪漫花神-唯美春季大勢色-奶蜜裸棕-冷粹咖啡-輕柔光線穿透感自帶仙氣",
        "terms":[5,80,7470,7471,7472],
        "cats":[
            {"name":"髮型","slug":"%e9%ab%ae%e5%9e%8b","id":5},
            {"name":"帥哥","slug":"帥哥","id":4},
            {"name":"哥","slug":"哥","id":3},
            {"name":"帥","slug":"帥","id":2}
        ]
    },
];

const stories = storiesOf('PL-Theme|Index/ArticleList', module);
stories.addDecorator(withKnobs);
stories.add(
    'ArticleList',
    () => ({
        components: { ArticleList },
        props: {
            catShow: {
                default: boolean('catShow', true)
            },
            categories: {
                default: array('categories', categoriesData)
            },
            categoryEnglish: {
                default: boolean('categoryEnglish', false)
            },
            articlePosts:{
                default: array('articlePosts', articleData)
            },
            device: {
                default: select('device', devices)
            },
            loading: {
                default: boolean('loading', false)
            },
            postNum: {
                default: number('postNum', 120)
            }
        },
        propsDescription: {
            ArticleList: {
                catShow: 'categories 是否顯示',
                categories: 'categories 的 object',
                categoryEnglish: 'categories 是否為英語',
                articlePosts: 'article 的 object',
                device: '使用裝置',
            }
        },
        template: `<div class="main-content"><ArticleList :catShow="catShow" :categories="categories" :device="device" :articlePosts="articlePosts"  :categoryEnglish="categoryEnglish" :loading="loading" :postNum="postNum" /> </div>`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版

        [ 注意事項 ]

        1. 安裝此元件前須確認該專案已有‘vue-moment’'html-truncate',‘vue-lazyload’,‘element-ui’套件
        `,
        info: {
            summary: 'Article List for Presslogic'
        }
    }
);
