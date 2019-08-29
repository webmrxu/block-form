<template>
  <div>
    <el-form-item :label="item.title" :rules="item._rules" :prop="item.field" :label-width="item.labelWidth">
      <el-input-number
        v-model="itemValue"
        :placeholder="item.placeholder"
        @input="change"
      ></el-input-number>
    </el-form-item>
  </div>
</template>
<script>
export default {
  name: "base-input",
  props: ["item", "value"],
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
