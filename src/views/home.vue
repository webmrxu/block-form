<template>
  <div class="clearfix home">
    <!-- <div @click="test">test</div> -->
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
      <div class="form-container">
        <block-from :itemSetting="itemSetting" :formData="formData" />
        <div v-if="true" class="edit-box" >
          <div v-for="item in itemSetting" :key="item.field" @click="showEditItem(item)" :style="{width: item.itemWidth}">
            <span>{{item.title}}</span>
          </div>
        </div>
      </div>
      <!-- 点击在字段展示字段配置编辑 -->
      <div class="show-setting" @click="showSetting = true;">show settings</div>
    </div>
    <!-- 字段自定义区 -->
    <div>
      <div v-if="showItemEditState" class="b-mask" @click="showItemEditState=false"></div>
      <transition name="fade">
        <div v-if="showItemEditState" class="form-custom b-form">
          <div class="clearfix b-form-title">
            <div class="float-l">输入组件修改</div>
            <div class="float-r bf-form-close" @click="showItemEditState=false">X</div>
          </div>
          <div class="bf-form-body">
            <block-from :itemSetting="editSetting" :formData="formData" />
          </div>
        </div>
      </transition>
    </div>
    <!-- 展示积木表单配置 -->
    <div>
      <div v-if="showSetting" class="b-mask" @click="showSetting=false"></div>
      <transition name="fade">
        <div v-if="showSetting" class="form-custom b-form">
          <div>
            <div class="clearfix b-form-title">
              <div class="float-l">展示积木表单配置</div>
              <div class="float-r bf-form-close" @click="showSetting=false">X</div>
            </div>
            <div class="bf-form-body">
              <h2>itemSetting 配置</h2>
              <pre class="language-json"><code class="language-json">{{itemSettingStr}}</code></pre>
              <!-- <h2>FormSetting 配置</h2>
              <pre class="language-json"><code class="language-json">{{FormSetting}}</code></pre>-->
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import Utils from "@/Utils/common";
// 积木表单组件
import BlockFrom from "@/components/block-form";
// 基础表单配置
import BaseItems from "@/settings/base-items";
// form 表单验证规则
import Rules from "@/settings/rules";
// 编辑字段表单配置
import EditSetting from "./edit-item";
// 核心字段配置
import ItemsSetting from "@/settings/items";

export default {
  name: "home",
  components: {
    BlockFrom
  },
  data() {
    return {
      rules: [],
      itemSetting: [],
      formData: {},
      formBoxStyle: {
        marginLeft: "100px"
      },
      showItemEditState: false, // 展示组件配置
      showSetting: false,
      editSetting: {}
    };
  },
  created() {
    this.itemSetting = this.mergeItemSetting();
    // console.log(this.itemSetting);
    this.editSetting = EditSetting;
    let _this = this;
    this.dealWindowResize();
    this.dealFormRules();
    window.onresize = Utils.debounce(_this.dealWindowResize, 500);
  },
  computed: {
    itemSettingStr() {
      return JSON.stringify(this.itemSetting, null, 2);
    }
  },
  methods: {
    // 测试
    test() {
      this.showItemEditState = !this.showItemEditState;
    },
    // 合并基础配置。
    mergeItemSetting() {
      let items = [];

      ItemsSetting.forEach(v => {
        this.mergeBaseSetting(v);
        this.mergeRule(v);
        items.push(v);
      });
      return items;
    },
    // 合并验证规则
    mergeRule(v) {
      if (v.rulesId && Array.isArray(v.rulesId) && v.rulesId.length > 0) {
        v.rules = [];
        v.rulesId.forEach(rId => {
          Rules.forEach(R => {
            if (rId === R.id) {
              v.rules.push(R);
            }
          });
        });
      }
    },
    // 合并基础配置
    mergeBaseSetting(v) {
      BaseItems.forEach(b => {
        if (v.type === b.type) {
          Utils.deepMerge(v, b);
        }
      });
    },
    // 显示该该字段配置
    showEditItem(item) {
      this.showItemEditState = true;
    },
    // 处理浏览器缩放
    dealWindowResize() {
      let windowWidth = window.document.documentElement.getBoundingClientRect()
        .width;
      let margin = windowWidth - 793;
      this.formBoxStyle.marginLeft = margin / 2 - 375 + "px";
    },
    // 新增一个字段
    addInputItem(type) {
      BaseItems.forEach(v => {
        if (v.type === type) {
          v.field = "_" + v.type + "_" + Utils.uuid(7);
          v["_isNewAdd"] = true;
          this.mergeRule(v);
          this.dealRule(v);
          this.itemSetting.push(v);
        }
      });
    },
    // 处理表单验证规则
    dealFormRules() {
      this.itemSetting.forEach(v => {
        this.dealRule(v);
      });
    },
    // 处理单个验证规则
    dealRule(v) {
      if (v.rules && Array.isArray(v.rules) && v.rules.length > 0) {
        this.$set(v, "_rules", []);
        v.rules.forEach(k => {
          if (k.ruleTyle === "require") {
            v._rules.push(this.convertRequire(k));
          }
          // 正则规则转换
          if (k.ruleTyle === "pattern") {
            v._rules.push(this.convertPattern(k));
          }
        });
      }
    },
    // 正则规则转换
    convertPattern(rule) {
      return {
        id: rule.id,
        ruleName: rule.ruleName,
        ruleDes: rule.ruleDes,
        trigger: rule.trigger,
        message: rule.message,
        pattern: new RegExp(rule.pattern)
      };
    },
    // 必填规则转换
    convertRequire(rule) {
      return {
        id: rule.id,
        ruleName: rule.ruleName,
        required: true,
        ruleDes: rule.ruleDes,
        trigger: rule.trigger,
        message: rule.message
      };
    }
  }
};
</script>
<style scoped>
.edit-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.edit-box > div {
  height: 62px;
  /* width: 60%; */
  cursor: pointer;
}
.form-container {
  position: relative;
}
.bf-form-body {
  padding: 8px;
}
.show-setting {
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px 15px;
  cursor: pointer;
}
.bf-form-close {
  cursor: pointer;
}
.float-r {
  float: right;
}
.b-form-title {
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
.formitem-box {
  margin-top: 8px;
  background: #fff;
}
.formitem-box > div {
  width: 50%;
  float: left;
}
.formitem-box > div > div {
  margin: 8px;
  border: 1px solid #eee;
  padding: 10px 8px;
  cursor: pointer;
}
.form-custom {
  position: fixed;
  width: 600px;
  right: 0;
  top: 0;
  bottom: 0;
  background: #fff;
  z-index: 120;
  border-left: 1px solid #eee;
  overflow-y: scroll;
}
.b-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 110;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  width: 0px;
}
.float-l {
  float: left;
}
.clearfix::after {
  display: block;
  clear: both;
  content: "";
}
</style>
