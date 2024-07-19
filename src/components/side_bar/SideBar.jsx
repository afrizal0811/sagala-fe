import React from 'react'
import { Divider } from '../antd'
import {
  ItemsWrapper,
  StyledItem,
  StyledTitle,
  TitleWrapper,
  Wrapper,
} from './StyledComponents'
import { items } from './help'

const SideBar = (props) => {
  const { isCollapsed } = props
  return (
    <Wrapper $isCollapsed={isCollapsed}>
      <TitleWrapper>
        <StyledTitle>
          HORIZON <span>FREE</span>
        </StyledTitle>
        <Divider />
      </TitleWrapper>
      <ItemsWrapper>
        {items.map((item) => (
          <StyledItem
            $isActive={item.link === '/tables'}
            onClick={() => alert(item.name)}
          >
            <span>{item.icon}</span>
            {item.name}
          </StyledItem>
        ))}
      </ItemsWrapper>
    </Wrapper>
  )
}

export default SideBar
