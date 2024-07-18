import React from 'react'
import Table from '../../Table'
import { ActionItems, fourColumns } from './help'
const FourColumnTable = (props) => {
  const { tableData, showModal } = props
  const data = [
    {
      key: '1',
      name: 'John Brown',
      progress: '100%',
      quantity: 100,
      date: '11 June 2019',
    },
  ]
  return (
    <Table
      showModal={showModal}
      tableColumns={fourColumns}
      tableData={data}
      title='Four Column Table'
    />
  )
}

export default FourColumnTable
