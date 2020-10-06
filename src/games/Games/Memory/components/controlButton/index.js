import React from 'react'
import {ControlBtn} from './style/controlButton'

export default ControlButton = ({children, ...restProps}) => {
  return (
    <ControlBtn {...restProps}>
      {children}
    </ControlBtn>
  )
}

