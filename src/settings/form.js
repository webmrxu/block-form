import BaseFormSetting from './base-form'
let formSetting = {
}
let keys = Object.keys(BaseFormSetting)
keys.forEach(v => {
  if (typeof formSetting[v] === 'undefined') {
    formSetting[v] = BaseFormSetting[v]
  }
})
export default formSetting
