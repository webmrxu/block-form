const itemsSetting = [
  {
    type: 'input',
    itemStyleObj: {
      color: '#aaa'
    },
    placeholder: '请输入',
    itemLayout: 'left-right', // top-bottom
    title: '文本框',
    field: 'userName',
    rulesId: ['1']
  },
  {
    type: 'select',
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
    itemStyleObj: {
      color: '#aaa'
    },
    placeholder: '请输入',
    itemLayout: 'left-right', // top-bottom
    title: '邮箱',
    field: 'userEmail',
    rulesId: ['1', '2']
  }
]

export default itemsSetting
