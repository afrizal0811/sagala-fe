import { DatePicker } from 'antd'
import React from 'react'
const AntdDatePicker = (props) => {
  const { value, onChange } = props

  return (
    <DatePicker
      onChange={onChange}
      style={{ width: '100%' }}
      value={value}
      format={{
        format: 'DD-MM-YYYY',
        type: 'mask',
      }}
    />
  )
}

export default AntdDatePicker
