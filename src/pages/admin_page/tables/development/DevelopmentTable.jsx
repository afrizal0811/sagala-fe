import React from 'react'
import Table from '../../Table'
import { developmentColumns } from './help'
const DevelopmentTable = (props) => {
  const { tableData, showModal } = props
  return (
    <Table
      showModal={showModal}
      tableColumns={developmentColumns}
      tableData={tableData}
      title='Development Table'
    />
  )
}

export default DevelopmentTable
