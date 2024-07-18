import moment from 'moment'
import { Progress } from '../../../../components/antd'

const removePercentage = (data) => {
  const newData = Number(data.replace('%', ''))
  return newData
}

const progressSorter = (a, b) => {
  const newA = removePercentage(a.progress)
  const newB = removePercentage(b.progress)
  return newA - newB
}

export const complexColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    ellipsis: true,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    sorter: (a, b) => a.name.localeCompare(b.name),
    // ellipsis: true,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
    // ellipsis: true,
  },
  {
    title: 'Progress',
    dataIndex: 'progress',
    key: 'progress',
    sorter: (a, b) => progressSorter(a, b),
    render: (data) => (
      <Progress
        percent={removePercentage(data)}
        showInfo={false}
      />
    ),
    // ellipsis: true,
  },
]