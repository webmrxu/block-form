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

# title 

输入标题

# params

Array:Object 类型

```js
{
  name: '', // 显示名称
  value: '' // 绑定的值
}
```

# rulesId

form表单验证id,

只有提供有限的表单验证规则，后期会添加自定义验证规则


