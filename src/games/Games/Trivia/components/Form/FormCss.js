import styled from "styled-components";

import { font } from "../../../../../commonStyles/variables";
import { colors } from "../../../../../commonStyles/variables";
import {rubberBand} from '../../../../../commonStyles/animations'

export const FormCss = styled.div`
  margin-top: 30px;
  padding: 10px;

  .input-field {
    padding: 10px;
    cursor: pointer;
    font-size: ${font.fontMain};
    width: 100%;

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

    &:focus {
      outline: 2px solid ${colors.primary};
    }
  }

  label {
    font-size: ${font.fontSmall};
  }

  .button-wrapper {
    display: flex;
  }

  .form-button {
    width: 70%;
    text-transform: uppercase;
    font-size: ${font.fontMain};
    padding: 10px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;

    ${rubberBand}

    &:focus {
      outline: 2px solid ${colors.primary};
      border: none;
      transform: translateY(2px);
    }

    &:hover {
      animation: rubberBand 0.3s;
    }
  }

  @media (min-width: 500px) {
    width: 450px;
    margin-left: auto;
    margin-right: auto;
  }
`;
