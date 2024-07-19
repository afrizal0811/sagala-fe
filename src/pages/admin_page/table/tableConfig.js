import moment from 'moment'
import { Button, Progress } from '../../../components/antd'

const removePercentage = (data) => {
  const newData = Number(data.replace('%', ''))
  return newData
}

const progressSorter = (a, b) => {
  const newA = removePercentage(a.progress)
  const newB = removePercentage(b.progress)
  return newA - newB
}

export const columns = (handleDelete) => [
  {
    name: 'Complex Table',
    data: [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: 100,
        sorter: (a, b) => a.name.localeCompare(b.name),
        ellipsis: true,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: 100,
        sorter: (a, b) => a.name.localeCompare(b.name),
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        width: 100,
        sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
      },
      {
        title: 'Progress',
        dataIndex: 'progress',
        key: 'progress',
        width: 100,
        sorter: (a, b) => progressSorter(a, b),
        render: (data) => (
          <Progress
            percent={removePercentage(data)}
            showInfo={false}
          />
        ),
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        width: 100,
        render: (item, record, index) => (
          <Button
            danger={true}
            type='primary'
            onClick={() => handleDelete(index + 1)}
          >
            Delete
          </Button>
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
        width: 100,
        sorter: (a, b) => a.name.localeCompare(b.name),
        ellipsis: true,
      },
      {
        title: 'Progress',
        dataIndex: 'progress',
        key: 'progress',
        width: 100,
        sorter: (a, b) => progressSorter(a, b),
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
        width: 100,
        sorter: (a, b) => a.quantity - b.quantity,
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        width: 100,
        render: (item, record, index) => (
          <Button
            danger={true}
            type='primary'
            onClick={() => handleDelete(index + 1)}
          >
            Delete
          </Button>
        ),
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
        width: 100,
        sorter: (a, b) => a.name.localeCompare(b.name),
        ellipsis: true,
      },
      {
        title: 'Tech',
        dataIndex: 'tech',
        key: 'tech',
        width: 100,
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
        width: 100,
      },
      {
        title: 'Progress',
        dataIndex: 'progress',
        key: 'progress',
        width: 100,
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
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        width: 100,
        render: (item, record, index) => (
          <Button
            danger={true}
            type='primary'
            onClick={() => handleDelete(index + 1)}
          >
            Delete
          </Button>
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
        width: 100,
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
        width: 100,
        sorter: (a, b) => a.quantity - b.quantity,
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        width: 100,
        sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        width: 100,
        render: (item, record, index) => (
          <Button
            danger={true}
            type='primary'
            onClick={() => handleDelete(index + 1)}
          >
            Delete
          </Button>
        ),
      },
    ],
  },
]
