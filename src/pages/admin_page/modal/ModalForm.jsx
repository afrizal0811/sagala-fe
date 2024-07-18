import { Flex, Form } from 'antd'
import React from 'react'
import { Button, Checkbox, DatePicker, Input } from '../../../components/antd'
import getFormatDate from '../../../utilities/getFormatDate'
import getRandomProgress from '../../../utilities/getRandomProgress'
import { techOptions } from './help'

const ModalForm = (props) => {
  const { handleCancel, setData } = props
  const [form] = Form.useForm()
  const onFinish = (values) => {
    const newDate = new Date(values.date)
    Object.assign(values, {
      progress: getRandomProgress(),
      date: getFormatDate(newDate),
    })
    setData((prev) => [...prev, values])

    handleCancel()
    setTimeout(() => {
      form.resetFields()
    }, 500)
  }

  return (
    <Form
      autoComplete='off'
      layout='vertical'
      name='add-form'
      onFinish={onFinish}
      form={form}
    >
      <Form.Item
        label='Name'
        name='name'
        rules={[
          {
            required: true,
            message: 'Please input name!',
          },
        ]}
      >
        <Input placeholder='Input name' />
      </Form.Item>
      <Form.Item
        label='Tech'
        name='tech'
        rules={[
          {
            required: true,
            message: 'Please input tech!',
          },
        ]}
      >
        <Checkbox
          isGroup={true}
          options={techOptions}
        />
      </Form.Item>
      <Form.Item
        label='Date'
        name='date'
        rules={[
          {
            required: true,
            message: 'Please input date!',
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Flex
        justify='flex-end'
        gap={10}
      >
        <Button onClick={handleCancel}>Cancel</Button>
        <Button
          type='primary'
          htmlType='submit'
        >
          Save
        </Button>
      </Flex>
    </Form>
  )
}

export default ModalForm
