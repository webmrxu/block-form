<template>
  <div>
    <el-form-item  :label="item.title" :label-width="item.labelWidth" :prop="item.field" :rules="item._rules">
      <span slot="label" @click="labelClick">
        {{item.title}} <el-tooltip v-if="item.info" effect="dark" :content="item.info" placement="top-start"><i class="el-icon-info b-color"></i></el-tooltip>
      </span>
      <el-select
        v-model="form.region"
        @input="change" class="b-select"
        :placeholder="item.placeholder"
      >
        <el-option v-for="(item,index) in list" :key="index" :label="item.name" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
  </div>
</template>
<script>
import { FormItem, Select, Option, Tooltip } from "element-ui"
import methods from './methods'
export default {
  name: 'b-select',
  props: ['item'],
  components: {
    'el-form-item': FormItem,
    'el-select': Select,
    'el-option': Option,
    'el-tooltip': Tooltip
  },
  data() {
    return {
      list: [],
      form: {}
    }
  },
  watch: {
    value(value) {
      this.itemValue = value
    }
  },
  mounted() {
    if (Array.isArray(this.item.params)) {
      this.list = this.item.params
    }
    // console.log(this.item)
  },
  methods: methods
}
</script>

<style scoped >
.b-select {
  width: 100%;
}
</style>
