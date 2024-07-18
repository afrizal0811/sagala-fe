import React from 'react'
import { Dropdown } from '../../components/antd'
import {
  StyledHeader,
  StyledMoreIcon,
  StyledTable,
  TableWrapper,
} from './StyledComponents'
const Table = (props) => {
  const { title, tableColumns, tableData, items, isCheck } = props
  return (
    <TableWrapper>
      <StyledHeader>
        <h3>{title}</h3>
        <Dropdown
          icon={<StyledMoreIcon rotate={90} />}
          items={items}
          placement='bottomRight'
          trigger='click'
        />
      </StyledHeader>
      <StyledTable
        isCheck={isCheck}
        columns={tableColumns}
        data={tableData}
        pagination={false}
      />
    </TableWrapper>
  )
}

export default Table
