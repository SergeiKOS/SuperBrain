import styled from "styled-components";
import { colors } from "../../../cssVariables/variables";

export const ControlBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${colors.darkGray};
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px;
  display: inline-block;
  border: none;
  position: relative;
  cursor: pointer;

  &.pause:hover,
  &.play:hover {
    background-color: ${colors.customGray};
  }

  &.pause {
    &:before,
    &:after {
      content: "||";
      font-size: 12px;
      position: absolute;
      top: 5px;
      left: 8px;
      color: white;
    }
  }

  &.play {
    &:before {
      content: "";
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      top: 8px;
      left: 12px;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;

      border-left: 8px solid white;
    }
  }
`;
