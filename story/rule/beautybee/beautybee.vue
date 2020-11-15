<template>
    <div class="welcome">
        <img src="/images/logo-web-header.png">
        <h1 class="title">Welcome to Beautybee Storybook.</h1>
        <div class="meta">It 's a Component-Driven Development project.</div>
        <h2 class="item_title">Style rule</h2>
        <h3>主色</h3>
        <div class="color" :style="{ backgroundColor: color0 }">main<br>{{ color0 }}</div>
        <h3>情境色</h3>
        <div class="row">
            <div class="color m_r b1" :style="{ backgroundColor: color1 }">
                success<br>
                {{ color1 }}
            </div>
            <div class="color m_r b2" :style="{ backgroundColor: color2 }">
                error<br>
                {{ color2 }}
            </div>
            <div class="color m_r b3" :style="{ backgroundColor: color3 }">
                warning<br>
                {{ color3 }}
            </div>
            <div class="color b4" :style="{ backgroundColor: color4 }">
                info<br>
                {{ color4 }}
            </div>
        </div>
        <h2 class="item_title">Development rule</h2>
        <div class="rule_all">
            <div class="rule_text">
                拆解需求至最小元件
            </div>
            <div class="hr"></div>
            <div class="rule_text">
                情境與文案撰寫
            </div>
            <div class="hr"></div>
            <div class="rule_text">
                Component 開發
            </div>
            <div class="hr"></div>
            <div class="rule_text">
                Code review
            </div>
            <div class="hr"></div>
            <div class="rule_text">
                組合至完整單元
            </div>
            <div class="hr"></div>
            <div class="rule_text">
                測試與需求驗證
            </div>
            <div class="hr"></div>
            <div class="rule_text">
                Write Usage
            </div>
            <div class="hr"></div>
            <div class="rule_text">
                打包與上傳
            </div>
            <div class="hr"></div>
            <div class="rule_text bottom">
                網站串接使用
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['color0', 'color1', 'color2', 'color3', 'color4']
}
</script>
<style scoped>
.welcome {
    width: 1000px;
    margin: auto;
}
.rule_all {
    width: 250px;
    margin: auto;
}
.hr {
    border-left: 5px #4b8b2b solid;
    height: 50px;
    margin-left: 120px;
}
.rule_text {
    background: #5cac34;
    border-bottom: 3px #4b8b2b solid;
    border-right: 3px #4b8b2b solid;
    color: #fff;
    border-radius: 6px;
    width: 250px;
    text-align: center;
    line-height: 40px;
}
.title {
    color: #ff5a5a;
    font-size: 48px;
    font-family: 'Arial Black';
    letter-spacing: 1px;
    margin: 0;
}
.meta {
    font-size: 15px;
    color: #999;
    font-family: 'Arial';
    letter-spacing: 1px;
    margin-bottom: 80px;
    padding-bottom: 20px;
    border-bottom: #ccc 1px solid;
}
.item_title {
    font-family: 'Arial Black';
    font-size: 24px;
    border-left: 5px solid #ff5a5a;
    color: #ff5a5a;
    padding: 0 0 0 10px;
    line-height: 24px;
    margin-bottom: 50px;
}
h3 {
    color: #666;
    font-size: 15px;
    font-weight: bold;
}
.color {
    width: 200px;
    height: 60px;
    border-radius: 6px;
    line-height: 20px;
    padding-top: 20px;
    padding-left: 20px;
    color: #fff;
    font-size: 15px;
    background-color: #ff5a5a;
    margin-bottom: 60px;
}
.row {
    display: flex;
    width: 100%;
}
.m_r {
    margin-right: 20px;
}
.b1 {
    background-color: #5cac34;
}
.b2 {
    background-color: #fc4343;
}
.b3 {
    background-color: #e49a2b;
}
.b4 {
    background-color: #909399;
}
.bottom {
    margin-bottom: 50px;
}
</style>
