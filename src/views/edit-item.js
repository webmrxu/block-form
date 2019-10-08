const editSetting = [
  {
    field: 'title',
    type: 'input',
    title: '标题',
    itemWidth: '60%',
    rules: ['1']
  },
  {
    field: 'placeholder',
    type: 'input',
    title: '默认提示文字',
    itemWidth: '60%',
    rules: ['1']
  },
  {
    field: 'itemWidth',
    type: 'input',
    title: '组件宽度',
    itemWidth: '60%',
    rules: ['1']
  },
  {
    field: 'itemHeight',
    type: 'input',
    title: '组件高度',
    itemWidth: '60%',
    rules: ['1']
  },
  {
    field: 'labelWidth',
    type: 'input',
    title: '标题宽度',
    itemWidth: '60%',
    rules: ['1']
  },
  {
    type: 'input',
    title: '描述',
    field: 'userName',
    itemWidth: '60%',
    rules: ['1']
  },
  {
    type: 'select',
    title: '验证规则',
    field: 'parteents',
    paramCode: 'code',
    itemWidth: '60%',
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
    itemWidth: '60%',
    rules: ['1']
  }
]

export default editSetting;
