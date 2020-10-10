import styled from "styled-components";
import { colors, font } from "../../../../../commonStyles/variables";

export const MemoryContainer = styled.div`
  border: 1px solid ${colors.primary};
  width: 100%;
  position: relative;
  padding-bottom: 20px;
`;

export const MemoryPopup = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const MemoryPopupWindow = styled.div`
  width: 300px;
  margin-top: 50px;
  color: #fff;
  padding: 20px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const MemoryPopupBtn = styled.button`
  width: 150px;
  padding: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  opacity: 0.9;
  font-size: ${font.fontSmall};
  cursor: pointer;
`;
