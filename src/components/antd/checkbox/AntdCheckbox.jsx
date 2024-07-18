import { Checkbox } from 'antd'
import React from 'react'
const AntdCheckbox = (props) => {
  const { options, isGroup, onChange } = props
//   const onChange = (checkedValues) => {
//     console.log('checked = ', checkedValues)
//   }
  const checkboxSingle = <Checkbox onChange={onChange}>Checkbox</Checkbox>
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
