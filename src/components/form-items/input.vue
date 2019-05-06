<template>
  <div>
    <el-form-item label="活动名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
  </div>
</template>
<script>
export default {
  name: 'base-input',
  data () {
    return {
      form: {}
    }
  }
}
</script>
