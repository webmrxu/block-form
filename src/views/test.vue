<template>
  <div>
    <block-form :setting="setting" :formData="form" ref="formref"/>
    <div>
      <button @click="submit">submit</button> <button @click="validate">validate</button>
    </div>
  </div>
</template>

<script>
import BlockForm from '../components/block-form'
export default {
  name: "test",
  components: {
    BlockForm
  },
  methods: {
    submit() {
      console.log(this.form)
    },
    validate() {
      this.$refs.formref.validate(res => {
        console.log(res)
      })
    }
  },
  data() {
    return {
      form: {},
      setting: [
        {
          field: 'title',
          type: 'input',
          title: '标题',
          width: '60%',
          ruleIds: ['1']
        },
        {
          field: 'placeholder',
          type: 'count',
          title: '日期',
          width: '60%'
        },
        {
          field: 'width',
          type: 'email',
          title: '邮箱',
          width: '60%',
          info: '请按照正确的邮箱格式进行输入'
        },
        {
          field: 'select',
          type: 'select',
          title: '下拉选择',
          width: '60%',
          params: [
            {
              name: '选项1',
              value: 'value1'
            },
            {
              name: '选项2',
              value: 'value2'
            }
          ]
        },
        {
          field: 'checkbox',
          type: 'checkbox',
          title: '多选框',
          width: '60%',
          params: [
            {
              name: '选择1',
              value: '1'
            },
            {
              name: '选择2',
              value: '2'
            }
          ]
        },
        {
          type: 'table',
          title: '用户列表',
          field: 'names',
          setting: [
            {
              type: 'input',
              title: '姓名',
              field: 'name',
              width: '80%'
            },
            {
              type: 'number',
              title: '年龄',
              field: 'age',
              width: '80%'
            },
            {
              type: 'phoneNum',
              title: '手机号',
              field: 'phone',
              width: '80%'
            }
          ]
        }
      ]
    }
  }
};
</script>
