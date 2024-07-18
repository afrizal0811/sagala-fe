import { Button } from 'antd'
import React from 'react'
const AntdButton = (props) => {
  const { icon, className, children, type, onClick, htmlType } = props
  return (
    <Button
      className={className}
      htmlType={htmlType}
      icon={icon}
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  )
}

export default AntdButton
