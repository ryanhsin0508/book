import { storiesOf } from '@storybook/vue';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import myComponent from './iconPopBtn.vue';

const stories = storiesOf('Beautybee|IconPopBtn', module);
stories.addDecorator(withKnobs);
stories.add(
    'IconPopBtn',
    () => ({
        components: { myComponent },
        props: {
            hasLink: {
                default: boolean('hasLink', true)
            },
            link: {
                default: text('link', '/')
            },
            iconWidth: {
                default: text('iconWidth', '50')
            },
            iconHeight: {
                default: text('iconHeight', '50')
            },
            iconSrc: {
                default: text('iconSrc', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAA0pJREFUaAXtWUtrU0EYTZp3BREEpVJBoWogJOa10kXUjaALKSguxI1uxI3iVlz4C+pCrLQLEUQkBaFQhC4aceMqT2KIGDFCQAkI4iMmmJdnICm54TJ37nQmMe1cCHNn5pvznfN9M3Pn3lgs6lIRUBFQEVAR2AERsI5CYzKZ9MLPitVqnUJ5MRKJFGX7lS4slUrNQcSbbrd7oCfmq81mi4VCoZJMcSSC0q5MJnMIghIDooivmXa7ncjlcoelOQawNGEgPksEwMdBHQGzrVYrkc/n9fp0zM03SZmKWFMzWE9k+h2hUYLNR/xi4XD4C82Op094xpCpfSC7YSSKkIXNXKfT2UDm9vOQp40RmrFisbi3Vqu9hkM/zalO3zu0nY5Go990+riahAnDRrGnt6ZCXEwslqzT6TwTCAS+c47XDBMyFUul0m6IWgcyryhCKthsNtcJloYhZ2XLGcOa2kUIwf9JTg6aYVifb91u91mfz/db02GysqWMVSoVD0StwacQUYQ7NpQTjUZjDTvrtEktGnNuYZgyrmq1ugq0UxpEARWIiyFzq+Vy2c0LxzUVC4WCs16vv4TT87yOGce98ng885iWfxntN81MZwzRtGOqvACCbFGE5DkEME58bjJmvDElDA5s6XT6Gcp5RnwRZhdwkH5OfJsBYxYG4CmIeoLyshkHgmwvwfdTwoEVj8kQgFZEbQnlVVZg0XbwfQXilgkXFmwmYQB8CLDrLIAybSDqGgL8iMWHoTAALQDwJgvYiGxugNMDI19UYQC4C1G3jUBG3Q9Ot/AAv0fzSxUGgDu0wePswwOcyo0qDMTJGfB/vajcDHeYbDZ7FCd3N7J3DArj41SJLJFHzXt8DGoEg8EPNC6GwvqDsTMex9tutl8fRwlB+LgVYuJgNBXHwV+ITyVMSBhHCLJtM2b6dYAj6IvYzWpD46axy0o9zUgX5nK57vv9/uqgMPLtEZ8UpArbtlNRCRucSpNwrzI2CVka5KgyNhiNSbhXGcPp4QdHploOh+PP8Di73U7aWsPtRnW8tvw0sun3M2cM70GfIS6OX6c/2KBsw/ax1+v9NWzX+ydlEe3t4T69OnC6aF/Bf2ef9PpVm4qAioCKgIrAjo3APxThKrs0p2cFAAAAAElFTkSuQmCC')
            },
            content: {
                default: text('content', 'Home')
            },
            hoverIconSrc: {
                default: text('hoverIconSrc', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAAXNSR0IArs4c6QAAA0xJREFUaAXtWctrE0EYbzZBawRRBKFSQcFEPYgWPAgeWr0IzTsYioRA0JuQi0e9xL/Ai1jRg3gQJAsmzQt7idaDl1w8CIoB8SaCQXwkMW9/I20Ja3Yys5ndlHYWFnZnvtfv+33z7c7u1JQ8ZAZkBmQGZAZ2QAZsVmD0+Xwne72e2u/3FZvNdqVQKLw326/pwPx+//Fut7sGUIfXwXxRFGU+n89XzASnmGk8GAwe7XQ6pQFQxN0M2CuBxWNm+jYNWDgcnm232yUEf2QIgFmwWAoEAsPmhojzD5kCDKBmms0mYYrGyj82UaobJcofPUVD+BoLhUKHWq3WK4A6RfG7OYVm8sFuty9ks9mvm4MCLoQCA6iDYOol4jrNExvAvUNDuZjL5b7x6NFkhQFDo9gPpsiamqM51JsDuLeYu4RHwXc9GZ5xIWssGo3uQ6NYhWNDoEjAKN2zOFeJLR4AerJjMxaLxfZWq1UC6oKeE55xMPfG6XReVlX1N4+eVnYsYJFIZE+9Xi8i0wtaw2Per6GhLGLN1Y3aMVyKiURid61WWzEBFMEyj4f4SjwenzYKzBBjYGoXmHoOUB6jjln0UJZFlGUIZdlikR+U4WYsmUw6AOqZ2aBIkPCxCF8p4nMwaJZrLsbAlB3l9xSGl1iMi5IBcyqYuwrmuqw2mRlD1pRGo/HYalAECJiLgLknJAahwGDYVi6XH2JBx1gNi5ZDDFHE8IjEwmKbKQNer/ceDF5nMWimDGK45vF47rP4sI8SgqG7MJgYJWfh/DmXy3WgUqm8oPmkAgOo2wB1i2ZgQnPn3W53D+Be6/mnliJA3dRT3ALj1NiowNBmyTvgljyQdGpsIzsM9lhubOOncZ6AsdSEUS45HA6yMf2TTqc/0mIZCWxDGZ3xDNo92TNN8pgrFotMMVBLcZIIxvUtgY2bQav1ty1j3NsB3szjkbEMnZpGz4kOe0MzJvTWdGBozXe03wzJt0d8pjMV2LYtRQlM6AKwwJhkzIIkC3UhGROaTguMScawD/phINEd6Pz3/R22yBiZ4zrwFvOTVYGZsUwm8xmGUzh7LMYh18X5AG8dv7Ty5E8K5paJjHZO574PWRX/zj7pzMthmQGZAZkBmYGdmYG/mXAviDsPTHwAAAAASUVORK5CYII')
            }
        },
        methods: {
            handleLogin () {
                alert('請先登入');
            }
        },
        propsDescription: {
            myComponent: {
                // These description will appear in `description` column in props table
                hasLink: '點擊圖示是否有超連結功能',
                link: '有超連結功能時的連結位置',
                iconWidth: '圖示寬度（px)',
                iconHeight: '圖示高度（px)',
                iconSrc: '圖示位置url(必填)',
                content: '提示文字',
                hoverIconSrc: 'hover時的圖示位置url',
                customStyle: '客製化popover的樣式(class name)'
            }
        },
        template: `<myComponent style="cursor: pointer;text-align: center;" :hasLink="hasLink" :link="link" :iconWidth="iconWidth" :iconHeight="iconHeight" :iconSrc="iconSrc" :content="content" :hoverIconSrc="hoverIconSrc" @clickOpen="handleLogin" />`
    }),
    {
        notes: `
        [ 版本紀錄 ]
        1.0.0 版
        
        [ 注意事項 ]

        1. 安裝此元件前須確認該專案已有‘element-ui’的Popover套件
        2. clickOpen事件：
        處理點擊圖示觸發的事件,ex:處理未登入時跳出登入提示彈窗 

        [ 作者 ]
        Anne
    `,
        info: {
            summary: '圖示彈出提示按鈕：可自訂彈出提示的樣式（在customStyle屬性寫自訂樣式的class name）以及圖示超連結位置和大小'
        }
    }
);
