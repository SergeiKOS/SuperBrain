import styled from "styled-components";
import { font } from "../../../../../elements/global/variables";
import { colors } from "../../../../../elements/global/variables";

export const TableCss = styled.table`
  font-size: ${font.fontMain};
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;

  th {
    padding: 10px;
  }

  th,
  td {
    border: 1px solid ${colors.primary};
    width: 33%;
  }

  .right {
    background-color: green;
  }
  .wrong {
    background-color: red;
  }

  /* .timeout {
    border: none;
    padding-left: 5px;
  } style for timeout*/
`;
