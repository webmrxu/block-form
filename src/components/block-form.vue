<template>
  <div>
    <div @click="test">test</div>
    <el-form ref="form" :model="form" :label-width="FormSetting.labelWidth">
      <component v-for="item in itemSetting" :is="'b-'+item.type" :key="item.id" :setting="item" :value.sync="formData[item.field]"></component>
    </el-form>
  </div>
</template>
<script>
import BInput from '@/components/form-items/b-input'
import BSelect from '@/components/form-items/b-select'
export default {
  name: 'block-from',
  components: {
    BInput,
    BSelect
  },
  props: ['itemSetting', 'formData', 'FormSetting'],
  data () {
    return {
      form: {}
    }
  },
  mounted() {
    console.log(this.itemSetting)
  },
  methods: {
    test() {
      console.log(this.formData)
    }
  }
}
</script>
