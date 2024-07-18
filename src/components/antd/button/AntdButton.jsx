import { Button } from 'antd'
import React from 'react'
const AntdButton = (props) => {
  const { icon, className, children } = props
  return (
    <Button
      icon={icon}
      className={className}
    >
      {children}
    </Button>
  )
}

export default AntdButton
