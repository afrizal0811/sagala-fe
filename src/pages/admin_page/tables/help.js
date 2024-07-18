import moment from 'moment'
import { Progress } from '../../../components/antd'
export const ActionItems = [
  {
    key: '1',
    label: (
      <a
        href={false}
        onClick={() => {
          alert('1st menu item clicked')
        }}
      >
        Add New Item
      </a>
    ),
  },
]

const removePercentage = (data) => {
  const newData = Number(data.replace('%', ''))
  return newData
}
const progressSorter = (a, b) => {
  const newA = Number(a.progress.replace('%', ''))
  const newB = Number(b.progress.replace('%', ''))
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
    render: (data) => <Progress percent={removePercentage(data)} showInfo={false}/>,
    // ellipsis: true,
  },
]

export const developmentColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    ellipsis: true,
  },
  {
    title: 'Tech',
    dataIndex: 'tech',
    key: 'tech',
    width: '20%',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
    width: '20%',
  },
  {
    title: 'Progress',
    dataIndex: 'progress',
    key: 'progress',
    sorter: (a, b) => progressSorter(a, b),
    render: (data) => (
      <Progress
        percent={removePercentage(data)}
        percentPosition={{
          align: 'start',
          type: 'outer',
        }}
      />
    ),
  },
]

export const fourColumns = [
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
