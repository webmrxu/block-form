# block-form

> block form

积木表单


# 目录结构
src/
  components/ 组件目录
    block-form.vue 积木表单核心组件
    form-items/积木表单组件子组件(输入组件)
      input.vue  基础输入组件
  settings  积木表单配置(对应数据库表)
    base-form.js 基础form表单配置
    form.js  form表单配置，继承于base-form配置

# block-from 组件

积木表单核心组件。

## 属性

1 setting 表单配置
2 formData 表单数据(输入和输出)

## 事件

1 @change 整个form表单输入值改变时触发

## Slot

# b-input 组件（文本框）

itemSetting: baseObject

+ type: 'input'  类型
+ title: '文本框'  输入框标题

itemSeting: formObject

+ type: input  类型
+ title: string  输入框标题  default: 文本框

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
