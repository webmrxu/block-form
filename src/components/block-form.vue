<template>
  <div>
    <div>
      <el-form ref="form" :model="formData" class="clearfix">
        <component
          v-for="item in PItemSetting"
          :is="'b-'+item.type"
          :key="item.id"
          :item="item"
          :value.sync="formData[item.field]"
          :style="dealItemStyle(item)"
          class="form-item-component"
        ></component>
      </el-form>
    </div>
  </div>
</template>
<script>
import BInput from "@/components/form-items/b-input";
import BSelect from "@/components/form-items/b-select";
import BEmail from "@/components/form-items/b-email";
import Utils from "@/Utils/common";
// 基础表单配置
import BaseItems from "@/settings/base-items";
// form 表单验证规则
import Rules from "@/settings/rules";

export default {
  name: "block-from",
  components: {
    BInput,
    BSelect,
    BEmail
  },
  props: ["itemSetting", "formData", "formSetting"],
  data() {
    return {
      PItemSetting: []
    };
  },
  created() {
    // this.dealFormRules();
  },
  watch: {
    itemSetting(newV, oldV) {
      this.PItemSetting = newV;
      this.mergeItemSetting();
      this.dealFormRules();
    }
  },
  methods: {
    dealItemStyle(item) {
      return {
        width: item.itemWidth || item.itemWidth
      };
    },
    // 重置验证规则
    clearValidate() {
      this.$refs['form'].clearValidate()
    },
    // 触发表单验证
    validate(callBack) {
      this.$refs['form'].validate((valid) => {
        let result = false
        if (valid) {
          result = true
        } else {
          result = false
        }
        callBack && callBack(result)
      });
    },
    // 合并基础配置。
    mergeItemSetting() {
      let items = [];
      if (this.PItemSetting && this.PItemSetting.length && this.PItemSetting.length > 0) {
        this.PItemSetting.forEach(v => {
          this.mergeBaseSetting(v);
          this.mergeRule(v);
          items.push(v);
        });
      }
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
    // 处理表单验证规则
    dealFormRules() {
      this.PItemSetting.forEach(v => {
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
.form-item-component {
  float: left;
  height: 62px;
}
</style>
