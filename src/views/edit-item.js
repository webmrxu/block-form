const editSetting = [
  {
    field: 'title',
    type: 'input',
    title: '标题',
    width: '60%',
    rules: ['1']
  },
  {
    field: 'placeholder',
    type: 'input',
    title: '默认提示文字',
    width: '60%',
    rules: ['1']
  },
  {
    field: 'width',
    type: 'input',
    title: '组件宽度',
    width: '60%',
    rules: ['1']
  },
  {
    field: 'height',
    type: 'input',
    title: '组件高度',
    width: '60%',
    rules: ['1']
  },
  {
    field: 'labelWidth',
    type: 'input',
    title: '标题宽度',
    width: '60%',
    rules: ['1']
  },
  {
    type: 'input',
    title: '描述',
    field: 'userName',
    width: '60%',
    rules: ['1']
  },
  {
    type: 'select',
    title: '验证规则',
    field: 'parteents',
    paramCode: 'code',
    width: '60%',
    params: [
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
    type: 'input',
    title: '组件布局',
    field: 'userName',
    width: '60%',
    rules: ['1']
  }
]

export default editSetting;
