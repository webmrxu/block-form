const editSetting = [
  {
    type: 'input',
    title: '标题',
    field: 'title',
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
    type: 'input',
    title: '默认提示文字',
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
    type: 'input',
    title: '组件布局',
    field: 'userName',
    itemWidth: '60%',
    rules: ['1']
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
