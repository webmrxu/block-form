<template>
  <div class="b-checkbox">
    <el-form-item  :label="item.title" :label-width="item.labelWidth" :prop="item.field" :rules="item._rules">
      <span slot="label">
        {{item.title}} <el-tooltip v-if="item.info" effect="dark" :content="item.info" placement="top-start"><i class="el-icon-info b-color"></i></el-tooltip>
      </span>
      <el-checkbox-group
        v-model="itemValue"
        @input="change"
        :placeholder="item.placeholder"
      >
        <el-checkbox v-for="(item, index) in list" :key="index" :label="item.value">{{item.name}}</el-checkbox>
      </el-checkbox-group>
      <span class="b-gray" v-if="list.length === 0">无选项</span>
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
    if (Array.isArray(this.item.params)) {
      this.list = this.item.params
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
.b-checkbox /deep/ .el-checkbox-group {
  font-size: 14px;
}
.b-gray {
  color: #777;
}
</style>
