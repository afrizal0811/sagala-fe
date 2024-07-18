import React from 'react'
import Table from '../../Table'
import { complexColumns } from './help'
const ComplexTable = (props) => {
  const { tableData, showModal } = props
  const data = [
    {
      key: '1',
      name: 'John Brown',
      progress: '100%',
      status: 'Approved',
      date: '11 June 2019',
    },
  ]
  return (
    <Table
      showModal={showModal}
      tableColumns={complexColumns}
      tableData={data}
      title='Complex Table'
    />
  )
}

export default ComplexTable
