import React from 'react'
import Table from '../../Table'
import { developmentColumns } from './help'
const DevelopmentTable = (props) => {
  const { tableData, showModal, setTableTitle } = props
  return (
    <Table
      setTableTitle={setTableTitle}
      showModal={showModal}
      tableColumns={developmentColumns}
      tableData={tableData}
      title='Development Table'
    />
  )
}

export default DevelopmentTable
