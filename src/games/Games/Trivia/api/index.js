import axios from "axios";

export const fetchQuestions = async (parameters) => {
  let changeableUrl = "https://opentdb.com/api.php?amount=";

  const urlParameters = {
    parameters: {
      trivia_amount: parameters.trivia_amount,
      trivia_category: parameters.trivia_category
        ? `&category=${parameters.trivia_category}`
        : "",
      trivia_difficulty: parameters.trivia_difficulty
        ? `&difficulty=${parameters.trivia_difficulty}`
        : "",
      trivia_type: parameters.trivia_type
        ? `&type=${parameters.trivia_type}`
        : "",
    },
  };
  changeableUrl = `${changeableUrl}${urlParameters.parameters.trivia_amount}${urlParameters.parameters.trivia_category}${urlParameters.parameters.trivia_difficulty}${urlParameters.parameters.trivia_type}`;

  try {
    return await axios.get(changeableUrl);
  } catch (error) {
    console.log(error);
  }
};
