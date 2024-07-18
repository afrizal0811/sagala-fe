import React, { useState } from 'react'
import { Modal } from '../../components/antd'
import { Wrapper } from './StyledComponents'
import { modalContent, tableName } from './help'
import ModalForm from './modal/ModalForm'
import Table from './table/Table'
import { columns } from './table/tableConfig'

const AdminPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [data, setData] = useState([])
  const [tableTitle, setTableTitle] = useState('')
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const selectedTable = modalContent.filter((el) => el.name === tableTitle)[0]
  return (
    <Wrapper>
      <Modal
        content={
          <ModalForm
            handleCancel={handleCancel}
            setData={setData}
            content={selectedTable}
          />
        }
        handleCancel={handleCancel}
        isModalOpen={isModalOpen}
        title='Input Data'
        width={400}
        footer={null}
      />
      {tableName.map((title) => {
        const selectedColumns = columns.filter((el) => el.name === title)[0]
        return (
          <Table
            isCheck={true}
            setTableTitle={setTableTitle}
            showModal={showModal}
            tableColumns={selectedColumns.data}
            tableData={data}
            title={title}
          />
        )
      })}
      {/* <DevelopmentTable
        setTableTitle={setTableTitle}
        showModal={showModal}
        tableData={data}
      />
      <CheckTable
        setTableTitle={setTableTitle}
        showModal={showModal}
        tableData={data}
      />
      <FourColumnTable
        setTableTitle={setTableTitle}
        showModal={showModal}
        tableData={data}
      />
      <ComplexTable
        setTableTitle={setTableTitle}
        showModal={showModal}
        tableData={data}
      /> */}
    </Wrapper>
  )
}

export default AdminPage
