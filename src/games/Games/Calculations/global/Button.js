import styled from "styled-components";

import { colors } from "../../../../commonStyles/variables";
import { font } from "../../../../commonStyles/variables";

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

  &:hover {
    outline: 1px solid ${colors.primary};
  }

  &:focus {
    outline: 1px solid ${colors.primary};
  }
`;
