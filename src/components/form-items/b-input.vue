<template>
  <div>
    <el-form-item :label="item.title" :rules="item._rules" :prop="item.field" :label-width="item.labelWidth">
      <span slot="label" @click="labelClick">
        {{item.title}} <el-tooltip v-if="item.info" effect="dark" :content="item.info" placement="top-start"><i class="el-icon-info b-color"></i></el-tooltip>
      </span>
      <el-input
        v-model="itemValue"
        :placeholder="item.placeholder"
        @input="change"
      ></el-input>
    </el-form-item>
  </div>
</template>
<script>
import { FormItem, Input, Tooltip } from "element-ui"
import methods from './methods'
export default {
  name: "b-input",
  props: ["item", "value"],
  components: {
    'el-form-item': FormItem,
    'el-input': Input,
    'el-tooltip': Tooltip
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
  methods: methods
}
</script>
