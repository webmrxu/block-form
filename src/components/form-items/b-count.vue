<template>
  <div>
    <el-form-item
      :label="item.title"
      :rules="item._rules"
      :prop="item.field"
      :label-width="item.labelWidth"
    >
      <span slot="label" @click="labelClick">
        {{item.title}} <el-tooltip v-if="item.info" effect="dark" :content="item.info" placement="top-start"><i class="el-icon-info b-color"></i></el-tooltip>
      </span>
      <el-input-number v-model="itemValue" :placeholder="item.placeholder" @input="change"></el-input-number>
    </el-form-item>
  </div>
</template>
<script>
import { FormItem, InputNumber, Tooltip } from "element-ui"
import methods from './methods'
export default {
  name: "b-count",
  props: ["item", "value"],
  components: {
    'el-form-item': FormItem,
    'el-input-number': InputNumber,
    'el-tooltip': Tooltip
  },
  data() {
    return {
      itemValue: 0
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
