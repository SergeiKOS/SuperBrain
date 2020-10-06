import React from 'react'
import {GameSquareCss} from './styles/gameSquare'

export default function GameSquare ({...restProps}) {
  return (
    <GameSquareCss {...restProps}/>      
  )
}

