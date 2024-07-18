import { Modal } from 'antd'
import React from 'react'
const AntdModal = (props) => {
  const { isModalOpen, handleCancel, title, content, footer, width } =
    props
  return (
    <Modal
      title={title}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={footer}
      width={width}
    >
      {content}
    </Modal>
  )
}

export default AntdModal
