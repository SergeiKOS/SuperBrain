import styled from "styled-components";
import { moveInBottomAnimation } from "../global/animations";
import { colors } from "../global/variables";

export const Btn = styled.button`
  text-transform: uppercase;
  padding: 1.5rem 4rem;
  border-radius: 10rem;
  transition: transform 0.2s, padding 0.2s, box-shadow 0.2s;
  position: relative;
  font-size: 1.6rem;
  border: none;
  cursor: pointer;
  outline: none;

  ${moveInBottomAnimation}

  animation: moveInBottom 0.5s ease-out 0.75s;
  animation-fill-mode: backwards; /*apply 0% keyframes before animation starts*/

  transform: translateY(-10px);
  padding: 2rem 5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  &:active {
    transform: translateY(-7px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    border: 2px solid grey;
    margin-top: -2px;
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${colors.white};
    top: 0;
    left: 0;
    border-radius: 50px;
    z-index: -1;
    transition: all 0.3s;
  }

  &:hover::after {
    transform: scale(1.5);
    opacity: 0;
  }
`;
