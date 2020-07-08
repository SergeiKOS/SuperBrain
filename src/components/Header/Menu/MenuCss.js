import styled from "styled-components";

import { colors } from "../../../elements/global/variables";
import { font } from "../../../elements/global/variables";

export const MenuCss = styled.div`
  ul {
    position: absolute;
    font-size: ${font.fontBigger};
    background-color: ${colors.primary};
  }

  .menu-item {
    display: ${(props) => (props.isMenuShown ? "block" : "none")};
  }

  .menu-item a {
    display: block;
    padding-top: 10px;
    padding-left: 30px;
    padding-right: 40px;
    position: relative;

    &:last-child {
      padding-bottom: 20px;
    }

    &:hover {
      background-color: ${colors.primaryLight};
    }

    &.active::after {
      content: "";
      width: 10px;
      height: 10px;
      top: 21px;
      right: 20px;
      border-radius: 50%;
      display: block;
      position: absolute;
      background-color: ${colors.primaryLight};
    }

    &:hover::after {
      background-color: ${colors.primary};
    }
  }

  .menu-button {
    position: relative;
    width: 60px;
    height: 60px;
    font-size: 0;
    border: none;
    cursor: pointer;
    background-color: ${colors.primary};
    outline-color: ${colors.primaryLight};

    &:hover {
      background-color: ${colors.primaryLight};
    }
  }

  .menu-button-open {
    &::before {
      transition: all 0.2s;
      content: "";
      position: absolute;
      top: 20px;
      right: 18px;
      width: 25px;
      height: 2px;
      background-color: ${colors.black};
      box-shadow: 0 6px 0 0 #000, 0 12px 0 0 #000;
    }
  }

  .menu-button-hide {
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 25px;
      right: 18px;
      width: 25px;
      height: 2px;
      background-color: #000;
      transition: transform 0.2s;
    }

    &::before {
      transform: rotate(45deg);
      box-shadow: none;
    }

    &::after {
      transform: rotate(-45deg);
    }
  }

  .menu-item {
  }
`;
