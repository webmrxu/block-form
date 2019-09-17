<template>
  <div>
    <el-form-item :label="item.title" :rules="item._rules" :prop="item.field" :label-width="item.labelWidth">
      <el-switch
        v-model="itemValue"
        :placeholder="item.placeholder"
        @input="change"
      ></el-switch>
    </el-form-item>
  </div>
</template>
<script>
import { FormItem, Switch } from "element-ui";
export default {
  name: "base-input",
  props: ["item", "value"],
  components: {
    'el-form-item': FormItem,
    'el-switch': Switch
  },
  data() {
    return {
      itemValue: false
    }
  },
  watch: {
    value(value) {
      this.itemValue = value
    }
  },
  mounted() {
  },
  methods: {
    change(value) {
      this.$emit("update:value", value)
    }
  }
}
</script>
