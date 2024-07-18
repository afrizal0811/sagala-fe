import React from 'react'
import Table from '../Table'
import { ActionItems, complexColumns } from './help'
const ComplexTable = () => {
  const data = [
    {
      key: '1',
      name: 'John Brown',
      progress: '100%',
      status: 'Approved',
      date: '11 June 2019',
    },
    {
      key: '2',
      name: 'Afrizal Maulana Muhammad',
      progress: '40%',
      status: 'Error',
      date: '17 July 1997',
    },
    {
      key: '3',
      name: 'Budi Setiawan',
      progress: '90%',
      status: 'Disable',
      date: '20 March 2022',
    },
    {
      key: '4',
      name: 'Budi Setiawan',
      progress: '67%',
      status: 'Approved',
      date: '05 January 2006',
    },
  ]
  return (
    <Table
      items={ActionItems}
      tableColumns={complexColumns}
      tableData={data}
      title='Complex Table'
    />
  )
}

export default ComplexTable
