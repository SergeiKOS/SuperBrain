import styled from "styled-components";

import { font } from "../../../commonStyles/variables";

export const CalculationsCss = styled.div`
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
      width: 480px;
    }
  
  h1 {
    font-size: ${font.fontMain};
    font-weight: ${font.fontWeightMain};
    margin-bottom: 70px;
  }
`;
