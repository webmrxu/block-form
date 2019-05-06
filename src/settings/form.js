import baseFormSetting from './base-form'
const formSetting = [
  {
    type: 'input',
    title: '用户名称'
  },
  {
    type: 'select'
  }
]
let _tmpSetting = []
// 扩展基础form配置
baseFormSetting.forEach(b => {
  formSetting.forEach(f => {
    if (b.type === f.type) {
      _tmpSetting.push({...b, ...f})
    }
  })
})

export default _tmpSetting
