import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom';

import { font } from "../../../commonStyles/variables";

export const LogoWrapper = styled.div``

export const Link = styled(RouterLink)`
  font-weight: ${font.fontWeightBold};
  font-size: ${font.fontLogoBig};
`