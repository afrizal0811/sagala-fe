import moment from 'moment'

const removePercentage = (data) => {
  const newData = Number(data.replace('%', ''))
  return newData
}

const progressSorter = (a, b) => {
  const newA = removePercentage(a.progress)
  const newB = removePercentage(b.progress)
  return newA - newB
}

export const checkColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    ellipsis: true,
  },
  {
    title: 'Progress',
    dataIndex: 'progress',
    key: 'progress',
    sorter: (a, b) => progressSorter(a, b),
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    sorter: (a, b) => a.quantity - b.quantity,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
  },
]
