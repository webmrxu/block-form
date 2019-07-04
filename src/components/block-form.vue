<template>
  <div>
    <!-- <div @click="test">test</div> -->
    <div>
      <el-form ref="form" :model="formData" class="clearfix">
        <component
          v-for="item in itemSetting"
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
    };
  },
  created() {
    this.dealFormRules();
  },
  watch: {
    itemSetting(newV, oldV) {
      newV.forEach(v => {
        if (v["_isNewAdd"]) {
          this.dealRule(v);
        }
      });
    }
  },
  methods: {
    dealItemStyle(item) {
      return {
        // width: item.itemWidth ? item.itemWidth : this.formSetting.itemWidth
      };
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
    },
    test() {
      console.log(this.formData);
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
