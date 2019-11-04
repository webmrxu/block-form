<template>
  <div class="b-color">
    <el-form-item
      :label="item.title"
      :rules="item._rules"
      :prop="item.field"
      :label-width="item.labelWidth"
    >
      <span slot="label" @click="labelClick">
        {{item.title}} <el-tooltip v-if="item.info" effect="dark" :content="item.info" placement="top-start"><i class="el-icon-info b-color"></i></el-tooltip>
      </span>
      <el-color-picker v-model="itemValue" :placeholder="item.placeholder" @input="change"></el-color-picker>
    </el-form-item>
  </div>
</template>
<script>
import { FormItem, ColorPicker, Tooltip } from "element-ui"
import methods from './methods'
export default {
  name: "b-color",
  props: ["item", "value"],
  components: {
    'el-form-item': FormItem,
    'el-color-picker': ColorPicker,
    'el-tooltip': Tooltip
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
  methods: methods
}
</script>
<style scoped>
.b-color /deep/ .el-color-picker {
  display: block;
}
</style>
