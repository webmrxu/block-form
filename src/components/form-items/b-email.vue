<template>
  <div>
    <el-form-item :label="item.title" :rules="item._rules" :prop="item.field" :label-width="item.labelWidth">
      <el-input
        v-model="itemValue"
        @input="change"
        :placeholder="item.placeholder"
      ></el-input>
    </el-form-item>
  </div>
</template>
<script>
import { FormItem, Input } from "element-ui";
export default {
  name: "base-email",
  props: ["item", "value"],
  components: {
    'el-form-item': FormItem,
    'el-form-item': Input
  },
  data() {
    return {
      itemValue: ''
    }
  },
  watch: {
    value(value) {
      this.itemValue = value
    }
  },
  mounted() {
    // console.log(this.item)
  },
  methods: {
    change(value) {
      this.$emit("update:value", value)
    }
  }
}
</script>
