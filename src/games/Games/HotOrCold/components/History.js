import React from "react";

import PropTypes from 'prop-types'

const History = ({ victoryData }) => {
  return (
    <section>
      {victoryData.map((data) => (
        <React.Fragment key={Math.random()}>
          <div>Date of the game: {data.victoryDate}</div>
          <div>Number of attempts: {data.victoryNumber}</div>
          <hr />
        </React.Fragment>
      ))}
    </section>
  );
};

History.propTypes = {
  victoryData: PropTypes.array.isRequired
}

export default History;
