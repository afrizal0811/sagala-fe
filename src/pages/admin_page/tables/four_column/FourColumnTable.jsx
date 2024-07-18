import React from 'react'
import Table from '../../Table'
import { fourColumns } from './help'
const FourColumnTable = (props) => {
  const { tableData, showModal, setTableTitle } = props
  return (
    <Table
      setTableTitle={setTableTitle}
      showModal={showModal}
      tableColumns={fourColumns}
      tableData={tableData}
      title='Four Column Table'
    />
  )
}

export default FourColumnTable
