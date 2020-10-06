import React from 'react'
import {ProgressContainer, ProgressBlock, Text} from './style/progressField'

export default function ProgressField ({...restProps}) {
  return (
    <ProgressContainer {...restProps}/>      
  )
}

ProgressField.ProgressBlock = function ProgressFieldProgressBlock({children, ...restProps}) {
  return <ProgressBlock {...restProps}>{children}</ProgressBlock>
}

ProgressField.Text = function ProgressFieldText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

