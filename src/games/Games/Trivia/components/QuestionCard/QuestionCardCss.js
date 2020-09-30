import styled from "styled-components";
import { font } from "../../../../../commonStyles/variables";

export const QuestionCardCss = styled.div`
  h1 {
    font-size: ${font.fontBigger};
  }

  .category,
  .difficulty {
    font-size: ${font.fontSmall};
  }

  .difficulty {
    margin-bottom: 20px;
  }

  .question {
    font-size: ${font.fontMain};
    margin-bottom: 20px;
  }

  .answerWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (min-width: 500px) {
    h1 {
      font-size: ${font.fontLogoBig};
    }
  }
`;
