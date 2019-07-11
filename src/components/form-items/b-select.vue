<template>
  <div>
    <el-form-item  :label="item.title" :label-width="item.labelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域" @input="change" class="b-select">
        <el-option v-for="item in list" :key="item.value" :label="item.name" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
  </div>
</template>
<script>
export default {
  name: 'b-select',
  props: ['item'],
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
    if (Array.isArray(this.item.paramList)) {
      this.list = this.item.paramList;
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
