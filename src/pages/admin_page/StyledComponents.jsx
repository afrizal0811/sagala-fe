import { MoreOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { Table } from '../../components/antd'
import colors from '../../constants/colors'

export const Wrapper = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  height: 100dvh;
  justify-content: center;
  margin-top: 80px;
  padding: 10px;
  width: 100%;
`
export const TableWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  width: 48%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`
export const StyledHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  & > span {
    color: ${colors.hanPurple};
  }
`
export const StyledTable = styled(Table)`
  width: 100%;
`
export const StyledMoreIcon = styled(MoreOutlined)`
  background-color: ${colors.aliceBlue} !important;
  border-radius: 10px;
  color: ${colors.hanPurple};
  font-size: 22px !important;
  padding: 10px;
  &:hover {
    background-color: ${colors.brightGray} !important;
  }
`
