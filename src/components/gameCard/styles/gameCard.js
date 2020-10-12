import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

import { colors } from '../../../commonStyles/variables'
import { font } from '../../../commonStyles/variables'

export const Card = styled(RouterLink)`
  width: 280px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, .1);
  text-align: center;
  margin-bottom: 20px;
  text-align: center;  

  &:hover {
    transition: all .3s;
    transform: scale(1.05);
  }

  &:focus {
    outline: 2px solid ${colors.primary};
  }
`

export const Title = styled.h3`
  font-weight: normal;
  font-size: ${font.fontBigger};
  padding: 5px;
  padding-bottom: 10px;
`

export const Image = styled.img``
