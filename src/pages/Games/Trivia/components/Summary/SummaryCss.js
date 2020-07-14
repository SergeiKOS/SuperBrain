import styled from "styled-components";
import { font } from "../../../../../elements/global/variables";
import { colors } from "../../../../../elements/global/variables";

export const SummaryCss = styled.div`
  .answer-wrapper {
    margin-bottom: 10px;
  }
  .summary {
    font-size: ${font.fontBigger};
  }
  .right-answer {
    color: ${colors.green};
  }

  .wrong-answer {
    color: ${colors.red};
    margin-bottom: 5px;
  }
`;
