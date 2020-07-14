import styled from "styled-components";
import { font } from "../../../../../elements/global/variables";
import { colors } from "../../../../../elements/global/variables";

export const ResultsStatCss = styled.div`
  text-align-last: left;
  font-size: ${font.fontBigger};

  & .right {
    color: ${colors.green};
  }
  & .wrong {
    color: ${colors.red};
    margin-bottom: 10px;
  }
`;
