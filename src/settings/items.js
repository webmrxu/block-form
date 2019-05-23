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
    field: 'userSex',
    paramCode: 'code',
    paramList: [
      {
        value: 'ali',
        name: '正则'
      },
      {
        value: 'tent',
        name: '无效'
      }
    ]
  },
  {
    type: 'email',
    title: '邮箱',
    field: 'userEmail',
    rules: ['1']
  }
]
let _tmpSetting = []
// 扩展基础form配置
BaseItemSetting.forEach(b => {
  formSetting.forEach(f => {
    if (b.type === f.type) {
      _tmpSetting.push(utils.deepMerge(f, b))
    }
  })
})

export default _tmpSetting
