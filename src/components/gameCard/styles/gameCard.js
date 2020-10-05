import styled from 'styled-components'
import {Link as RouterLink} from 'react-router-dom'

import {colors} from '../../../commonStyles/variables'
import {font} from '../../../commonStyles/variables'

export const Card = styled.div`
  width: 280px;
  border: 2px solid ${colors.primary};
  border-bottom: none;
  text-align: center;
  margin-bottom: 20px;
  text-align: center;  
`

export const Title = styled.h3`
  font-weight: normal;
  font-size: ${font.fontBigger};
  padding: 5px;
  padding-bottom: 10px;
`

export const Image = styled.img``

export const Link = styled(RouterLink)`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: ${colors.primary};
  margin-top: 10px;

  &:hover {
    background-color: ${colors.primaryLight};
  }
  &.active::after {
    content: "";
    width: 10px;
    height: 10px;
    top: 21px;
    right: 20px;
    border-radius: 50%;
    display: block;
    position: absolute;
    background-color: ${colors.primaryLight};
  }
  &:hover::after {
    background-color: ${colors.primary};
  }
`