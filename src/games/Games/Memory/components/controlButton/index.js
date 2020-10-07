import React from 'react'
import {ControlBtn} from './style/controlButton'

export default function ControlButton ({children, ...restProps}) {
  return (
    <ControlBtn {...restProps}>
      {children}
    </ControlBtn>
  )
}

