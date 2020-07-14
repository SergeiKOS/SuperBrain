import React from "react";
import { TableCss } from "./TableCss";
import Result from "../Result/Result";
import ResultsStat from "../ResultsStat/ResultsStat";

const Table = ({ result }) => {
  return (
    <>
      <TableCss>
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
      </TableCss>
      <ResultsStat result={result} />
    </>
  );
};

export default Table;
