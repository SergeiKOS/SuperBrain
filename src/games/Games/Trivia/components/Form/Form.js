import React from "react";
import PropTypes from "prop-types";

import { FormCss } from "./FormCss.js";

function Form({ userValues: { trivia_amount }, onChange, onSubmit }) {
  return (
    <FormCss>
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="trivia_amount">Number of Questions:</label>
          <input
            type="number"
            name="trivia_amount"
            id="trivia_amount"
            min="1"
            max="50"
            className="input-field"
            value={trivia_amount}
            onChange={onChange}
          />
        </p>

        <p>
          <label htmlFor="trivia_category">Select Category: </label>
          <select
            name="trivia_category"
            className="input-field"
            onChange={onChange}
            id="trivia_category"
          >
            <option value="">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals &amp; Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science &amp; Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">
              Entertainment: Japanese Anime &amp; Manga
            </option>
            <option value="32">Entertainment: Cartoon &amp; Animations</option>{" "}
          </select>
        </p>
        <p>
          <label htmlFor="trivia_difficulty">Select Difficulty: </label>
          <select
            name="trivia_difficulty"
            className="input-field"
            onChange={onChange}
            id="trivia_difficulty"
          >
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </p>
        <p>
          <label htmlFor="trivia_type">Select Type: </label>
          <select
            name="trivia_type"
            className="input-field"
            onChange={onChange}
            id="trivia_type"
          >
            <option value="">Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>
        </p>
        <p className="button-wrapper">
          <button type="submit" className="form-button">
            Start
          </button>
        </p>
      </form>
    </FormCss>
  );
}

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  userValues: PropTypes.shape({
    trivia_amount: PropTypes.string.isRequired,
  }),
};

export default Form;
