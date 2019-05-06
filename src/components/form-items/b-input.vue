<template>
  <div>
    <el-form-item :label="setting.title">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
  </div>
</template>
<script>
export default {
  name: 'base-input',
  props: ['setting'],
  data () {
    return {
      form: {}
    }
  },
  mounted() {
    // console.log(this.setting)
  }
}
</script>
