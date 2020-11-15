import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, number, text} from '@storybook/addon-knobs';
import myComponent from './qrCode.vue';

const stories = storiesOf('Beautybee|QRcode', module);
stories.addDecorator(withKnobs);
stories.add(
    'QRcode',
    () => ({
        components: { myComponent },
        props: {
            android: {
                default: boolean('android', true)
            },
            ios: {
                default: boolean('ios', false)
            },
            popSize: {
                default: number('popSize', 128)
            },
            qrCodeSize: {
                default: number('qrCodeSize', 96)
            },
            place: {
                default: text('place', 'bottom')
            }
        },
        propsDescription: {
            myComponent: {
                android: 'true: 此平台為android',
                ios: 'true: 此平台為ios',
                popSize: 'qr code外框大小',
                qrCodeSize: 'qr code大小',
                place: 'qr code 出現位置,可代入的值有[top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end]'
            }
        },
        template: `<myComponent :android="android" :ios="ios" :popSize="popSize" :qrCodeSize="qrCodeSize" :place="place" style="width: 300px;height: 100px;"/>`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版
        
        [用法]
        個別顯示android 和 ios
        <div>
            <myComponent :android="true">
            <myComponent :ios="true">
        </div>
        有任何問題及其他需求請洽作者Anne
    `,
        info: {
            summary: '下載 android 或 ios app的圖示及其qr code,可調整qr code大小和位置'
        }
    }
);
