import styled from "styled-components";
import { font } from "../../../../../elements/global/variables";
import { colors } from "../../../../../elements/global/variables";

export const InteractionWindowCss = styled.div`
  .question {
    text-align: center;
    font-size: ${font.fontLogoBig};
    margin-bottom: 30px;
  }

  .answer-wrapper {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 220px;
  }

  label {
    position: absolute;
    left: 10px;
    top: 10px;

    color: ${colors.colorGray};
    background-color: ${colors.white};
    font-size: ${font.fontMain};
    transition: transform 150ms ease-out, font-size 150ms ease-out;
  }

  .focused label {
    transform: translateY(-120%);
    font-size: ${font.fontSmall};
    left: 0;
  }

  input {
    display: block;
    padding: 10px;

    /*delete arrows in input type number*/
    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    /* Firefox */
    &[type="number"] {
      -moz-appearance: textfield;
    }
  }
`;
