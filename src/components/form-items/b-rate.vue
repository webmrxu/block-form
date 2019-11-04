<template>
  <div>
    <el-form-item :label="item.title" :rules="item._rules" :prop="item.field" :label-width="item.labelWidth">
      <span slot="label" @click="labelClick">
        {{item.title}} <el-tooltip v-if="item.info" effect="dark" :content="item.info" placement="top-start"><i class="el-icon-info b-color"></i></el-tooltip>
      </span>
      <el-rate
        v-model="itemValue"
        :placeholder="item.placeholder"
        @input="change"
        style="margin-top:10px;"
      ></el-rate>
    </el-form-item>
  </div>
</template>
<script>
import { FormItem, Rate, Tooltip } from "element-ui"
import methods from './methods'
export default {
  name: "b-rate",
  props: ["item", "value"],
  components: {
    'el-form-item': FormItem,
    'el-rate': Rate,
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
