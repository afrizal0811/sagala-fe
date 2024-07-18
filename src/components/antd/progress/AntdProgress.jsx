import { Progress } from 'antd'
import React from 'react'
import colors from '../../../constants/colors'
const AntdProgress = (props) => {
  const { percent, percentPosition, showInfo } = props
  return (
    <Progress
      percent={percent}
      percentPosition={percentPosition}
      showInfo={showInfo}
      status='normal'
      strokeColor={colors.davyGrey}
    />
  )
}

export default AntdProgress
