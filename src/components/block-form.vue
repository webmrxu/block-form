<template>
  <div>
    <div>
      <el-form ref="form" :model="formData" class="clearfix">
        <component
          v-for="(item,index) in Psetting"
          :is="'b-'+item.type"
          :key="index"
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
import 'element-ui/lib/theme-chalk/index.css'
import BInput from "../components/form-items/b-input.vue"
import BSelect from "../components/form-items/b-select.vue"
import BCheckbox from "../components/form-items/b-checkbox.vue"
import BCount from "../components/form-items/b-count.vue"
import BDate from "../components/form-items/b-date.vue"
import BRadio from "../components/form-items/b-radio.vue"
import BRate from "../components/form-items/b-rate.vue"
import BSwitch from "../components/form-items/b-switch.vue"
import BTime from "../components/form-items/b-time.vue"
import BColor from "../components/form-items/b-color.vue"
// element ui
import { Form } from "element-ui"
import Utils from "../Utils/common"
// 基础表单配置
import BaseItems from "../settings/base-items"
// form 表单验证规则
import Rules from "../settings/rules"

export default {
  name: "block-from",
  components: {
    BInput,
    BCheckbox,
    BCount,
    BDate,
    BRate,
    BRadio,
    BSwitch,
    BTime,
    BSelect,
    BColor,
    "el-form": Form
  },
  props: ["setting", "formData", "formSetting"],
  data() {
    return {
      Psetting: []
    }
  },
  created() {
    this.Psetting = this.setting
    this.mergesetting()
    this.dealFormRules()
  },
  watch: {
    setting(newV, oldV) {
      this.Psetting = newV
      this.mergesetting()
      this.dealFormRules()
    }
  },
  methods: {
    dealItemStyle(item) {
      return {
        width: item.itemWidth || item.itemWidth
      }
    },
    // 重置验证规则
    clearValidate() {
      this.$refs["form"].clearValidate()
    },
    // 触发表单验证
    validate(callBack) {
      this.$refs["form"].validate(valid => {
        let result = false
        if (valid) {
          result = true
        } else {
          result = false
        }
        callBack && callBack(result)
      })
    },
    // 合并基础配置。
    mergesetting() {
      let items = []
      if (this.Psetting && this.Psetting.length && this.Psetting.length > 0) {
        this.Psetting.forEach(v => {
          this.mergeBaseSetting(v)
          this.mergeRule(v)
          items.push(v)
        })
      }
    },
    // 合并验证规则
    mergeRule(v) {
      if (v.rulesId && Array.isArray(v.rulesId) && v.rulesId.length > 0) {
        v.rules = []
        v.rulesId.forEach(rId => {
          Rules.forEach(R => {
            if (rId === R.id) {
              v.rules.push(R)
            }
          })
        })
      }
    },
    // 合并基础配置
    mergeBaseSetting(v) {
      BaseItems.forEach(b => {
        if (v.type === b.type) {
          Utils.deepMerge(v, b)
        }
      })
    },
    // 处理表单验证规则
    dealFormRules() {
      if (this.Psetting && this.Psetting.length > 0) {
        this.Psetting.forEach(v => {
          this.dealRule(v)
        })
      }
    },
    // 处理单个验证规则
    dealRule(v) {
      if (v.rules && Array.isArray(v.rules) && v.rules.length > 0) {
        this.$set(v, "_rules", [])
        v.rules.forEach(k => {
          if (k.ruleTyle === "require") {
            v._rules.push(this.convertRequire(k))
          }
          // 正则规则转换
          if (k.ruleTyle === "pattern") {
            v._rules.push(this.convertPattern(k))
          }
        })
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
      }
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
      }
    }
  }
}
</script>
<style scoped>
.form-item-component {
  float: left;
}
.clearfix::after {
  display: block;
  clear: both;
  content: "";
}
</style>
