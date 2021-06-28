import React from "react";

import PropTypes from "prop-types";

import * as S from "./ResultsStatCss";

const ResultsStat = ({ result }) => {
  let right = 0;
  let wrong = 0;
  result.forEach((res) => {
    if (res.yourAnswer === res.correctAnswer) {
      right += 1;
    } else {
      wrong += 1;
    }
  });
  return (
    <S.ResultsStat>
      <div className="right">Right: {right}</div>
      <div className="wrong">Wrong: {wrong}</div>
    </S.ResultsStat>
  );
};

ResultsStat.propTypes = {
  result: PropTypes.array.isRequired,
};

export default ResultsStat;
