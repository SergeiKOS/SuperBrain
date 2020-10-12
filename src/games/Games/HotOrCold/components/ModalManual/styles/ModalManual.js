import styled from 'styled-components'

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: white;
  top: 0;
  z-index: 1;
`;

export const Modal = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
  font-size: 18px;
  padding-left: 30px;
  padding-right: 30px;

@media(min-width: 768px) {
  width: 480px;
}

`;
