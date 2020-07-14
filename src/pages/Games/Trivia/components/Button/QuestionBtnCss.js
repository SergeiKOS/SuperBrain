import styled from "styled-components";
import { colors } from "../../../../../elements/global/variables";

export const QuestionBtnCss = styled.button`
  text-align: left;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  cursor: pointer;
  background-color: ${colors.white};
  border: 1px solid ${colors.black};

  &:hover {
    background-color: ${colors.primaryLight};
    border: 1px solid ${colors.primaryLight};
  }

  &:focus {
    outline: 1px solid ${colors.primary};
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
