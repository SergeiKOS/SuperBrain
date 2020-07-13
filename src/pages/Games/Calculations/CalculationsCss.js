import styled from "styled-components";
import { font } from "../../../elements/global/variables";

export const CalculationsCss = styled.div`
  .calculations-wrapper {
    min-width: 320px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
      width: 480px;
    }
  }

  h1 {
    font-size: ${font.fontMain};
    font-weight: ${font.fontWeightMain};
    margin-bottom: 70px;
  }
`;
