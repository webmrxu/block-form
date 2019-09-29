# block-form

积木表单

# Install

```
$ npm install block-form
```

# Quick Start

```html
<template>
  <div id="app">
    <block-form :setting="setting" :formData="form" ref="form"/>
    <div>
      <button @click="test">test</button>
    </div>
  </div>
</template>

<script>
import BlockForm from 'block-form'
export default {
  name: "quck-start",
  components: {
    BlockForm
  },
  methods: {
    test() {
      this.$refs.form.validate()
      console.log(this.form)
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
```


# 核心组件

```
src/
  components/ 组件目录
    block-form.vue 积木表单核心form 父组件
    form-items/ 积木表单组件子组件(输入组件) 子组件
      b-input.vue  基础输入组件
      b-checkbox.vue 复选框输入组件
      b-color.vue 颜色选择输入组件
      b-count.vue 数值计数输入组件
      b-date.vue 日期输入组件
      b-email.vue 邮箱格式输入组件
      b-number.vue 数值格式输入组件
      b-radio.vue 单选输入组件
      b-rate.vue 评分输入组件
      b-select.vue 下拉选择输入组件
      b-switch.vue 开关输入组件
      b-time.vue 时间输入组件
```

# block-from 组件

积木表单核心组件。

## 属性

+ setting: Array[Object](./doc/setting.md) 表单配置
+ formData:Object 表单数据(输入输出)双向绑定

## 事件

TODO list

## 方法

### clearValidate

重置验证规则

### validate

触发表单验证


# 验证规则
|id |ruleTyle |ruleName | ruleDes|  message | trigger |  pattern   |  minlen      |  maxlen     |   minrang   |    maxrang      
| ---- | ---- |---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | 
|id |规则类型 |规则名称 |规则描述 | 验证错误提示信息 |  触发规则 | 正则表达式|  最小输入长度|  最大输入长度 | number最小值|  number最大值

+ 规则类型 (len：输入长度；require：必填；range 范围；pattern：正则)
+ 规则名称 
+ 规则描述
+ 验证错误提示信息
+ 触发规则（'change'，'blur'）
+ 正则表达式（只有当 ruleTyle 值为pattern 时才生效）
+ 最小输入长度（只有当 ruleTyle 值为len 时才生效）
+ 最大输入长度（只有当 ruleTyle 值为len 时才生效）
+ number最小值（只有当 ruleTyle 值为range 时才生效）
+ number最大值（只有当 ruleTyle 值为range 时才生效）

```js
// 验证规则实例
let rules = [
  {
    id: '',
    ruleTyle: '',
    ruleName: '',
    ruleDes: '',
    message: '',
    trigger: '',
    pattern: '',
    minlen: '',
    maxlen: '',
    minrang: '',
    maxrang: ''
  }
]

```

# 记录
1 父组件setting属性，改为子组件不再直接对这个对象进行处理，使用clone出新对象进行处理。TODOLIST


# 问题

1 


## LICENSE
[MIT](LICENSE)

