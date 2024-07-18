import { Form } from 'antd'
import React from 'react'
import { DatePicker, Input } from '../../../components/antd'
const ModalForm = () => {
  return (
    <Form
      name='input-from'
      autoComplete='off'
      layout='vertical'
    >
      <Form.Item
        label='Name'
        name='name'
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Tech'
        name='tech'
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Date'
        name='date'
      >
        <DatePicker />
      </Form.Item>
    </Form>
  )
}

export default ModalForm
