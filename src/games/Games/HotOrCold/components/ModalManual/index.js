import React from "react";
import { createPortal } from "react-dom";
import {ModalWrapper, Modal} from './styles/ModalManual'
import Button from "../Button";

function ModalManual({ onShowRules }) {
  return createPortal(
    <ModalWrapper>
      <Modal>
        <p>This is a Number Guessing Game with the following rules:</p>
        <ol>
          <li>
            The machine picks a random number between 1 to 100 and keeps it
            hidden.
          </li>
          <li>
            You need to guess until you can find the hidden secret number.
          </li>
          <li>
            You will get feedback on how close or far your guess is in the form
            of the following keywords ("cold", "warm", "hot", "extremely hot").
          </li>
        </ol>
        <div style={{ marginBottom: "10px" }}>Everything clear?</div>
        <Button onClick={onShowRules} disabled={false}>Yes</Button>
      </Modal>
    </ModalWrapper>,
    document.getElementById("portal-root")
  );
}

export default ModalManual;
