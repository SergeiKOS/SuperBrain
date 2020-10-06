import React from 'react'
import {TileBlock} from './styles/tile'

export default function Tile ({...restProps}) {
  return (
    <TileBlock {...restProps}/>      
  )
}

