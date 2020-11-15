<template>
  <div class="title" slot="title">
    <div class="icon">
      <img :src="icon" alt />
    </div>
    <div class="text">
      <h2>
        <template v-if="titleImg">
            <img height="60" :src="titleImg" alt />
        </template>
        <template v-else>
            {{title}}
        </template>
      </h2>
      <p :style="{color: '#777'}">{{tags}}</p>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "pinkTitle",
  props: ["titleImg", "title", "tags", "directionReverse", "icon"],
  data() {
    return {};
  },
  computed: {
    ...mapState(["page"])
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.title {
  top: 40px;
  left: 0;
  position: absolute;
  display: flex;
  align-items: center;
}
.reverse .title {
  right: 0;
  left: auto;
  text-align: right;
  flex-direction: row-reverse;
}
.title h2 {
  font-size: 48px;
  margin: 0 0 5px;
}
.title img {
  display: block;
}
.title p {
  margin: 0;
  font-size: 16px;
}
.icon {
  border-radius: 100px;
  width: 59px;
  height: 77px;
  margin-right: 20px;
}
.reverse .icon{
  margin-left: 20px;
  margin-right: 0;
}
</style>

