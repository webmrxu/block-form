// import BaseRules from './base-rules'
// import utils from '@/utils/common'

let rules = [
  {
    id: '1', // 主键
    ruleName: 'require', // 主键
    required: true,
    ruleDes: '必填',
    trigger: 'blur', // 触发验证方式
    message: '必填项'
  }
]

// rules.forEach(v => {
//   BaseRules.forEach(k => {
//     if (v.ruleName === k.ruleName) {
//       utils.deepMerge(k, v)
//     }
//   })
// })

export default rules
