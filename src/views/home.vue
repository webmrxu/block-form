<template>
  <div class="clearfix home">
    <!-- 字段列表 -->
    <div class="formitem-box">
      <div>
        <span>输入框</span>
      </div>
      <div>
        <span>数值输入</span>
      </div>
    </div>
    <!-- 表单展示区 -->
    <div class="form-box">
      <div>
        <el-form ref="form" :model="form" label-width="80px">
          <base-input/>
        </el-form>
      </div>
    </div>
    <!-- 字段自定义区 -->
    <div class="form-custom">
    </div>
  </div>
</template>
<script>
import BaseInput from '@/components/form-items/base-input'
export default {
  name: 'home',
  components: {
    BaseInput
  },
  data () {
    return {
      form: {}
    }
  }
}
</script>
<style scoped>
.home>div{
  float: left;
  width: 20%;
}
/* .formitem-box{
  width: 50rem;
  height: 500px;
  float: left;
  border: 1px solid #eee;
}
.form-box{
  width: 50rem;
  height: 500px;
  float: left;
  border: 1px solid #eee;
} */
</style>
