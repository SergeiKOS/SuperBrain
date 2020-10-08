import styled from "styled-components";
import { colors } from "../../../commonStyles/variables";

export const MemoryContainer = styled.div`
  border: 1px solid ${colors.primary};
  width: 100%;
  position: relative;
`;

export const MemoryPopup = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const MemoryPopupBtn = styled.button`
  width: 100px;
  height: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
