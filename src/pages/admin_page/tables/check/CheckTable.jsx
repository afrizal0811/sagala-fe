import React from 'react'

import Table from '../../Table'
import { checkColumns } from './help'
const CheckTable = (props) => {
  const { tableData, showModal, setTableTitle } = props
  return (
    <Table
      isCheck={true}
      setTableTitle={setTableTitle}
      showModal={showModal}
      tableColumns={checkColumns}
      tableData={tableData}
      title='Check Table'
    />
  )
}

export default CheckTable
