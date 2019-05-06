import baseFormSetting from './base-form'
const formSetting = [
  {
    type: 'input'
  },
  {
    type: 'select'
  }
]
// 扩展基础form配置
baseFormSetting.forEach(b => {
  formSetting.forEach(f => {
    if (b.type === f.type) {
      f = Object.assign(b, f)
    }
  })
})

export default formSetting
