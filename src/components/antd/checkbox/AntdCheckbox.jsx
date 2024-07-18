import { Checkbox } from 'antd'
import React from 'react'
const AntdCheckbox = (props) => {
  const { options, isGroup, onChange, text } = props

  const checkboxSingle = <Checkbox onChange={onChange}>{text}</Checkbox>
  const checkboxGroup = (
    <Checkbox.Group
      options={options}
      onChange={onChange}
    />
  )
  const renderCheckbox = isGroup ? checkboxGroup : checkboxSingle
  return renderCheckbox
}

export default AntdCheckbox
