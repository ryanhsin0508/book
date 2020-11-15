<template>
  <div>
    <div v-if="type === 'button'" class="langSelector">
      <div v-for="item in language" :key="item.code"
        class="langBtn" :class="{active: selectedLang.code === item.code }"
        type="text" @click="handleChangeLang(item)">
        {{ item.name }}
      </div>
    </div>
    <div v-if="type === 'dropList'" class="langSelector dropDown">
      <el-select class="navLang" v-model="currentLangDrop"
        @change="handleDropChange" :placeholder="selectedLang.name">
        <el-option v-for="item in language" :key="item.code"
          :label="item.name" :value="item.code">
        </el-option>
      </el-select>
    </div>
  </div>

</template>

<script type="text/javascript">
export default {
    data() {
        return {
            currentLangDrop: '',
            currentLang: 'en',
        };
    },
    props: {
        type: {
            type: String,
            default: 'button'
        },
        lang: {
            type: String,
            default: 'en'
        },
        language: {
            type: Array,
            required: true
        },
        isAuth: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        selectedLang() {
            // 若外部傳遞的 lang 空值，將預設為 en
            this.currentLang = this.lang ? this.lang : 'en';

            let temp = this.language.find(item => item.code === this.currentLang);

            // 若未找到符合資料，將預設回傳陣列第一筆語系資料
            if (!temp) return this.language[0];

            return temp;
        }
    },
    methods: {
        handleChangeLang(currentLang) {
            let lang = currentLang.code;
            //  如果有登入, 跟父層調用 updateProfile api, 並傳遞當前所選語系
            if (this.isAuth) {
                this.$emit('updateProfile', lang);
            } else {
                // 未登入狀態，直接將當前所選語系儲存到 vuex、cookies
                this.$emit('updateLanguage', lang);
                this.$emit('setLangToCookie', lang);
            }
        },
        handleDropChange() {
            const langData = this.language.find(item => item.code === this.currentLangDrop);
            this.handleChangeLang(langData);
        }
    }
};
</script>
<style scoped>
.langSelector {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
}

.langBtn {
    padding: 0;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    flex: 0 0 auto;
    cursor: pointer;
    user-select: none;
}

.langBtn + .langBtn {
    position: relative;
    margin-left: 20px;
}

.langBtn + .langBtn::before {
    content: '.';
    position: absolute;
    top: -5px;
    left: -11px;
    color: inherit;
    font-size: 18px;
}

.langBtn:hover,
.langBtn.active {
    color: #ff5a5a;
}
</style>
