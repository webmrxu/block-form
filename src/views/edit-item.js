import rules from '../settings/rules'
let baseRules = []
rules.forEach(v => {
  baseRules.push({
    value: v.id,
    name: v.ruleName
  })
})
const editSetting = [
  {
    field: 'title',
    type: 'input',
    title: '输入框名称',
    width: '60%',
    ruleIds: ['1']
  },
  {
    field: 'placeholder',
    type: 'input',
    title: '输入框提示',
    width: '60%'
  },
  {
    field: 'info',
    type: 'input',
    title: '附加输入提示',
    width: '60%',
    info: '附加输入提示'
  },
  {
    field: 'ruleIds',
    type: 'checkbox',
    title: '验证规则',
    width: '60%',
    params: baseRules
  },
  {
    type: 'input',
    title: '组件布局',
    field: 'userName',
    width: '60%'
  }
]

export default editSetting;
