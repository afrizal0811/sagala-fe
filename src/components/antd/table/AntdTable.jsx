import { Table } from 'antd'
import React from 'react'
const AntdTable = (props) => {
  const { columns, data, pagination, className } = props
  return (
    <Table
      className={className}
      columns={columns}
      dataSource={data}
      pagination={pagination}
    />
  )
}

export default AntdTable
