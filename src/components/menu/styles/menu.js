import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";

import { colors } from "../../../commonStyles/variables";
import { font } from "../../../commonStyles/variables";

export const MenuWrapper = styled.div``;

export const List = styled.ul`
  display: ${(props) => (props.isMenuShown ? "block" : "none")};
  position: absolute;
  font-size: ${font.fontBigger};
  background-color: ${colors.primary};
  z-index: 3;
`;

export const Item = styled.li``;

export const Link = styled(RouterLink)`
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

  &.active,
  &.active:hover {
    cursor: context-menu;
    opacity: 0.6;
    background-color: ${colors.primary};
  }

  &.active:hover::after {
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
`;

export const Btn = styled.button`
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

  &.menu-button-open {
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
  &.menu-button-hide {
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
`;
