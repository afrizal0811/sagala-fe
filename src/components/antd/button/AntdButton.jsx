import { Button } from 'antd'
import React from 'react'
const AntdButton = (props) => {
  const { icon, className, children, type } = props
  return (
    <Button
      className={className}
      icon={icon}
      type={type}
    >
      {children}
    </Button>
  )
}

export default AntdButton
