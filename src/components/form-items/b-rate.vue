<template>
  <div>
    <el-form-item :label="item.title" :rules="item._rules" :prop="item.field" :label-width="item.labelWidth">
      <span slot="label">
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
import { FormItem, Rate } from "element-ui";
export default {
  name: "b-rate",
  props: ["item", "value"],
  components: {
    'el-form-item': FormItem,
    'el-rate': Rate
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
  methods: {
    change(value) {
      this.$emit("update:value", value)
    }
  }
}
</script>
