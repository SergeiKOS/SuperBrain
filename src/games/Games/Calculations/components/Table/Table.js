import React from "react";

import PropTypes from "prop-types";

import * as S from "./TableCss";
import Result from "../Result/Result";
import ResultsStat from "../ResultsStat/ResultsStat";

const Table = ({ result }) => {
  return (
    <>
      <S.Table>
        <tbody>
          <tr>
            <th>Equation</th>
            <th>Your answer</th>
            <th>Correct answer</th>
          </tr>
          {result.map((res) => (
            <tr key={res.id}>
              <Result result={res} />
            </tr>
          ))}
        </tbody>
      </S.Table>
      <ResultsStat result={result} />
    </>
  );
};

Table.propTypes = {
  result: PropTypes.array.isRequired,
};

export default Table;
