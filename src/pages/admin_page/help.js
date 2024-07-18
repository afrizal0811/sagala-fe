import {
  AndroidFilled,
  AppleFilled,
  CheckCircleFilled,
  CloseCircleFilled,
  ExclamationCircleFilled,
  PlusCircleOutlined,
  WindowsFilled,
} from '@ant-design/icons'
import { Flex } from 'antd'
import { Checkbox, DatePicker, Input, Radio } from '../../components/antd'

export const ActionItems = (showModal, setTableTitle, title) => {
  const handleClick = () => {
    setTableTitle(title)
    showModal()
  }
  return [
    {
      key: '1',
      label: (
        <a
          href='/#'
          onClick={handleClick}
        >
          <PlusCircleOutlined /> Add
        </a>
      ),
    },
  ]
}

const techOptions = [
  {
    label: <AppleFilled />,
    value: <AppleFilled />,
  },
  {
    label: <AndroidFilled />,
    value: <AndroidFilled />,
  },
  {
    label: <WindowsFilled />,
    value: <WindowsFilled />,
  },
]

const statusOptions = [
  {
    label: 'Approved',
    value: (
      <Flex gap={10}>
        <CheckCircleFilled style={{ color: 'green' }} />
        Approved
      </Flex>
    ),
  },
  {
    label: 'Error',
    value: (
      <Flex gap={10}>
        <ExclamationCircleFilled style={{ color: 'orange' }} />
        Error
      </Flex>
    ),
  },
  {
    label: 'Disable',
    value: (
      <Flex gap={10}>
        <CloseCircleFilled style={{ color: 'red' }} />
        Disable
      </Flex>
    ),
  },
]

export const modalContent = [
  {
    name: 'Development Table',
    data: [
      {
        label: 'Name',
        name: 'name',
        component: <Input />,
      },
      {
        label: 'Tech',
        name: 'tech',
        component: (
          <Checkbox
            isGroup={true}
            options={techOptions}
          />
        ),
      },
      {
        label: 'Date',
        name: 'date',
        component: <DatePicker />,
      },
    ],
  },
  {
    name: 'Check Table',
    data: [
      {
        label: 'Name',
        name: 'name',
        component: <Input />,
      },
      {
        label: 'Quantity',
        name: 'quantity',
        component: <Input />,
      },
      {
        label: 'Date',
        name: 'date',
        component: <DatePicker />,
      },
    ],
  },
  {
    name: 'Four Column Table',
    data: [
      {
        label: 'Name',
        name: 'name',
        component: <Input />,
      },
      {
        label: 'Quantity',
        name: 'quantity',
        component: <Input />,
      },
      {
        label: 'Date',
        name: 'date',
        component: <DatePicker />,
      },
    ],
  },
  {
    name: 'Complex Table',
    data: [
      {
        label: 'Name',
        name: 'name',
        component: <Input />,
      },
      {
        label: 'Status',
        name: 'status',
        component: (
          <Radio
            isGroup={true}
            options={statusOptions}
          />
        ),
      },
      {
        label: 'Date',
        name: 'date',
        component: <DatePicker />,
      },
    ],
  },
]
