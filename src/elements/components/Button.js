import styled from "styled-components";
import { shakeAnimation } from "../global/animations";
import { colors } from "../global/variables";
import { font } from "../global/variables";

export const Btn = styled.button`
  text-transform: uppercase;
  padding: 20px 70px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  font-size: ${font.fontBigger};
  background-color: ${colors.primaryLight};
  border: none;
  line-height: 20px;
  cursor: pointer;

  ${shakeAnimation}

  &:hover {
    animation: shake 0.3s;
    outline: 1px solid ${colors.primary};
  }

  &:focus {
    outline: 1px solid ${colors.primary};
  }
`;
