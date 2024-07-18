import { Flex, Form } from 'antd'
import React from 'react'
import { Button } from '../../../components/antd'
import getFormatDate from '../../../utilities/getFormatDate'
import getRandomProgress from '../../../utilities/getRandomProgress'

const ModalForm = (props) => {
  const { handleCancel, setData, content } = props
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
      form={form}
      layout='vertical'
      name='add-form'
      onFinish={onFinish}
    >
      {content['data'].map((item) => (
        <Form.Item
          label={item.label}
          name={item.name}
          rules={[
            {
              required: true,
              message: `Please input ${item.name}!`,
            },
          ]}
        >
          {item.component}
        </Form.Item>
      ))}
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
