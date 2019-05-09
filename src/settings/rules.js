import BaseRules from './base-rules'
import utils from '@/utils/common'

let rules = [
  {
    id: '1', // 主键
    ruleName: 'require', // 主键
    ruleDes: '必填',
    errorMsg: '用户名称必填',
    formName: 'base', // 表单名称
    field: 'userName' // 字段名称
  }
]

rules.forEach(v => {
  BaseRules.forEach(k => {
    if (v.ruleName === k.ruleName) {
      utils.deepMerge(k, v)
    }
  })
})

export default rules
