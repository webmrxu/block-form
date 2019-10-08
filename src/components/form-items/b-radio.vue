<template>
  <div>
    <el-form-item  :label="item.title" :label-width="item.labelWidth" :prop="item.field" :rules="item._rules">
      <el-radio-group
        v-model="form.region"
        @input="change" class="b-select"
        :placeholder="item.placeholder"
      >
        <el-radio v-for="item in list" :key="item.value" :label="item.value" :value="item.value">{{item.name}}</el-radio>
      </el-radio-group>
    </el-form-item>
  </div>
</template>
<script>
import { FormItem, RadioGroup, Radio } from "element-ui";
export default {
  name: 'b-radio',
  props: ['item'],
  components: {
    'el-form-item': FormItem,
    'el-radio-group': RadioGroup,
    'el-radio': Radio
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
  },
  methods: {
    change(value) {
      this.$emit("update:value", value)
    }
  }
}
</script>

<style scoped >
.b-select {
  width: 100%;
}
</style>
