import React from "react";
import { createPortal } from "react-dom";

import * as S from "./styles/ModalManual";
import Button from "../Button";

function ModalManual({ onShowRules }) {
  return createPortal(
    <S.ModalWrapper>
      <S.Modal initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <p>This is a Number Guessing Game with the following rules:</p>
        <ol>
          <li>
            The machine picks a random number between 0 to 100 and keeps it
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
        <Button
          onClick={onShowRules}
          disabled={false}
          style={{ marginTop: "10px" }}
        >
          Back to the game
        </Button>
      </S.Modal>
    </S.ModalWrapper>,
    document.getElementById("portal-root")
  );
}

export default ModalManual;
