import React from "react";
import PropTypes from "prop-types";
import ProgressField from "../components/progressField";

const ProgressFields = ({levels, level}) => {
  return (
    <div>
      <ProgressField>
        <ProgressField.ProgressBlock>
          <ProgressField.Text>Tiles </ProgressField.Text>
          <ProgressField.Text>{levels[level-1].tiles}</ProgressField.Text>
        </ProgressField.ProgressBlock>
        <ProgressField.ProgressBlock>
          <ProgressField.Text>Level </ProgressField.Text>
          <ProgressField.Text>{level} of 12</ProgressField.Text>
        </ProgressField.ProgressBlock>
        <ProgressField.ProgressBlock>
          <ProgressField.Text>Attempts </ProgressField.Text>
          <ProgressField.Text>{levels[level-1].attempts}</ProgressField.Text>
        </ProgressField.ProgressBlock>
      </ProgressField>
    </div>
  );
};

ProgressFields.propTypes = {
  levels: PropTypes.array.isRequired,
  level: PropTypes.number.isRequired,
};

export default ProgressFields;
