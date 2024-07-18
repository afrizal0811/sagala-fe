import React from 'react'
import { Wrapper } from './StyledComponents'
import CheckTable from './tables/CheckTable'
import ComplexTable from './tables/ComplexTable'
import DevelopmentTable from './tables/DevelopmentTable'
import FourColumnTable from './tables/FourColumnTable'

const AdminPage = () => {
  return (
    <Wrapper>
      <DevelopmentTable />
      <CheckTable />
      <FourColumnTable />
      <ComplexTable />
    </Wrapper>
  )
}

export default AdminPage
