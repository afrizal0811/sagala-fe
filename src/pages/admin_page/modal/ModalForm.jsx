import { Flex, Form } from 'antd'
import React from 'react'
import { Button } from '../../../components/antd'
import getFormatDate from '../../../utilities/getFormatDate'
import getRandomProgress from '../../../utilities/getRandomProgress'

const ModalForm = (props) => {
  const { handleCancel, setData, content, tableTitle, data } = props
  const [form] = Form.useForm()

  const handleCancelClick = () => {
    handleCancel()
    setTimeout(() => {
      form.resetFields()
    }, 500)
  }

  const onFinish = (values) => {
    const newDate = new Date(values.date)
    const newData = [...data]
    const indexData = newData.map((item) => item.name).indexOf(tableTitle)
    newData[indexData] = {
      ...newData[indexData],
      input: [...newData[indexData].input, values],
    }
    Object.assign(values, {
      key: newData[indexData].input.length,
      progress: getRandomProgress(),
      date: getFormatDate(newDate),
    })
    setData(newData)
    handleCancelClick()
  }

  return (
    <Form
      autoComplete='off'
      form={form}
      layout='vertical'
      name='add-form'
      onFinish={onFinish}
    >
      {content['data'].map((item, key) => (
        <Form.Item
          key={key}
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
        <Button onClick={handleCancelClick}>Cancel</Button>
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
