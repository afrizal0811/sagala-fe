import { Flex } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './components/header/Header'
import SideBar from './components/side_bar/SideBar'
import AdminPage from './pages/admin_page/AdminPage'

const LayoutPages = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const StyledFlex = styled(Flex)`
    width: 100%;
    margin-left: 25%;
    @media screen and (max-width: 1200px) {
      margin-left: 0;
  `
  return (
    <Flex>
      <SideBar isCollapsed={isCollapsed} />
      <StyledFlex vertical>
        <Header setIsCollapsed={setIsCollapsed} />
        <AdminPage />
      </StyledFlex>
    </Flex>
  )
}

export default LayoutPages
