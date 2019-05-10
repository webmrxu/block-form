<template>
  <div>
    <!-- <div @click="test">test</div> -->
    <div>
      <el-form ref="form" :model="formData" :label-width="formSetting.labelWidth">
        <component
          v-for="item in itemSetting"
          :is="'b-'+item.type"
          :key="item.id"
          :setting="item"
          :rule="item._rules"
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
export default {
  name: "block-from",
  components: {
    BInput,
    BSelect
  },
  props: ["itemSetting", "formData", "formSetting", "rules"],
  data() {
    return {
      itemStyleObject: {
        width: "200px"
      }
    };
  },
  created() {
    this.dealFormRules();
    // console.log(this.itemSetting)
  },
  methods: {
    // 处理 form-item 样式
    // 优先级（form-item.js > form.js > base-item.js）
    dealItemStyle(item) {
      return {
        width: item.itemWidth ? item.itemWidth : this.formSetting.itemWidth
      };
    },
    // 处理表单验证规则
    dealFormRules() {
      this.itemSetting.forEach(v => {
        if (Array.isArray(v.rules) && v.rules.length > 0) {
          this.$set(v, "_rules", []);
          v.rules.forEach(ruleId => {
            this.rules.forEach(k => {
              if (k.id === ruleId) {
                // 必填规则转换
                if (k.ruleTyle === "require") {
                  v._rules.push(this.convertRequire(k));
                }
              }
            });
          });
        }
      });
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
}
</style>
