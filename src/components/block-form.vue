<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <input>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'block-from',
  data () {
    return {
      form: {}
    }
  }
}
</script>
