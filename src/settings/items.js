import BaseItemSetting from './base-items'
import utils from '@/utils/common'
const formSetting = [
  {
    type: 'input',
    title: '用户名称',
    field: 'userName',
    rules: ['1']
  },
  {
    type: 'select',
    title: '性别',
    field: 'userSex'
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
