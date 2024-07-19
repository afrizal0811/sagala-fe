import { MenuOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { Input } from '../antd'
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  width: calc(100% - 25%);
  position: fixed;
  z-index: 100;
  backdrop-filter: blur(10px);
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    align-items: start;
    flex-direction: column;
  }
`
export const StyledMenu = styled.div`
  background-color: white;
  border-radius: 50px;
  display: flex;
  gap: 15px;
  padding: 10px;
  width: auto;
`
export const StyledSearch = styled(Input)`
  border-radius: 50px;
  height: 40px;
  width: auto;
`
export const StyledHamburger = styled(MenuOutlined)`
  display: none;
  @media screen and (max-width: 1200px) {
    display: flex;
  }
`
