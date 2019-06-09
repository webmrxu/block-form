<template>
  <div>
    <el-form-item :label="setting.title" :rules="rule" :prop="setting.field" :label-width="setting.labelWidth">
      <el-input v-model="itemValue" @input="change" ></el-input>
    </el-form-item>
  </div>
</template>
<script>
export default {
  name: "base-input",
  props: ["setting", "value", "rule"],
  data() {
    return {
      itemValue: this.value
    }
  },
  mounted() {
    // console.log(this.setting)
  },
  methods: {
    change(value) {
      this.$emit("update:value", value)
    }
  }
}
</script>
