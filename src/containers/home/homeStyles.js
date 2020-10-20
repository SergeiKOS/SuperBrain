import styled from "styled-components";

export const CardsWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 700px) {
    justify-content: space-around;
  }
`;
