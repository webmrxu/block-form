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
        <block-from :itemSetting="itemSetting" :formData="formData" :FormSetting="FormSetting" :rules="rules"/>
      </div>
    </div>
    <!-- 字段自定义区 -->
    <div class="form-custom">
    </div>
  </div>
</template>
<script>
import BlockFrom from '@/components/block-form'
import ItemsSetting from '@/settings/items'
import FormSetting from '@/settings/form'
import Rules from '@/settings/rules'

export default {
  name: 'home',
  components: {
    BlockFrom
  },
  data() {
    return {
      rules: [],
      itemSetting: [],
      FormSetting: {},
      formData: {
        // userName: 'tom',
        // userSex: 'man'
      }
    }
  },
  created() {
    this.itemSetting = ItemsSetting
    this.FormSetting = FormSetting
    this.rules = Rules
    console.log(Rules)
  },
  methods: {
  }
}
</script>
<style scoped>
.home>div{
  float: left;
  width: 20%;
}
</style>
