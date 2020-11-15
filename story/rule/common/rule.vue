<template>
    <div class="rule">
        <h1>Components-Driven development</h1>
        <div class="meta">
            The big CDD era is coming, are you ready to be a happy builder?
        </div>
        <section>
            <h2>Step.1 - 建立環境</h2>
            <div class="code">
                npm install -g @vue/cli-service
            </div>
            <div class="code">
                npm install -g vue-template-compiler
            </div>
            再來取得 Gitlab UI 管理專案 ( beautui / presslogicui ) 權限。
        </section>
        <section>
            <h2>Step.2 - 開發</h2>
            <div class="pace">
                1. 於 Storybook 開發 Components。
            </div>
            <div class="pace">
                2. 測試與修復完成。
            </div>
            <div class="pace">
                3. 打包，建立專屬 package.json 並執行 npm run build-b 進行打包 (package.json 請服用範例中的配置)。
                <div class="code">
                    npm run build-b
                </div>
            </div>
            <div class="pace">
                4. 將打包出來的 .common.js 及 .css 檔案 Copy 至 beautyUI or PresslogUI 專案中，並創建新的資料夾擺放。
            </div>
            <div class="pace">
                5. 在新資料夾中創建 package.json 並加入 main 的值，指定使用的 js 檔 path。
            </div>
        </section>
        <section>
            <h2>Step.3 - 使用 Component</h2>
            1. 在專案資料夾中下指令
            <div class="code">
                npm i -S git+ssh://{你想安裝的 gitlab SSH 地址}。
            </div>
            or (以 presslogicui 專案為例)
            <div class="code">
                npm i -S git+https://presslogicui:4BUB3py_iJPfXyqz2Z-H@gitlab.presslogic.online/andy.wang/presslogicui.git
            </div>
            or (以 beautyui 專案為例)
            <div class="code">
                npm i -S git+https://beautyUI:tpt2kypJEz8oHgtiVWXo@gitlab.presslogic.online/andy.wang/beautyui.git
            </div>
            2. 開啟欲使用此 component 的地方並註冊其 component 即可使用。
            <div class="code">
                import XXXX from ‘@beautybee/beautyui/{你的資料夾名稱}’
            </div>
            3. 引入該 component 的 css 檔，import ‘@beautybee/beautyui/{你的資料夾名稱}/xxxx.css’。
        </section>
        <section>
            <h2>Step.4 - 更新組件</h2>
            <div class="pace">
                1. 開啟 Storybook 更新並上到 master 確認無誤。
            </div>
            <div class="pace">
                2. 依照打包流程再次打包。
            </div>
            <div class="pace">
                3. Git 上該 UI 管理專案 ( beautui / presslogicui )
            </div>
            <div class="pace">
                4. 重新 install 一次 UI 管理專案
            </div>
        </section>
        <section>
            <h2>Note.</h2>
            <div class="pace">
                # Storybook 為純 document 及開發環境。
            </div>
            <div class="pace">
                # UI 管理專案裡面只放各種打包完成的 js 檔。其他均在 storybook 中做。
            </div>
            <div class="pace">
                # 記得組件的獨立性包含 CSS，避免使用任何 vuex 或其它全域變數，及 plugin。
            </div>
            <div class="pace">
                # CSS 注意 reset CSS 的變化。
            </div>
            <div class="pace">
                # 取名注意保留字
            </div>
            <div class="pace">
                # RWD 的使用時機
            </div>
        </section>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.rule {
    width: 800px;
    margin: auto;
    color: #666;
    margin-top: 50px;
}
.meta {
    font-size: 18px;
    color: #999;
    font-style: italic;
}
h1 {
    border-left: 6px #ff5a5a solid;
    padding-left: 10px;
    font-size: 36px;
    line-height: 36px;
    font-weight: bold;
    font-family: 'Arial Black';
    color: #ff5a5a;
}
h2 {
    font-size: 18px;
    font-weight: bold;
}
section {
    margin-top: 50px;
}
.code {
    background: #000;
    color: #fff;
    border-radius: 6px;
    padding: 10px 20px;
    margin-bottom: 20px;
}
.pace {
    margin-bottom: 20px;
}
</style>