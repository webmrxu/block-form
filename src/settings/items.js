const itemsSetting = [
  {
    type: 'input',
    placeholder: '请输入',
    title: '文本输入框',
    field: 'userName',
    ruleIds: ['3'],
    info: '添加输入提示'
  },
  {
    type: 'select',
    placeholder: '请输入',
    title: '下拉选择框',
    field: 'parteents',
    ruleIds: ['1'],
    params: [
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
    type: 'radio',
    title: '是否可选择',
    field: 'radiosfield',
    params: [
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
    field: 'ratefield',
    info: '您的评分很重要，请谨慎评分'
  },
  {
    type: 'checkbox',
    placeholder: '请输入',
    title: '多选项输入',
    field: 'checkboxfield',
    params: [
      {
        value: 'type1',
        name: '主题1'
      },
      {
        value: 'type2',
        name: '主题2'
      }
    ]
  }
]

export default itemsSetting
