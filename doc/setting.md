# field

string 类型

字段名称，类似form 中name 属性，也是组件双向绑定的属性

整个配置中值唯一，如果不唯一会有冲突

默认值 无

# type 

枚举类型

取值有：email, number, idcard, url, phoneNum, checkbox, color, count, date, input, radio, rate, select, switch, time

email 邮箱输入

number 数值输入

idcard 身份证输入

url 链接输入

phoneNum 手机号输入

checkbox 多选框输入

color 颜色输入

count 计数输入

date 日期输入

input 文本输入

radio 单选框输入

rate 评分输入

select 下拉选择输入

switch 开关组件输入

time 时间输入

table 表格编辑

# title 

输入标题, 为了美观，建议标题长度限制在 2~6 个字的长度。如果长度不够，可以使用 `info` 配置，添加输入提示

# info 

label 提示

# params

Array:Object 类型

```js
{
  name: '', // 显示名称
  value: '' // 绑定的值
}
```

# ruleIds

Array:String 枚举类型

form表单验证id

1 必填验证

2 邮箱格式

3 正整数验证

4 身份证号码验证

5 手机号验证

6 url验证

[../src/settings/rules.js](../src/settings/rules.js)

# width

单个输入框的宽度

默认为 50%

# height

单个输入框的高度

默认为 62px

# labelWidth

label 的标题的宽度

默认为 150px

# setting

Array：Object

Object 对应当前文档配置

table 表格编辑， type 为table 时可用， 其他type 会忽略




