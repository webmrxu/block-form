const baseItemsSetting = [
  {
    id: '1',
    type: 'input',
    title: '文本框',
    itemWidth: '50%',
    labelWidth: '150px',
    itemHeight: '62px',
    placeholder: '请输入'
  },
  {
    id: '2',
    type: 'select',
    title: '下拉选择框',
    itemWidth: '50%',
    labelWidth: '150px',
    itemHeight: '62px',
    paramsList: [
      {
        value: 'value1',
        name: '测试'
      }
    ]
  },
  {
    id: '4',
    type: 'input',
    title: '数值',
    rulesId: ['3'],
    itemWidth: '50%',
    labelWidth: '150px',
    itemHeight: '62px',
    placeholder: '请输入'
  },
  {
    id: '5',
    type: 'checkbox',
    title: '多选框',
    itemWidth: '50%',
    labelWidth: '150px',
    itemHeight: '62px',
    paramsList: [
      {
        value: 'value1',
        name: '测试'
      }
    ]
  },
  {
    id: '6',
    type: 'count',
    title: '数值选择',
    itemWidth: '50%',
    labelWidth: '150px',
    itemHeight: '62px'
  },
  {
    id: '7',
    type: 'date',
    title: '日期选择',
    itemWidth: '50%',
    labelWidth: '150px',
    itemHeight: '62px',
    placeholder: '请输入'
  },
  {
    id: '8',
    type: 'radio',
    title: '单选框',
    itemWidth: '50%',
    labelWidth: '150px',
    itemHeight: '62px',
    paramsList: [
      {
        value: 'value1',
        name: '测试'
      }
    ]
  },
  {
    id: '9',
    type: 'rate',
    title: '评分',
    itemWidth: '50%',
    labelWidth: '150px',
    itemHeight: '62px'
  },
  {
    id: '10',
    type: 'switch',
    title: '开关',
    itemWidth: '50%',
    labelWidth: '150px',
    itemHeight: '62px'
  },
  {
    id: '11',
    type: 'time',
    title: '时间选择',
    itemWidth: '50%',
    labelWidth: '150px',
    itemHeight: '62px',
    placeholder: '请输入'
  },
  {
    id: '12',
    type: 'color',
    title: '颜色选择',
    itemWidth: '50%',
    labelWidth: '150px',
    itemHeight: '62px'
  },
  {
    id: '13',
    type: 'input',
    title: '邮箱',
    rulesId: ['2'],
    itemWidth: '50%',
    labelWidth: '150px',
    itemHeight: '62px'
  }
]

export default baseItemsSetting
