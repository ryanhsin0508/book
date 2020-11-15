import { storiesOf } from '@storybook/vue';
import { withKnobs, object, boolean, text } from '@storybook/addon-knobs';
import IconButton from './IconButton.vue';

const stories = storiesOf('Presslogic|element/IconButton', module);

stories.addDecorator(withKnobs);
stories.add(
    'IconButton',
    () => ({
        components: { IconButton },
        props: {
            direction: {
                default: text('device', 'el-icon-arrow-up')
            },
            customStyle: {
                default: object('customStyle', {
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#ffafa0',
                    borderRadius: '50%',
                    color: '#fff',
                    fontSize: '20px'
                })
            },
            hover: {
                default: boolean('hover', false)
            },
            
        },
        propsDescription: {
            IconButton: {
                // These description will appear in `description` column in props table
                customStyle: '外框樣式',
                hover: 'icon 是否 hover',
                direction: '箭頭方向'
            }
        },
        template: `<IconButton :customStyle="customStyle" :hover="hover" :direction="direction" />`
    }),
    {
        notes: '回到最上層按鈕',
        info: {
            summary: '回到最上層按鈕'
        }
    }
);