import { storiesOf } from '@storybook/vue';
import { withKnobs, color, object, select, boolean, number, text } from '@storybook/addon-knobs';
import Gallery from './Gallery'

const stories = storiesOf('Presslogic | Gallery', module);
stories.addDecorator(withKnobs);
const GALLERY = [
  {
    thumb: "http://fakeimg.pl/200x105?text=Video",
    video: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/09/10%E6%9C%88%E5%A5%BD%E6%84%9F%E5%A5%B3%E5%AD%A9%E5%A6%9D%E5%AE%B902.jpg?auto=format&w=830",
    ratio: 16/9,
    title: "影片說明文字",
    url: "https://girlstyle.com/tw/article/120400/",
    target: "_balnk"
  },
  {
    thumb: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/09/1000-x-525-%E6%96%B9%E5%8C%85.jpg?auto=format&w=830",
    image: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/09/1000-x-525-%E6%96%B9%E5%8C%85.jpg?auto=format&w=830",
    title: "有種愛是這輩子都不會變！盤點5款能再紅100年的仙氣方包～「Burberry TB Bag」絕對是2019年必敗包款",
    url: "https://girlstyle.com/tw/article/120400/",
    target: "_balnk"
  }, {
    thumb: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/09/10%E6%9C%88%E5%A5%BD%E6%84%9F%E5%A5%B3%E5%AD%A9%E5%A6%9D%E5%AE%B902.jpg?auto=format&w=830",
    image: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/09/10%E6%9C%88%E5%A5%BD%E6%84%9F%E5%A5%B3%E5%AD%A9%E5%A6%9D%E5%AE%B902.jpg?auto=format&w=830",
    title: "YSL絲絨唇露「#25豆沙杏色」太美！精選好感系女孩必備NARS頰彩、濟州櫻花爆亮霜讓妳戀愛必勝",
    url: "https://girlstyle.com/tw/article/121152/",
    target: "_balnk"
  }, {
    thumb: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/09/0923%E6%83%85%E4%BE%B6.jpg?auto=format&w=830",
    image: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/09/0923%E6%83%85%E4%BE%B6.jpg?auto=format&w=830",
    title: "用情侶裝低調示愛！4 大情侶穿搭指南「顛倒穿搭、類單品」用不經意的小巧思閃瞎路人吧♡",
    url: "https://girlstyle.com/tw/article/121080/",
    target: "_balnk"
  }, {
    thumb: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/09/%E5%B0%81%E5%9C%96%E6%A8%A1%E6%9D%BF190813%E3%80%9031%E7%B5%84%E5%A5%97%E4%BB%B6%E3%80%9133.jpg?auto=format&w=830",
    image: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/09/%E5%B0%81%E5%9C%96%E6%A8%A1%E6%9D%BF190813%E3%80%9031%E7%B5%84%E5%A5%97%E4%BB%B6%E3%80%9133.jpg?auto=format&w=830",
    title: "性感指數破表！盤點5支滿滿熱戀感的「酒釀櫻桃」色唇膏～超火辣紅唇讓妳一秒挑起男人慾望",
    url: "https://girlstyle.com/tw/article/120373/",
    target: "_balnk"
  }, {
    thumb: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/09/%E5%B0%8D%E9%A6%99.jpg?auto=format&w=830",
    image: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/09/%E5%B0%8D%E9%A6%99.jpg?auto=format&w=830",
    title: "用香味宣示主權！盤點3款超浪漫情侶香水～噴上彼此的「專屬命定香」大膽說愛吧",
    url: "https://girlstyle.com/tw/article/121044/",
    target: "_balnk"
  }, {
    thumb: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/07/1000-x-525-%E9%96%A8%E8%9C%9C%E9%A4%8A%E8%80%81%E6%88%BF.jpg?auto=format&w=830",
    image: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/07/1000-x-525-%E9%96%A8%E8%9C%9C%E9%A4%8A%E8%80%81%E6%88%BF.jpg?auto=format&w=830",
    title: "我們說好不分離！7閨蜜相識10週年，合資蓋純白夢幻別墅～甜喊：「20年後也要一直在一起！」",
    url: "https://girlstyle.com/tw/article/108277/",
    target: "_balnk"
  }, {
    thumb: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/08/3%E3%80%9031%E7%B5%84%E5%A5%97%E4%BB%B6%E3%80%91.jpg?auto=format&w=830",
    image: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/08/3%E3%80%9031%E7%B5%84%E5%A5%97%E4%BB%B6%E3%80%91.jpg?auto=format&w=830",
    title: "「我是她父親，她在我這裡只能幸福，別的都不行」！爸爸不會告訴妳的事：妳受傷了他會最心疼",
    url: "https://girlstyle.com/tw/article/118869/",
    target: "_balnk"
  }, {
    thumb: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/07/%E5%AE%89%E4%BB%A5%E8%BB%92%E9%87%91%E5%8F%A5.jpg?auto=format&w=830",
    image: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/07/%E5%AE%89%E4%BB%A5%E8%BB%92%E9%87%91%E5%8F%A5.jpg?auto=format&w=830",
    title: "「堅持就會有男神」！盤點安以軒「追愛金句」：能付出的人是因為妳值得擁有",
    url: "https://girlstyle.com/tw/article/111995/",
    target: "_balnk"
  }, {
    thumb: "https://girlstyle-tw.imgix.net/wp-content/uploads/2018/04/0930%E5%88%BA%E9%9D%92.jpg?auto=format&w=830",
    image: "https://girlstyle-tw.imgix.net/wp-content/uploads/2018/04/0930%E5%88%BA%E9%9D%92.jpg?auto=format&w=830",
    title: "讓我們的愛情更永恆！9 款超甜蜜情侶刺青～「蜜蜂與乾燥花」緊緊將我們牽在一起♡",
    url: "https://girlstyle.com/tw/article/25566/",
    target: "_balnk"
  }, {
    thumb: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/09/%E5%B0%81%E5%9C%96%E6%A8%A1%E6%9D%BF190813%E3%80%9031%E7%B5%84%E5%A5%97%E4%BB%B6%E3%80%9116.jpg?auto=format&w=830",
    image: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/09/%E5%B0%81%E5%9C%96%E6%A8%A1%E6%9D%BF190813%E3%80%9031%E7%B5%84%E5%A5%97%E4%BB%B6%E3%80%9116.jpg?auto=format&w=830",
    title: "從年輕放閃到老！日本超潮老夫妻「情侶穿搭」IG爆紅，情侶裝這樣穿可以閃一輩子。",
    url: "https://girlstyle.com/tw/article/121440/",
    target: "_balnk"
  }, {
    thumb: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/08/%E6%A8%A1%E6%9D%BF032033.jpg?auto=format&w=830",
    image: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/08/%E6%A8%A1%E6%9D%BF032033.jpg?auto=format&w=830",
    title: "愛情不該受性別-國界束縛-印度與巴基斯坦的女女婚紗照-拍出愛情最美的樣子",
    url: "https://girlstyle.com/tw/article/116671/",
    target: "_balnk"
  }, {
    thumb: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/03/%E6%83%85%E4%BE%B6%E7%9D%A1%E5%A7%BF3.jpg?auto=format&w=830",
    image: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/03/%E6%83%85%E4%BE%B6%E7%9D%A1%E5%A7%BF3.jpg?auto=format&w=830",
    title: "每一種都好甜蜜！盤點情侶們各時期的睡姿～「面對面相擁、依偎入眠」絕對是熱戀期認證",
    url: "https://girlstyle.com/tw/article/89425/",
    target: "_balnk"
  }, {
    thumb: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/03/%E6%83%85%E4%BE%B6%E6%B3%95%E5%89%87.jpg?auto=format&w=830",
    image: "https://girlstyle-tw.imgix.net/wp-content/uploads/2019/03/%E6%83%85%E4%BE%B6%E6%B3%95%E5%89%87.jpg?auto=format&w=830",
    title: "學會尊重和信任！情侶都該懂的5大愛情保鮮哲學： 「我願意把最好的都給你。」",
    url: "https://girlstyle.com/tw/article/88157/",
    target: "_balnk"
  }]
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


stories.add(
  'Gallery',
  () => ({
    components: { Gallery },
    props: {
      posts: {
        default: object('相簿內容', GALLERY)
      },
      mainColor: {
        default: color('主框顏色', '#fff4e8')
      },
      bgColor: {
        default: color('背景顏色', 'transparent')
      },
      buttonColor: {
        default: color('按鈕顏色', '#ffffff')
      },
      buttonArrowColor: {
        default: color('按鈕箭頭顏色', '#a9a9a9')
      },
      fontColor: {
        default: color('文字顏色', '#000000')
      }
    },
    propsDescription: {
      GalleryDescription: {}
    },
    template:
      `<Gallery 
                :posts="posts"
                :mainColor="mainColor"
                :bgColor="bgColor"
                :buttonColor="buttonColor"
                :buttonArrowColor="buttonArrowColor"
                :fontColor="fontColor"
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
