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
        <block-from/>
      </div>
    </div>
    <!-- 字段自定义区 -->
    <div class="form-custom">
    </div>
  </div>
</template>
<script>
import Input from '@/components/form-items/input'
import BlockFrom from '@/components/block-form'
export default {
  name: 'home',
  components: {
    Input,
    BlockFrom
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
