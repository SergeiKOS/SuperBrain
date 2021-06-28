import styled from "styled-components";
import { motion } from "framer-motion";

import { colors } from "../../../../../../commonStyles/variables";

export const QuestionBtn = styled(motion.button)`
  text-align: left;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  cursor: pointer;
  background-color: ${colors.white};
  border: 1px solid ${colors.black};
  border: 1px solid ${colors.primary};

  &:hover {
    background-color: ${colors.primaryLight};
    border: 1px solid ${colors.primaryLight};
  }

  &:focus {
    outline: 2px solid ${colors.primary};
    background-color: ${colors.primaryLight};
    border: none;
  }

  &:disabled {
    cursor: auto;
    background-color: ${colors.white};
    border: 1px solid ${colors.colorGray};
  }

  &.answered {
    background-color: ${colors.primary};
    color: ${colors.black};
    border-color: ${colors.black};
  }

  @media (min-width: 500px) {
    width: 48%;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;
