const itemsSetting = [
  {
    type: 'input',
    placeholder: '请输入',
    title: '文本框',
    field: 'userName',
    rulesId: ['3']
  },
  {
    type: 'select',
    placeholder: '请输入',
    title: '下拉选择框',
    field: 'parteents',
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
    title: '邮箱',
    field: 'userEmail',
    rulesId: ['1', '2']
  }
]

export default itemsSetting
