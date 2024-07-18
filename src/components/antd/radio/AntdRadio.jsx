import { Radio } from 'antd'
import React from 'react'
const AntdRadio = (props) => {
  const { options, isGroup, onChange, text, value } = props

  const radioSingle = <Radio onChange={onChange}>{text}</Radio>
  const radioGroup = (
    <Radio.Group
      onChange={onChange}
      value={value}
    >
      {options.map((option) => (
        <Radio value={option.value}>{option.label}</Radio>
      ))}
    </Radio.Group>
  )
  const renderRadio = isGroup ? radioGroup : radioSingle
  return renderRadio
}

export default AntdRadio
