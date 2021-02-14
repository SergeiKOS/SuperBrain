import styled from "styled-components";
import { font } from "../../../../../commonStyles/variables";
import { colors } from "../../../../../commonStyles/variables";

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
