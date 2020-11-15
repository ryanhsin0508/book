import { configure, addDecorator } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import Vue from 'vue';

import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import PopupMessage from '../story/components/popupMessage/popupMessage';
import '../story/components/popupMessage/popupMessage.css';
import VueLazyLoad from 'vue-lazyload';
import truncate from 'html-truncate';
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr';
import 'swiper/dist/css/swiper.css';
import 'video.js/dist/video-js.css';
import 'videojs-youtube';
import VueScrollTo from 'vue-scrollto';
 
Vue.use(VueScrollTo)

Vue.use(elementUI);
Vue.use(PopupMessage);
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyLoad,{
  error:'/images/loading.png',
  loading: '/images/loading.png'
});


Vue.filter('truncate', function (text, length) {
    text = text || '';
    length = length || 30;

    return truncate(text, length);
});
addDecorator(withInfo);

function loadStories() {
    const req = require.context('../story', true, /\.stories\.js$/);
    req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
