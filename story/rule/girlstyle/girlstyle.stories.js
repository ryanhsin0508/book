import { storiesOf } from '@storybook/vue';
import { withKnobs, color } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import girlstyle from './girlstyle.vue';
const stories = storiesOf('Rule|Girlstyle', module);
stories.addDecorator(withKnobs);
const color_0 = '#ff5a5a';
const color_1 = '#5cac34';
const color_2 = '#fc4343';
const color_3 = '#e49a2b';
const color_4 = '#909399';

stories.add(
    'main rule',
    () => ({
        components: { girlstyle },
        props: {
            color0: {
                default: color('main', color_0, 'main')
            },
            color1: {
                default: color('succress', color_1)
            },
            color2: {
                default: color('error', color_2)
            },
            color3: {
                default: color('warning', color_3)
            },
            color4: {
                default: color('info', color_4)
            }
        },
        template: `<girlstyle :color0="color0" :color1="color1" :color2="color2" :color3="color3" :color4="color4"/>`,
        methods: {
            action: action('ccc'),
            link: linkTo('A|example', 'Button')
        }
    }),
    {
        notes: `
            This is the place for all components base rule.
            update: 04/24/19.
        `,
        info: {
            summary: 'Me and my last stubborn'
        }
    }
);
