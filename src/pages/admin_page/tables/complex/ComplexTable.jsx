import React from 'react'
import Table from '../../Table'
import { complexColumns } from './help'
const ComplexTable = (props) => {
  const { tableData, showModal, setTableTitle } = props
  return (
    <Table
      setTableTitle={setTableTitle}
      showModal={showModal}
      tableColumns={complexColumns}
      tableData={tableData}
      title='Complex Table'
    />
  )
}

export default ComplexTable
