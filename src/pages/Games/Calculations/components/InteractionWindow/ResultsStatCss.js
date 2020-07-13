import styled from "styled-components";
import { font } from "../../../../../elements/global/variables";

export const ResultsStatCss = styled.div`
  text-align-last: left;
  font-size: ${font.fontBigger};

  & .right {
    color: green;
  }
  & .wrong {
    color: red;
    margin-bottom: 10px;
  }
`;
