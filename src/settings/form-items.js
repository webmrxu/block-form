import BaseItemSetting from './base-items'
const formSetting = [
  {
    type: 'input',
    title: '用户名称',
    field: 'userName'
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
      _tmpSetting.push({...b, ...f})
    }
  })
})

export default _tmpSetting
