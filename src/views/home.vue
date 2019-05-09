<template>
  <div class="clearfix home">
    <!-- 字段列表 -->
    <div class="formitem-box">
      <div>
        <span>输入框</span>
      </div>
      <div>
        <span>数值输入</span>
      </div>
    </div>
    <!-- 表单展示区 -->
    <div class="form-box" :style="formBoxStyle">
      <div>
        <block-from
          :itemSetting="itemSetting"
          :formData="formData"
          :formSetting="FormSetting"
          :rules="rules"
        />
      </div>
    </div>
    <!-- 字段自定义区 -->
    <!-- <div class="form-custom">
    </div>-->
  </div>
</template>
<script>
import BlockFrom from "@/components/block-form";
import ItemsSetting from "@/settings/items";
import FormSetting from "@/settings/form";
import Rules from "@/settings/rules";
import utils from "@/utils/common";

export default {
  name: "home",
  components: {
    BlockFrom
  },
  data() {
    return {
      rules: [],
      itemSetting: [],
      FormSetting: {},
      formData: {
        // userName: 'tom',
        // userSex: 'man'
      },
      formBoxStyle: {
        marginLeft: "100px"
      }
    };
  },
  created() {
    this.itemSetting = ItemsSetting;
    this.FormSetting = FormSetting;
    this.rules = Rules;
    let _this = this;
    this.dealWindowResize();
    window.onresize = utils.debounce(_this.dealWindowResize, 500);
  },
  methods: {
    dealWindowResize() {
      let windowWidth = window.document.documentElement.getBoundingClientRect()
        .width;
      let margin = windowWidth - 793;
      this.formBoxStyle.marginLeft = margin / 2 - 375 + "px";
    }
  }
};
</script>
<style scoped>
.home > div {
  float: left;
  height: 500px;
  border: 1px solid #eee;
}
.formitem-box {
  width: 370px;
}
.form-box {
  width: 793px;
  background: #fff;
  overflow: hidden;
  border: 1px solid #e3e3e3;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.06);
  width: 794px;
  min-height: 995px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8px;
  margin-bottom: 25px;
}
</style>
