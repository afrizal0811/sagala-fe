import React, { useState } from 'react'
import { Modal } from '../../components/antd'
import { Wrapper } from './StyledComponents'
import { dataFilter, modalContent, tableName } from './help'
import ModalForm from './modal/ModalForm'
import Table from './table/Table'
import { columns } from './table/tableConfig'

const AdminPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tableTitle, setTableTitle] = useState('')
  const [data, SetData] = useState([
    {
      name: 'Development Table',
      input: [],
    },
    {
      name: 'Check Table',
      input: [],
    },
    {
      name: 'Four Column Table',
      input: [],
    },
    {
      name: 'Complex Table',
      input: [],
    },
  ])
  // console.log('data :', data)

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const selectedTable = dataFilter(modalContent, tableTitle)
  return (
    <Wrapper>
      <Modal
        content={
          <ModalForm
            content={selectedTable}
            data={data}
            handleCancel={handleCancel}
            setData={SetData}
            tableTitle={tableTitle}
          />
        }
        footer={null}
        handleCancel={handleCancel}
        isModalOpen={isModalOpen}
        title='Input Data'
        width={400}
      />
      {tableName.map((title) => {
        const selectedColumns = dataFilter(columns, title)
        const selectedData = dataFilter(data, title)
        return (
          <Table
            isCheck={true}
            setTableTitle={setTableTitle}
            showModal={showModal}
            tableColumns={selectedColumns.data}
            tableData={selectedData.input}
            title={title}
          />
        )
      })}
    </Wrapper>
  )
}

export default AdminPage
