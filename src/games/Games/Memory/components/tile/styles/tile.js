import styled from "styled-components";
import { colors } from "../../../cssVariables/variables";

export const TileBlock = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${colors.customGray};
  border: 2px solid #000;

  &.chosen-square {
    background-color: ${colors.darkBlue};
  }
`;
