import styled from "styled-components";

import { font } from "../../../../../commonStyles/variables";
import { colors } from "../../../../../commonStyles/variables";

export const ResultsStat = styled.div`
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
