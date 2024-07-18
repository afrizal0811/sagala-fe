import { PlusCircleOutlined } from '@ant-design/icons'
export const ActionItems = (showModal) => {
  return [
    {
      key: '1',
      label: (
        <a
          href='/#'
          onClick={showModal}
        >
          <PlusCircleOutlined /> Add
        </a>
      ),
    },
  ]
}
