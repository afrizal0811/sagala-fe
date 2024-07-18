import React from 'react'
import Table from '../Table'
import { ActionItems, developmentColumns } from './help'
const DevelopmentTable = (props) => {
  const { tableData, showModal } = props
  return (
    <Table
      items={ActionItems(showModal)}
      tableColumns={developmentColumns}
      tableData={tableData}
      title='Development Table'
    />
  )
}

export default DevelopmentTable
