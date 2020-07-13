import React from "react";
import { ResultsStatCss } from "./ResultsStatCss";

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
    <ResultsStatCss>
      <div className="right">Right: {right}</div>
      <div className="wrong">Wrong: {wrong}</div>
    </ResultsStatCss>
  );
};

export default ResultsStat;
