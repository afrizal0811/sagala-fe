import {
  BellOutlined,
  ExclamationCircleOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Flex } from 'antd'
import React from 'react'
import { Avatar, Breadcrumb } from '../antd'
import {
  StyledHamburger,
  StyledMenu,
  StyledSearch,
  Wrapper,
} from './StyledComponents'
import { breadcrumbItems } from './help'

const Header = (props) => {
  const { setIsCollapsed } = props
  const handleOnClick = () => {
    alert('clicked')
  }
  return (
    <Wrapper>
      <Flex vertical>
        <Breadcrumb items={breadcrumbItems} />
        <h1>Data Tables</h1>
      </Flex>
      <StyledMenu>
        <StyledSearch
          placeholder='Search...'
          prefix={<SearchOutlined />}
        />
        <StyledHamburger onClick={() => setIsCollapsed((prev) => !prev)} />
        <BellOutlined onClick={handleOnClick} />
        <ExclamationCircleOutlined onClick={handleOnClick} />
        <SettingOutlined onClick={handleOnClick} />
        <Avatar icon={<UserOutlined onClick={handleOnClick} />} />
      </StyledMenu>
    </Wrapper>
  )
}

export default Header
