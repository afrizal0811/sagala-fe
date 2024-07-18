import React, { useState } from 'react'
import { Modal } from '../../components/antd'
import { Wrapper } from './StyledComponents'
import ModalForm from './modal/ModalForm'
import CheckTable from './tables/check/CheckTable'
import ComplexTable from './tables/complex/ComplexTable'
import DevelopmentTable from './tables/development/DevelopmentTable'
import FourColumnTable from './tables/four_column/FourColumnTable'
const AdminPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [data, setData] = useState([])

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <Wrapper>
      <Modal
        content={
          <ModalForm
            handleCancel={handleCancel}
            setData={setData}
          />
        }
        handleCancel={handleCancel}
        isModalOpen={isModalOpen}
        title='Input Data'
        width={400}
        footer={null}
      />
      <DevelopmentTable
        showModal={showModal}
        tableData={data}
      />
      <CheckTable
        showModal={showModal}
        tableData={data}
      />
      <FourColumnTable
        showModal={showModal}
        tableData={data}
      />
      <ComplexTable
        showModal={showModal}
        tableData={data}
      />
    </Wrapper>
  )
}

export default AdminPage
