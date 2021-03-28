import styled from "styled-components";

export const GoHome = styled.button`
  cursor: pointer;
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;
  font-size: 30px;
  color: #fff;
  border: none;
  background-color: black;
  border-radius: 10px;
  transition: background-color 0.3s;

  @media (max-width: 370px) {
    font-size: 20px;
  }

  &:focus,
  &:hover {
    outline: none;
    color: black;
    background-color: lightgray;
  }
`;
