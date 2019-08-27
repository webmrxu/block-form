const itemsSetting = [
  {
    type: 'input',
    placeholder: '请输入',
    itemLayout: 'top-bottom', // top-bottom
    title: '文本框',
    field: 'userName',
    rulesId: ['1']
  },
  {
    type: 'select',
    placeholder: '请输入',
    itemLayout: 'left-right', // top-bottom
    title: '下拉选择框',
    field: 'parteents',
    paramCode: 'code',
    rulesId: ['1'],
    paramList: [
      {
        value: 'zz',
        name: '正则'
      },
      {
        value: 'wx',
        name: '无效'
      }
    ]
  },
  {
    type: 'email',
    placeholder: '请输入',
    itemLayout: 'left-right', // top-bottom
    title: '邮箱',
    field: 'userEmail',
    rulesId: ['1', '2']
  }
]

export default itemsSetting
