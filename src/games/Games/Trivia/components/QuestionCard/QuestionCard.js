import React, { useState } from "react";
import PropTypes from "prop-types";

import {customAlert, NotificationComponent} from '../../../../../utils/customNotification'

import { QuestionCardCss } from "./QuestionCardCss";
import QuestionBtn from "../Button";
import { shuffle } from "../../utils/shuffle";

function QuestionCard({ gameData, cardNumber, updateUserAnswer }) {
  const [disable, setDisable] = useState(false);
  const [answer, setAnswer] = useState({
    question: "",
    rightAnswer: "",
    wrongAnswer: "",
    userAnswer: "",
  });

  let HTMLentities = [
    ['"', /&quot;/g],
    ["'", /&apos;/g],
    ["‘", /&lsquo;/g],
    ["’", /&rsquo;/g],
    ["“", /&ldquo;/g],
    ["”", /&rdquo;/g],
    ["'", /&#039;/g],
    ["&", /&amp;/g],
    ["<", /&lt;/g],
    [">", /&gt;/g],
    ["¡", /&iexcl;/g],
    ["¢", /&cent;/g],
    ["£", /&pound;/g],
    ["¤", /&curren;/g],
    ["¥", /&yen;/g],
    ["¦", /&brvbar;/g],
    ["§", /&sect;/g],
    ["¨", /&uml;/g],
    ["©", /&copy;/g],
    ["ª", /&ordf;/g],
    ["«", /&laquo;/g],
    ["¬", /&not;/g],
    ["­", /&shy;/g],
    ["®", /&reg;/g],
    ["¯", /&macr;/g],
    ["°", /&deg;/g],
    ["±", /&plusmn;/g],
    ["²", /&sup2;/g],
    ["³", /&sup3;/g],
    ["´", /&acute;/g],
    ["µ", /&micro;/g],
    ["¶", /&para;/g],
    ["·", /&middot;/g],
    ["¸", /&cedil;/g],
    ["¹", /&sup1;/g],
    ["º", /&ordm;/g],
    ["»", /&raquo;/g],
    ["¼", /&frac14;/g],
    ["½", /&frac12;/g],
    ["¾", /&frac34;/g],
    ["¿", /&iquest;/g],
    ["×", /&times;/g],
    ["÷", /&divide;/g],
    ["À", /&Agrave;/g],
    ["Á", /&Aacute;/g],
    ["Â", /&Acirc;/g],
    ["Ã", /&Atilde;/g],
    ["Ä", /&Auml;/g],
    ["Å", /&Aring;/g],
    ["Æ", /&AElig;/g],
    ["Ç", /&Ccedil;/g],
    ["È", /&Egrave;/g],
    ["É", /&Eacute;/g],
    ["Ê", /&Ecirc;/g],
    ["Ë", /&Euml;/g],
    ["Ì", /&Igrave;/g],
    ["Í", /&Iacute;/g],
    ["Î", /&Icirc;/g],
    ["Ï", /&Iuml;/g],
    ["Ð", /&ETH;/g],
    ["Ñ", /&Ntilde;/g],
    ["Ò", /&Ograve;/g],
    ["Ó", /&Oacute;/g],
    ["Ô", /&Ocirc;/g],
    ["Õ", /&Otilde;/g],
    ["Ö", /&Ouml;/g],
    ["Ø", /&Oslash;/g],
    ["Ù", /&Ugrave;/g],
    ["Ú", /&Uacute;/g],
    ["Û", /&Ucirc;/g],
    ["Ü", /&Uuml;/g],
    ["Ý", /&Yacute;/g],
    ["Þ", /&THORN;/g],
    ["ß", /&szlig;/g],
    ["à", /&agrave;/g],
    ["á", /&aacute;/g],
    ["â", /&acirc;/g],
    ["ã", /&atilde;/g],
    ["ä", /&auml;/g],
    ["å", /&aring;/g],
    ["æ", /&aelig;/g],
    ["ç", /&ccedil;/g],
    ["è", /&egrave;/g],
    ["é", /&eacute;/g],
    ["ê", /&ecirc;/g],
    ["ë", /&euml;/g],
    ["ì", /&igrave;/g],
    ["í", /&iacute;/g],
    ["î", /&icirc;/g],
    ["ï", /&iuml;/g],
    ["ð", /&eth;/g],
    ["ñ", /&ntilde;/g],
    ["ò", /&ograve;/g],
    ["ó", /&oacute;/g],
    ["ô", /&ocirc;/g],
    ["õ", /&otilde;/g],
    ["ö", /&ouml;/g],
    ["ø", /&oslash;/g],
    ["ù", /&ugrave;/g],
    ["ú", /&uacute;/g],
    ["û", /&ucirc;/g],
    ["ü", /&uuml;/g],
    ["ý", /&yacute;/g],
    ["þ", /&thorn;/g],
    ["ÿ", /&yuml;/g],
  ];

  if (gameData) {
    let correctAnswer = gameData.correct_answer;
    if (gameData.incorrect_answers.length % 2 !== 0) {
      gameData.incorrect_answers.push(gameData.correct_answer);
      shuffle(gameData.incorrect_answers);

      const replaceEntities = (data, index) => {
        return data.replace(
          HTMLentities[index][1],
          HTMLentities[index][0]
        );
      }

      for (let i = 0; i < HTMLentities.length; i++) {
        gameData.question = replaceEntities(gameData.question, i)
        gameData.correct_answer = replaceEntities(gameData.correct_answer, i)

        for (let j = 0; j < gameData.incorrect_answers.length; j++) {
          gameData.incorrect_answers[j] = replaceEntities(gameData.incorrect_answers[j], i)
        }
      }
    }

    const handleSubmitAnswer = (e) => {
      if (e.target.innerText === correctAnswer) {
        setAnswer({
          question: gameData.question,
          rightAnswer: correctAnswer,
          wrongAnswer: "",
          userAnswer: e.target.innerText,
        });
      } else {
        setAnswer({
          question: gameData.question,
          rightAnswer: correctAnswer,
          wrongAnswer: e.target.innerText,
          userAnswer: e.target.innerText,
        });
      }
      setDisable(!disable);
    };

    const handleNextQuestion = () => {
      if (!answer.userAnswer) {
        customAlert("Pick the question.")
        return;  
      }
      updateUserAnswer(answer);
      setDisable(false);
      setAnswer({});
    };

    return (
      <QuestionCardCss>
        <h1>Question # {cardNumber + 1}</h1>
        <div className="category">Category: {gameData.category}</div>
        <div className="difficulty">
          Difficulty:{" "}
          {gameData.difficulty.charAt(0).toUpperCase() +
            gameData.difficulty.slice(1)}
        </div>
        <div className="question">{gameData.question}</div>
        <div className="answerWrapper">
          {gameData.incorrect_answers.map((
            answ // correct_answer included
          ) => (
            <QuestionBtn
              key={answ}
              onClick={handleSubmitAnswer}
              disable={disable}
              className={answer.userAnswer === answ ? "answered" : ""}
            >
              {answ}
            </QuestionBtn>
          ))}
        </div>
        <QuestionBtn
          onClick={handleNextQuestion}
          disable={!disable}
        >
          Next question
        </QuestionBtn>
        <NotificationComponent />
      </QuestionCardCss>
    );
  } else {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }
}

QuestionCard.propTypes = {
  gameData: PropTypes.object.isRequired,
  cardNumber: PropTypes.number.isRequired,
  updateUserAnswer: PropTypes.func.isRequired,
};

export default QuestionCard;
