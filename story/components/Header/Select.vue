<template>
    <div>
        <div
            class="navLogo"
            v-if="hasOptions"
        >
            <a :href="groupLogoLink">
                <img
                    :src="groupLogoImg"
                    :style="{ 
                    height: `${groupLogoHeight}px`,
                    marginRight: `${groupLogoMargin}px`
                }"
                >
            </a>
        </div>

        <el-select
            v-model="selectedOption"
            :class="customStyle ? customStyle : 'header-select'"
            :placeholder="selectedSelected.name"
            @change="handleDropChange"
        >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.name"
                :value="item.value"
            >
            </el-option>
        </el-select>
        <!-- <p>選擇：{{selectedOption}}</p> -->

    </div>
</template>

<script>
export default {
    data () {
        return {
            //預設選項不是placeholder
            // selectedOption: (this.selected !== undefined && this.selected != null) ? this.options.find(option => option.value === selected) : null
            // currentLang: (this.lang !== undefined && this.lang != null) ? this.options.find(option => option.value === currentLang) : null,
            selectedOption: 'Hong Kong 香港',
            currentSelected: 'hk',
        }
    },
    props: {
        //下拉選單資料
        options: {
            type: [Array, Object],
            default: []
        },
        //客製化樣式(class name)
        customStyle: {
            type: String,
            default: ''
        },
        //預設顯示文字
        selected: {
            type: String,
            default: 'Hong Kong 香港'
        },
        //家族Logo 右邊間距
        groupLogoMargin: {
            type: Number,
            default: 20
        },
        //家族Logo 高度
        groupLogoHeight: {
            type: Number,
            default: 24
        },
        //家族Logo 圖片來源
        groupLogoImg: {
            type: String,
            default: 'https://assets.girlstyle.com/girlstyle-tw/static/images/presslogic-logo.png'
        },
        //家族Logo 連結
        groupLogoLink: {
            type: String,
            default: 'https://www.presslogic.com/'
        }
    },
    computed: {
        hasOptions () {
            return Boolean(this.options.length)
        },
        selectedSelected () {
            this.currentSelected = this.selected ? this.selected : 'Hong Kong 香港';
            return this.options.find(item => item.name === this.currentSelected);
        }
    },
    methods: {
        handleDropChange (value) {
            this.$emit('clickOption', value)
        }
    },
    mounted () {
    },
    destroyed () {
    }
}
</script>

<style scoped>
a {
    display: inline-block;
    text-decoration: none;
}
.navLogo {
    position: relative;
    display: inline-block;
}
.navLogo img {
    display: inline-block;
    vertical-align: middle;
}
.el-input__suffix {
    padding: 0 8px 0 0;
}
.header-select >>> .el-input__inner {
    background: none;
    border: none;
    color: #fff !important;
    width: 164px;
    font-style: italic;
    font-weight: 300;
    font-family: noto sans, sans-serif;
}
.header-select .el-icon-arrow-up.is-reverse {
    top: -10px;
}
.header-select .el-icon-arrow-up {
    position: relative;
    top: 10px;
    transition: none !important;
}
.el-select {
    display: inline-block;
    position: relative;
}
.header-select >>> .el-select__caret {
    color: #fff;
}
.el-input__suffix {
    right: 5px;
    transition: all 0.3s;
    pointer-events: none;
}
.header-select .el-icon-arrow-up {
    color: #fff !important;
}
</style>