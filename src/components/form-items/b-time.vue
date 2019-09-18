<template>
  <div>
    <el-form-item :label="item.title" :rules="item._rules" :prop="item.field" :label-width="item.labelWidth">
      <el-time-picker
        v-model="itemValue"
        :placeholder="item.placeholder"
        value-format="HH:mm:ss"
        :picker-options="{
          selectableRange: '00:00:00 - 23:59:59'
        }"
        @input="change"
      ></el-time-picker>
    </el-form-item>
  </div>
</template>
<script>
import { FormItem, TimePicker } from "element-ui";
export default {
  name: "b-time",
  props: ["item", "value"],
  components: {
    'el-form-item': FormItem,
    'el-time-picker': TimePicker
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
  },
  methods: {
    change(value) {
      this.$emit("update:value", value)
    }
  }
}
</script>
