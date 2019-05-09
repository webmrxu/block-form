<template>
  <div>
    <el-form-item :label="setting.title">
      <el-input v-model="itemValue" @input="change"></el-input>
    </el-form-item>
  </div>
</template>
<script>
export default {
  name: 'base-input',
  props: ['setting', 'value'],
  data () {
    return {
      itemValue: this.value
    }
  },
  methods: {
    change(value) {
      this.$emit('update:value', value)
    }
  }
}
</script>
