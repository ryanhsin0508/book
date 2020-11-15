import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import beautybee from './rule.vue';
import howTo from './howTo.vue';
const stories = storiesOf('GET STARTED', module);
stories.addDecorator(withKnobs);

stories.add(
    'Installation',
    () => ({
        components: { beautybee },
        template: `<beautybee />`
    }),
    {
        notes: `
            This is the place for all components base rule.
            update: 05/09/19.
        `,
        info: {
            summary: 'CCD 開發流程 - 1.0.0 版'
        }
    }
);
stories.add(
    'How to build a great component',
    () => ({
        components: { howTo },
        template: `<howTo />`
    }),
    {
        notes: `
            This is the place for all components base rule.
            update: 05/09/19.
        `,
        info: {
            summary: '如何開發一個令人使用愉快的組件 - 1.0.0 版'
        }
    }
);
