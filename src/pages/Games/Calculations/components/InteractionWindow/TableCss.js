import styled from "styled-components";
import { font } from "../../../../../elements/global/variables";
import { colors } from "../../../../../elements/global/variables";

export const TableCss = styled.table`
  font-size: ${font.fontMain};
  margin-left: auto;
  margin-right: auto;
  border: 1px solid ${colors.primary};
  border-collapse: collapse;

  th,
  td {
    border: 1px solid ${colors.primary};
    padding: 10px;
    width: 33%;
  }
`;
