import React from 'react'
import { Dropdown } from '../../../components/antd'
import {
  StyledHeader,
  StyledMoreIcon,
  StyledTable,
  TableWrapper,
} from '../StyledComponents'
import { ActionItems } from '../help'
const Table = (props) => {
  const { isCheck, setTableTitle, showModal, tableColumns, tableData, title } =
    props
  return (
    <TableWrapper>
      <StyledHeader>
        <h3>{title}</h3>
        <Dropdown
          icon={<StyledMoreIcon rotate={90} />}
          items={ActionItems(showModal, setTableTitle, title)}
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
