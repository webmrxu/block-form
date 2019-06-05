import BaseItemSetting from './base-items'
import utils from '@/utils/common'
const formSetting = [
  {
    type: 'input',
    itemWidth: '60%',
    labelWidth: '150px',
    labelHeight: '62px',
    itemStyleObj: {
      color: '#aaa'
    },
    placeholder: '请输入',
    itemLayout: 'left-right', // top-bottom
    title: '文本框',
    field: 'userName',
    rules: ['1']
  },
  {
    type: 'select',
    itemWidth: '60%',
    labelWidth: '150px',
    labelHeight: '62px',
    itemStyleObj: {
      color: '#aaa'
    },
    placeholder: '请输入',
    itemLayout: 'left-right', // top-bottom
    title: '下拉选择框',
    field: 'parteents',
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
    itemWidth: '60%',
    labelWidth: '150px',
    labelHeight: '62px',
    itemStyleObj: {
      color: '#aaa'
    },
    placeholder: '请输入',
    itemLayout: 'left-right', // top-bottom
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
