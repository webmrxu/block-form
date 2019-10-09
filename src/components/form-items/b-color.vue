<template>
  <div class="b-color">
    <el-form-item
      :label="item.title"
      :rules="item._rules"
      :prop="item.field"
      :label-width="item.labelWidth"
    >
      <el-color-picker v-model="itemValue" :placeholder="item.placeholder" @input="change"></el-color-picker>
    </el-form-item>
  </div>
</template>
<script>
import { FormItem, ColorPicker } from "element-ui";
export default {
  name: "b-color",
  props: ["item", "value"],
  components: {
    'el-form-item': FormItem,
    'el-color-picker': ColorPicker
  },
  data() {
    return {
      itemValue: '#409EFF'
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
<style scoped>
.b-color /deep/ .el-color-picker {
  display: block;
}
</style>
