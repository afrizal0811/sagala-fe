import React from 'react'
import Table from '../Table'
import { ActionItems, fourColumns } from './help'
const FourColumnTable = () => {
  const data = [
    {
      key: '1',
      name: 'John Brown',
      progress: '100%',
      quantity: 100,
      date: '11 June 2019',
    },
    {
      key: '2',
      name: 'Afrizal Maulana Muhammad',
      progress: '40%',
      quantity: 1002,
      date: '17 July 1997',
    },
    {
      key: '3',
      name: 'Budi Setiawan',
      progress: '90%',
      quantity: 674,
      date: '20 March 2022',
    },
  ]
  return (
    <Table
      items={ActionItems}
      tableColumns={fourColumns}
      tableData={data}
      title='Four Column Table'
    />
  )
}

export default FourColumnTable
