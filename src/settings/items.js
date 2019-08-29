const itemsSetting = [
  {
    type: 'input',
    placeholder: '请输入',
    title: '文本输入框',
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
    title: '邮箱输入框',
    field: 'userEmail',
    rulesId: ['1', '2']
  },
  {
    type: 'radio',
    title: '是否可选择',
    field: 'radiosfield',
    paramList: [
      {
        value: 'radiotrue',
        name: '是'
      },
      {
        value: 'radiofalse',
        name: '否'
      }
    ]
  },
  {
    type: 'switch',
    title: '开启服务项',
    field: 'switchfield'
  },
  {
    type: 'checkbox',
    placeholder: '请输入',
    title: '多选项输入',
    field: 'checkboxfield',
    paramList: [
      {
        value: 'type1',
        name: '主题1'
      },
      {
        value: 'type2',
        name: '主题2'
      }
    ]
  },
  {
    type: 'count',
    title: '计数输入框',
    field: 'countfield'
  },
  {
    type: 'date',
    title: '日期输入框',
    field: 'datefield'
  },
  {
    type: 'time',
    title: '时间输入框',
    field: 'timefield'
  },
  {
    type: 'rate',
    title: '评分输入框',
    field: 'ratefield'
  },
  {
    type: 'color',
    title: '颜色选择框',
    field: 'colorfield'
  }
]

export default itemsSetting
