<template>
  <div>
    <div @click="test">test</div>
    <el-form ref="form" :model="formData" :label-width="formSetting.labelWidth">
      <component
        v-for="item in itemSetting"
        :is="'b-'+item.type"
        :key="item.id"
        :setting="item"
        :value.sync="formData[item.field]"
        :rule = "item._rules"
      ></component>
    </el-form>
  </div>
</template>
<script>
import BInput from "@/components/form-items/b-input"
import BSelect from "@/components/form-items/b-select"
export default {
  name: "block-from",
  components: {
    BInput,
    BSelect
  },
  props: ["itemSetting", "formData", "formSetting", "rules"],
  data() {
    return {
    }
  },
  created() {
    this.dealFormRules()
    // console.log(this.itemSetting)
  },
  methods: {
    // 处理表单验证规则
    dealFormRules() {
      this.itemSetting.forEach(v => {
        if (Array.isArray(v.rules) && v.rules.length > 0) {
          this.$set(v, "_rules", [])
          v.rules.forEach(ruleId => {
            this.rules.forEach(k => {
              if (k.id === ruleId) {
                v._rules.push(k)
              }
            })
          })
        }
      })
    },
    test() {
      console.log(this.formData)
    }
  }
}
</script>
