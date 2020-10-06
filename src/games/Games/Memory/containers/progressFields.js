import React from "react";
import ProgressField from "../components/progressField";

const ProgressFields = () => {
  return (
    <div>
      <ProgressField>
        <ProgressField.ProgressBlock>
          <ProgressField.Text>Tiles </ProgressField.Text>
          <ProgressField.Text>5</ProgressField.Text>
        </ProgressField.ProgressBlock>
        <ProgressField.ProgressBlock>
          <ProgressField.Text>Level </ProgressField.Text>
          <ProgressField.Text>1 of 12</ProgressField.Text>
        </ProgressField.ProgressBlock>
        <ProgressField.ProgressBlock>
          <ProgressField.Text>Attempts </ProgressField.Text>
          <ProgressField.Text>1</ProgressField.Text>
        </ProgressField.ProgressBlock>
      </ProgressField>
    </div>
  );
};

export default ProgressFields;
