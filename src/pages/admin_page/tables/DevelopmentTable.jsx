import React from 'react'
import Table from '../Table'
import { ActionItems, developmentColumns } from './help'
const DevelopmentTable = () => {
  const data = [
    {
      key: '1',
      name: 'John Brown',
      progress: '100%',
      quantity: 100,
      date: '11 June 2019',
    },
    // {
    //   key: '2',
    //   name: 'Afrizal Maulana Muhammad',
    //   progress: '40%',
    //   quantity: 1002,
    //   date: '17 July 1997',
    // },
    // {
    //   key: '3',
    //   name: 'Budi Setiawan',
    //   progress: '90%',
    //   quantity: 674,
    //   date: '20 March 2022',
    // },
    // {
    //   key: '4',
    //   name: 'Budi Setiawan',
    //   progress: '67%',
    //   quantity: 21,
    //   date: '05 January 2006',
    // },
  ]

  return (
    <Table
      items={ActionItems}
      tableColumns={developmentColumns}
      tableData={data}
      title='Development Table'
    />
  )
}

export default DevelopmentTable
