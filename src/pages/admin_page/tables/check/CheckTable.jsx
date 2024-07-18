import React from 'react'

import Table from '../../Table'
import { fourColumns } from './help'
const CheckTable = (props) => {
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
      isCheck={true}
      showModal={showModal}
      tableColumns={fourColumns}
      tableData={data}
      title='Check Table'
    />
  )
}

export default CheckTable
