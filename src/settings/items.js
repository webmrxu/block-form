import BaseItemSetting from './base-items'
import utils from '@/utils/common'
const formSetting = [
  {
    type: 'input',
    title: '文本框',
    field: 'userName',
    rules: ['1']
  },
  {
    type: 'select',
    title: '文本框',
    field: 'userSex'
  },
  {
    type: 'email',
    title: '邮箱',
    field: 'userEmail',
    rules: ['1', '2']
  }
]
let _tmpSetting = []
// 扩展基础form配置
BaseItemSetting.forEach(b => {
  formSetting.forEach(f => {
    if (b.type === f.type) {
      _tmpSetting.push(utils.deepMerge(b, f))
    }
  })
})

export default _tmpSetting
