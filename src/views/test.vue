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
          itemWidth: '60%',
          rulesId: ['1']
        },
        {
          field: 'placeholder',
          type: 'count',
          title: '日期',
          itemWidth: '60%'
        },
        {
          field: 'itemWidth',
          type: 'email',
          title: '邮箱',
          itemWidth: '60%'
        }
      ]
    }
  }
};
</script>
