# block-form

> block form

积木表单


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

1 setting 表单配置
2 formData 表单数据(输入)

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

+ require 必填


# Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


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
