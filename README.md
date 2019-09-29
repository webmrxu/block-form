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
    <block-form :itemSetting="setting" :formData="form" />
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
          rules: ['1']
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


# 目录结构

```
src/
  components/ 组件目录
    block-form.vue 积木表单核心组件
    form-items/积木表单组件子组件(输入组件)
      input.vue  基础输入组件
  settings  积木表单配置(对应数据库表)
    base-item.js  基础输入组件配置
    form-item.js  form表单输入组件配置，继承于base-item配置
      排序字段
    form.js  表单全局配置，优先级（form-item.js > form.js > base-item.js）
    rules.js  输入组件验证规则配置

```

# block-from 组件

积木表单核心组件。

## 属性

+ itemSetting 表单配置
+ formData 表单数据(输入)

## 事件

1 @change 整个form表单输入值改变时触发

## Slot

# b-input 组件（文本框）

# itemSetting: baseObject

+ type: 'input'  类型
+ title: '文本框'  输入框标题
+ itemWidth: 输入框宽度

itemSeting: formObject

+ type: input  类型
+ title: string  输入框标题  default: 文本框

# itemSetting: item

+ type: 'input'  类型
+ title: '文本框'  输入框标题
+ itemWidth: 输入框宽度

# formSetting

+ itemWidth: 输入框宽度

# rules
id ruleTyle ruleName ruleDes   message         trigger   pattern     minlen        maxlen        minrang       maxrang      
   规则类型 规则名称 规则描述  验证错误提示信息   触发规则  正则表达式  最小输入长度  最大输入长度  number最小值  number最大值
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
// 实例
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

# core components

```
form
label-position 表单域标签的位置	string	right/left/top	right
label-width 表单域标签的宽度，作为 Form 直接子元素的 form-item 会继承该值	string	—	—
Form Methods
validate	对整个表单进行校验的方法。若不传入回调函数，则会返回一个 promise	Function(callback: Function(boolean))
validateField	对部分表单字段进行校验的方法	Function(prop: string, callback: Function(errorMessage: string))
resetFields	对整个表单进行重置，将所有字段值重置为初始值并移除校验结果	-
clearValidate	移除整个表单的校验结果	-

Form-Item Attributes
prop	表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的	string	传入 Form 组件的 model 中的字段	—
label	标签文本	string	—	—
label-width	表单域标签的的宽度，例如 '50px'	string	—	—
rules	表单验证规则	object	—	—
Form-Item Methods
resetField	对该表单项进行重置，将其值重置为初始值并移除校验结果	-
```

# 问题

1 使用npm 安装并使用时，表单验证规则失效


## LICENSE
[MIT](LICENSE)

