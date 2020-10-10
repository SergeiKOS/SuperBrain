import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import {colors} from '../../../../../../commonStyles/variables'

export const BeforeGameWrapper = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`

export const Text = styled.p`
margin-top: 20px;
margin-bottom: 20px;
position: relative;

&:before {
  content: '';
  width: 3px;
  height: 100%;
  background-color: ${colors.primary};
  position: absolute;
  top: 0;
  left: -20px;
}
`

export const Link = styled(RouterLink)`
  display: block;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid ${colors.primary};;
`;
