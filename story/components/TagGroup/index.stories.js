import { storiesOf } from '@storybook/vue';
import { withKnobs, color, boolean, object, select, number } from '@storybook/addon-knobs';
import Index from './TagGroup';
import Tag from './Tag';

const stories = storiesOf('Presslogic|element/TagGroup', module);
stories.addDecorator(withKnobs);

const OPTIONS = {
    'General (default)': '',
    'GS-TW': '/tw',
    'GS-SG': '/sg',
    'GS-IN': '/in',
    'GS-KR': '/kr',
    'GS-MY': '/my',
    'GS-US': '/us',
};
const DEFAULT_REGION = '';

const DEVICE = {
    '桌機': 'desktop',
    '手機': 'mobile',
};
const DEVICE_VALUE = 'desktop';

stories.add(
    'Index',
    () => ({
        components: { Index },
        props: {
            device: {
                default: select('選擇裝置', DEVICE, DEVICE_VALUE)
            },
            countryPath: {
                default: select('GirlStyle 區域路徑', OPTIONS, DEFAULT_REGION)
            },
            tags: {
                default: object('Tags 內容', [
                    {
                        id: 1,
                        name: 'Tag1 Name',
                        slug: 'tag1Slug'
                    },
                    {
                        id: 2,
                        name: 'Tag2 Name',
                        slug: 'tag2Slug'
                    },
                    {
                        id: 3,
                        name: 'Tag3 Name',
                        slug: 'tag3Slug'
                    }
                ])
            },
            labelIsEnglish: {
                default: boolean('標籤是英文', false)
            },
            spacingBetweenTags: {
                default: number('Tag 之間的間距', 10)
            },
            tagStyleProps: {
                default: object('自定義 Tag 樣式', {
                    "borderRadius": "5px",
                    "background": "blue"
                })
            }
        },
        propsDescription: {
            Index: {
                // These description will appear in `description` column in props table
                device: '選擇裝置',
                countryPath: 'GirlStyle 區域路徑',
                tags: 'Tags 內容',
                labelIsEnglish: '語言是英文',
                spacingBetweenTags: 'Tag 之間的間距',
                tagStyleProps: '自定義 Tag 樣式'
            }
        },
        template: `<Index
            :device="device"
            :countryPath="countryPath"
            :tags="tags"
            :labelIsEnglish="labelIsEnglish"
            :spacingBetweenTags="spacingBetweenTags"
            :tagStyleProps="tagStyleProps"
        />`,
    }),
    {
        notes: `
            [ 版本紀錄 ]
            1.0.0 版

            [ 事件方法 ]
            無

            作者：Tim
        `,
        info: {
            summary: '我只是個單純的 TagGroup'
        }
    }
);

stories.add(
    'Tag',
    () => ({
        components: { Tag },
        props: {
            countryPath: {
                default: select('GirlStyle 區域路徑', OPTIONS, DEFAULT_REGION)
            },
            tag: {
                default: object('Tag 內容', {
                    id: 1,
                    name: 'Tag Name',
                    slug: 'tagSlug'
                })
            },
            tagStyleProps: {
                default: object('自定義 Tag 樣式', {
                    "borderRadius": "5px",
                    "background": "blue"
                })
            }
        },
        propsDescription: {
            Tag: {
                countryPath: 'GirlStyle 區域路徑',
                tags: 'Tags 內容',
                tagStyleProps: '自定義 Tag 樣式'
            }
        },
        template: `<div style="padding: 10px;">
            <Tag
                :countryPath="countryPath"
                :tag="tag"
                :tagStyleProps="tagStyleProps"
            />
        </div>`,
    }),
    {
        notes: `
            [ 版本紀錄 ]
            1.0.0 版

            [ 事件方法 ]
            無

            作者：Tim
        `,
        info: {
            summary: '我只是個單純的 Tag'
        }
    }
);