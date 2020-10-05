import styled from "styled-components";
import { font, colors } from "../../../../../../commonStyles/variables";

export const LabelInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const Label = styled.label`
  margin-right: 0px;
`;

export const Input = styled.input`
  width: 120px;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
  padding-right: 10px;
  font-size: ${font.fontLogoBig};
  border: none;
  outline: 1px solid ${colors.primary};

  &:focus {
    outline-width: 2px;
  }
`;

export const GuessiesStats = styled.div`
  margin-bottom: 20px;
`
