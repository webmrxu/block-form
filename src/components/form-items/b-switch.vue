<template>
  <div>
    <el-form-item :label="item.title" :rules="item._rules" :prop="item.field" :label-width="item.labelWidth">
      <span slot="label">
        {{item.title}} <el-tooltip v-if="item.info" effect="dark" :content="item.info" placement="top-start"><i class="el-icon-info b-color"></i></el-tooltip>
      </span>
      <el-switch
        v-model="itemValue"
        :placeholder="item.placeholder"
        @input="change"
      ></el-switch>
    </el-form-item>
  </div>
</template>
<script>
import { FormItem, Switch, Tooltip } from "element-ui";
export default {
  name: "b-switch",
  props: ["item", "value"],
  components: {
    'el-form-item': FormItem,
    'el-switch': Switch,
    'el-tooltip': Tooltip
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
