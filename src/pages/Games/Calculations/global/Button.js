import styled from "styled-components";
import { rubberBand } from "../../../../elements/global/animations";
import { colors } from "../../../../elements/global/variables";
import { font } from "../../../../elements/global/variables";

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

  ${rubberBand}

  &:hover {
    animation: rubberBand 0.3s;
    outline: 1px solid ${colors.primary};
  }

  &:focus {
    outline: 1px solid ${colors.primary};
  }
`;
