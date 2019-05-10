/**
 * 验证规则
 * 在README.md 文档中有详细介绍
 */
let rules = [
  {
    id: '1',
    ruleTyle: 'require',
    ruleName: '必填',
    ruleDes: '输入框必填',
    message: '必填输入项',
    trigger: 'blur',
    pattern: '',
    minlen: '',
    maxlen: '',
    minrang: '',
    maxrang: ''
  },
  {
    id: '2',
    ruleTyle: 'pattern',
    ruleName: '邮箱格式',
    ruleDes: '邮箱格式正则验证',
    message: '输入的邮箱格式错误',
    trigger: 'blur',
    pattern: '\\w[-w.+]*@([A-Za-z0-9][-A-Za-z0-9]+.)+[A-Za-z]{2,14}',
    minlen: '',
    maxlen: '',
    minrang: '',
    maxrang: ''
  }
]

export default rules
