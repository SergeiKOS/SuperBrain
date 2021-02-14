import styled from "styled-components";
import { font } from "../../../../../commonStyles/variables";
import { colors } from "../../../../../commonStyles/variables";

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

  .right,
  .wrong {
    padding: 10px;
    font-size: ${font.fontMain};
    color: #ffffff;
  }

  .right {
    background-color: #008800;
  }
  .wrong {
    background-color: #e20000;
  }

  /* .timeout {
    border: none;
    padding-left: 5px;
  } style for timeout*/
`;
