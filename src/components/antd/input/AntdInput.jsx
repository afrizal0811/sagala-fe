import { Input } from 'antd'
import React from 'react'
const AntdInput = (props) => {
  const { placeholder, value, onChange } = props
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default AntdInput
