import styled from "styled-components";
import { motion } from "framer-motion";

import { colors, font } from "../../../../../../commonStyles/variables";

export const Button = styled(motion.button)`
  text-transform: uppercase;
  padding: 20px;
  width: 100%;
  margin-bottom: 10px;
  display: block;
  font-size: ${font.fontBigger};
  background-color: ${colors.primaryLight};
  border: none;
  line-height: 20px;
  cursor: pointer;
  box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.primary};
  }

  &:focus {
    outline: 1px solid ${colors.primary};
  }
  &:disabled {
    cursor: not-allowed;
  }
  &:disabled:hover {
    background-color: ${colors.primaryLight};
  }

  &:disabled:focus {
    background-color: red;
  }

  &.small {
    width: 140px;
    margin-right: 20px;
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    font-size: ${font.fontMain};
  }

  &.small-right {
    margin-right: 0;
  }
`;
