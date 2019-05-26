const editSetting = [{
  type: 'input',
  title: '文本框',
  field: 'userName',
  itemWidth: '80%',
  rules: ['1']
},
{
  type: 'select',
  title: '文本框',
  field: 'parteents',
  paramCode: 'code',
  itemWidth: '80%',
  paramList: [{
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
  itemWidth: '80%',
  rules: ['1']
}
]

export default editSetting;
