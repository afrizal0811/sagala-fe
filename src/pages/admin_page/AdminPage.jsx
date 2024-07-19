import React, { useState } from 'react'
import { Modal } from '../../components/antd'
import getIndex from '../../utilities/getIndex'
import { Wrapper } from './StyledComponents'
import { dataFilter, modalContent, tableName } from './help'
import ModalForm from './modal/ModalForm'
import Table from './table/Table'
import { columns } from './table/tableConfig'

const AdminPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [tableTitle, setTableTitle] = useState('')
  const [data, setData] = useState([
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
  const selectedTable = dataFilter(modalContent, tableTitle)

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleDelete = (id) => {
    const newData = [...data]
    const index = getIndex(newData, tableTitle)
    newData[index] = {
      ...newData[index],
      input: newData[index].input
        .map((item) => item.key)
        .filter((data) => data !== id),
    }
    setData(newData)
    handleCancel()
  }

  return (
    <Wrapper>
      <Modal
        content={
          <ModalForm
            content={selectedTable}
            data={data}
            handleCancel={handleCancel}
            setData={setData}
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
        const selectedData = dataFilter(data, title)
        const key = selectedData.input.length
        const selectedColumns = dataFilter(columns(handleDelete), title)
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
