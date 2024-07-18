import moment from 'moment'

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
    // ellipsis: true,
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
    // ellipsis: true,
  },
]

export const developmentColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    // ellipsis: true,
  },
  {
    title: 'Tech',
    dataIndex: 'tech',
    key: 'tech',
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
    // ellipsis: true,
  },
]

export const fourColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    // ellipsis: true,
  },
  {
    title: 'Progress',
    dataIndex: 'progress',
    key: 'progress',
    sorter: (a, b) => progressSorter(a, b),
    // ellipsis: true,
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    sorter: (a, b) => a.quantity - b.quantity,
    // ellipsis: true,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
    // ellipsis: true,
  },
]
