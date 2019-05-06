# block-form

> block form

积木表单


# 目录结构
src/
  components/ 组件目录
    block-form.vue 积木表单核心组件
    form-items/积木表单组件子组件(输入组件)
      input.vue  基础输入组件
  settings
    base-form.js 基础form表单配置
    form.js  form表单配置，继承于base-form配置

## Build Setup

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
