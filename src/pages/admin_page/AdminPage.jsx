import React, { useState } from 'react'
import { Modal } from '../../components/antd'
import { Wrapper } from './StyledComponents'
import ModalForm from './modal/ModalForm'
import CheckTable from './tables/CheckTable'
import ComplexTable from './tables/ComplexTable'
import DevelopmentTable from './tables/DevelopmentTable'
import FourColumnTable from './tables/FourColumnTable'
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
      <CheckTable showModal={showModal} />
      <FourColumnTable showModal={showModal} />
      <ComplexTable showModal={showModal} />
    </Wrapper>
  )
}

export default AdminPage
