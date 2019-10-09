<template>
  <div>
    <el-form-item
      :label="item.title"
      :rules="item._rules"
      :prop="item.field"
      :label-width="item.labelWidth"
    >
      <span slot="label">
        {{item.title}} <el-tooltip v-if="item.info" effect="dark" :content="item.info" placement="top-start"><i class="el-icon-info b-color"></i></el-tooltip>
      </span>
      <el-date-picker
        v-model="itemValue"
        :placeholder="item.placeholder"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd"
        @input="change"
      ></el-date-picker>
    </el-form-item>
  </div>
</template>
<script>
import { FormItem, DatePicker } from "element-ui";
export default {
  name: "b-date",
  props: ["item", "value"],
  components: {
    'el-form-item': FormItem,
    'el-date-picker': DatePicker
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
