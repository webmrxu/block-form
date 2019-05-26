<template>
  <div class="clearfix home">
    <div @click="test">test</div>
    <!-- 字段列表 -->
    <div class="formitem-box">
      <div>
        <div @click="addInputItem('input')">
          <span>文本框</span>
        </div>
      </div>
      <div>
        <div @click="addInputItem('select')">
          <span>下拉选择框</span>
        </div>
      </div>
      <div>
        <div @click="addInputItem('email')">
          <span>邮箱</span>
        </div>
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
      <div class="show-setting" @click="showSetting = true;">setting</div>
    </div>
    <!-- 字段自定义区 -->
    <div>
      <div v-if="showItemEdit" class="b-mask" @click="showItemEdit=false"></div>
      <transition name="fade">
        <div v-if="showItemEdit" class="form-custom b-form">
          <div class="clearfix b-form-title">
            <div class="float-l">输入组件修改</div> <div class="float-r bf-form-close" @click="showItemEdit=false">X</div>
          </div>
          <div>
            hello world
          </div>
        </div>
      </transition>
    </div>
    <!-- 展示积木表单配置 -->
    <div>
      <div v-if="showSetting" class="b-mask" @click="showSetting=false"></div>
      <transition name="fade">
        <div v-if="showSetting" class="form-custom b-form">
          <div class="clearfix b-form-title">
            <div class="float-l">展示积木表单配置</div> <div class="float-r bf-form-close" @click="showSetting=false">X</div>
          </div>
          <div>
            <pre class="language-css"><code class="language-css">p { color: red }</code></pre>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import BlockFrom from "@/components/block-form";
import BaseItems from "@/settings/base-items";
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
      },
      showItemEdit: false, // 展示组件配置
      showSetting: false
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
    test() {
      this.showItemEdit = !this.showItemEdit;
    },
    dealWindowResize() {
      let windowWidth = window.document.documentElement.getBoundingClientRect()
        .width;
      let margin = windowWidth - 793;
      this.formBoxStyle.marginLeft = margin / 2 - 375 + "px";
    },
    addInputItem(type) {
      BaseItems.forEach(v => {
        if (v.type === type) {
          v.field = '_' + v.type + '_' + utils.uuid(7);
          v['_isNewAdd'] = true;
          this.itemSetting.push(v);
        }
      })
    }
  }
};
</script>
<style scoped>
.show-setting{
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px 15px;
  cursor: pointer;
}
.bf-form-close{
  cursor: pointer;
}
.float-r{
  float: right;
}
.b-form-title{
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
}
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
  padding-top: 20px;
  padding-right: 16px;
  position: relative;
}
.formitem-box{
  margin-top: 8px;
  background: #fff;
}
.formitem-box>div{
  width: 50%;
  float: left;
}
.formitem-box>div>div{
  margin: 8px;
  border: 1px solid #eee;
  padding: 10px 8px;
  cursor: pointer;
}
.form-custom{
  position: fixed;
  width: 600px;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  z-index: 120;
  border-left: 1px solid #eee;
}
.b-mask{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 110;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  width: 0px;
}
.float-l{
  float: left;
}
.clearfix::after {
    display: block;
    clear: both;
    content: "";
}
</style>
