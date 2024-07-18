import moment from 'moment'
import { Progress } from '../../../components/antd'

const removePercentage = (data) => {
  const newData = Number(data.replace('%', ''))
  return newData
}

const progressSorter = (a, b) => {
  const newA = removePercentage(a.progress)
  const newB = removePercentage(b.progress)
  return newA - newB
}

export const columns = [
  {
    name: 'Complex Table',
    data: [
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
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
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
      },
    ],
  },
  {
    name: 'Check Table',
    data: [
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
    ],
  },
  {
    name: 'Development Table',
    data: [
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
        render: (data) => (
          <div
            style={{
              display: 'flex',
              gap: 5,
            }}
          >
            {data}
          </div>
        ),
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
        width: '22%',
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
    ],
  },
  {
    name: 'Four Column Table',
    data: [
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
    ],
  },
]
