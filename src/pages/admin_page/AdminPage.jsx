import React, { useState } from 'react'
import { Modal } from '../../components/antd'
import { Wrapper } from './StyledComponents'
import { modalContent } from './help'
import ModalForm from './modal/ModalForm'
import CheckTable from './tables/check/CheckTable'
import ComplexTable from './tables/complex/ComplexTable'
import DevelopmentTable from './tables/development/DevelopmentTable'
import FourColumnTable from './tables/four_column/FourColumnTable'

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
      <DevelopmentTable
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
      />
    </Wrapper>
  )
}

export default AdminPage
