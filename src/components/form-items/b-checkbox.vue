<template>
  <div>
    <el-form-item  :label="item.title" :label-width="item.labelWidth" :prop="item.field" :rules="item._rules">
      <el-checkbox-group
        v-model="itemValue"
        @input="change" class="b-select"
        :placeholder="item.placeholder"
      >
        <el-checkbox v-for="item in list" :key="item.value" :label="item.value">{{item.name}}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </div>
</template>
<script>
import { FormItem, CheckboxGroup, Checkbox } from "element-ui";
export default {
  name: 'b-checkbox',
  props: ['item'],
  components: {
    'el-form-item': FormItem,
    'el-checkbox-group': CheckboxGroup,
    'el-checkbox': Checkbox
  },
  data() {
    return {
      itemValue: [],
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
    if (Array.isArray(this.item.paramList)) {
      this.list = this.item.paramList
    }
    // console.log(this.item)
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
