<template>
  <div>
    <div @click="test">test</div>
    <el-form ref="form" :model="form" label-width="120px">
      <component v-for="item in setting" :is="'b-'+item.type" :key="item.id" :setting="item" :value.sync="formData[item.field]"></component>
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
  props: ['setting', 'formData'],
  data () {
    return {
      form: {}
    }
  },
  mounted() {
    console.log(this.setting)
  },
  methods: {
    test() {
      console.log(this.formData)
    }
  }
}
</script>
