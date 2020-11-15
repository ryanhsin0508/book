<template>
    <div class="rule">
        <h1>Components-Driven development</h1>
        <div class="meta">
            The big CDD era is coming, are you ready to be a happy builder?
        </div>
        <section>
            <h2>1 - 確保組件的完全獨立</h2>
            * 簡單開發：獨立設計元件，讓元件測試不必依賴整體環境。
        </section>
        <section>
            <h2>2 - 確保畫面設計使用率</h2>
            * 能用單一元件模擬所有情境，自然就不會設計出使用不到的情境，或是該有的情境卻沒設計到及所有元件的狀態。
        </section>
        <section>
            <h2>3 - 建立良好的資料插槽</h2>
            * 設計 Props 時應考慮到型別及預設值，並將組件在常用的範圍下，盡量的規劃出客製化參數，增添大家使用上的變化性。
        </section>
        <section>
            <h2>4 - 對事件的透明與獨立</h2>
            * 如 eventBus、自定義事件。使用子傳父的方式做組建溝通。
        </section>
        <section>
            <h2>5 - 將屬性分配給正確的元素</h2>
            * 不僅限於可隨意關閉或調整元素。html 的標籤使用也需情境化使用。
        </section>
        <section>
            <h2>6 - 限制組件內部樣式 (scoped)</h2>
            * 加入 CSS 作用域，避免影響專案上的 style ，並盡量不使用預處理器。
        </section>
        <section>
            <h2>7 - CSS 定義時，以最低單元作為考量</h2>
            * 確保最小組件的線性，讓使用者自行利用父層定義寬高間距及外觀樣式。
        </section>
        <section>
            <h2>8 - 確認支援裝置的使用</h2>
            * 跨瀏覽器及跨系統跨裝置的情境下使用確認。
        </section>
        <section>
            <h2>9 - 只做單純的事</h2>
            * 確保組件內不做任何資料溝通，僅作畫面與交互性功能處理。
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