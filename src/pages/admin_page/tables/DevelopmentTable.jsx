import React, { useState } from 'react'
import Table from '../Table'
import { ActionItems, developmentColumns } from './help'
const DevelopmentTable = (props) => {
  const { showModal } = props
  const [data, setData] = useState([])
  return (
    <Table
      items={ActionItems(setData, showModal)}
      tableColumns={developmentColumns}
      tableData={data}
      title='Development Table'
      setData={setData}
    />
  )
}

export default DevelopmentTable
