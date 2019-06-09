<template>
  <div>
    <el-form-item  :label="setting.title" :label-width="setting.labelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域" @input="change" class="b-select">
        <el-option v-for="item in list" :key="item.value" :label="item.name" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
  </div>
</template>
<script>
export default {
  name: 'b-select',
  props: ['setting'],
  data() {
    return {
      list: [],
      form: {}
    }
  },
  mounted() {
    if (Array.isArray(this.setting.paramList)) {
      this.list = this.setting.paramList;
    }
    // console.log(this.setting)
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
